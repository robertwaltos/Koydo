"use client";

export interface RecordedAudio {
  blob: Blob;
  url: string;
  mimeType: string;
  durationMs: number;
}

type RecorderState = "idle" | "recording";

export class BrowserAudioRecorder {
  private mediaRecorder: MediaRecorder | null = null;
  private mediaStream: MediaStream | null = null;
  private chunks: BlobPart[] = [];
  private startedAtMs = 0;
  private state: RecorderState = "idle";

  get currentState(): RecorderState {
    return this.state;
  }

  async start(options?: { mimeType?: string }): Promise<void> {
    if (this.state === "recording") {
      throw new Error("Recorder is already running.");
    }
    if (typeof window === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      throw new Error("Audio recording is not supported in this environment.");
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const preferredType = options?.mimeType ?? "audio/webm";
    const mimeType = MediaRecorder.isTypeSupported(preferredType) ? preferredType : "";

    this.mediaStream = stream;
    this.mediaRecorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
    this.chunks = [];
    this.startedAtMs = Date.now();

    this.mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) {
        this.chunks.push(event.data);
      }
    });

    this.mediaRecorder.start();
    this.state = "recording";
  }

  async stop(): Promise<RecordedAudio> {
    if (this.state !== "recording" || !this.mediaRecorder) {
      throw new Error("Recorder is not running.");
    }

    const recorder = this.mediaRecorder;
    const startedAtMs = this.startedAtMs;
    const chunks = this.chunks;

    const finished = await new Promise<Blob>((resolve, reject) => {
      recorder.addEventListener(
        "stop",
        () => {
          try {
            const blob = new Blob(chunks, {
              type: recorder.mimeType || "audio/webm",
            });
            resolve(blob);
          } catch (error) {
            reject(error);
          }
        },
        { once: true },
      );

      recorder.addEventListener(
        "error",
        () => {
          reject(new Error("Audio recording failed while stopping recorder."));
        },
        { once: true },
      );

      recorder.stop();
    });

    this.cleanup();

    return {
      blob: finished,
      url: URL.createObjectURL(finished),
      mimeType: finished.type || "audio/webm",
      durationMs: Math.max(0, Date.now() - startedAtMs),
    };
  }

  cancel() {
    if (this.state !== "recording") {
      return;
    }

    if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
      this.mediaRecorder.stop();
    }
    this.cleanup();
  }

  private cleanup() {
    if (this.mediaStream) {
      for (const track of this.mediaStream.getTracks()) {
        track.stop();
      }
    }

    this.mediaRecorder = null;
    this.mediaStream = null;
    this.chunks = [];
    this.startedAtMs = 0;
    this.state = "idle";
  }
}
