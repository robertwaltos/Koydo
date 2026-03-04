# ──────────────────────────────────────────────────────────────────────────
# Koydo Local TTS — Kokoro-82M + XTTS v2
# GPU-accelerated text-to-speech for children's educational content
# ──────────────────────────────────────────────────────────────────────────
FROM nvidia/cuda:12.4.1-runtime-ubuntu22.04

ENV DEBIAN_FRONTEND=noninteractive
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# System deps (ffmpeg needed by pydub for MP3 encoding)
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3.11 python3.11-venv python3-pip \
    ffmpeg libsndfile1 git curl \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set python3.11 as default
RUN update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 1

WORKDIR /app

# Install Python deps
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy application
COPY server.py .
COPY download_models.py .

# Default dirs
RUN mkdir -p /models/kokoro/voices /models/xtts-v2 /models/voice-references /cache

# Expose port
EXPOSE 8100

# Health check
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD curl -f http://localhost:8100/health || exit 1

CMD ["python3", "server.py"]
