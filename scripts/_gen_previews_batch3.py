"""Generate chapter previews for batch 3 module writing."""
import json, pathlib

data_path = pathlib.Path(__file__).parent / "_chapter_data_batch3.json"
with open(data_path, encoding="utf-8") as f:
    data = json.load(f)

# Generate previews in 5 batches of 10
keys = list(data.keys())
for batch_idx in range(5):
    start = batch_idx * 10
    end = start + 10
    batch_keys = keys[start:end]
    
    out_path = pathlib.Path(f"D:/ch_preview_b3_{batch_idx+1}.txt")
    with open(out_path, "w", encoding="utf-8") as out:
        for key in batch_keys:
            entry = data[key]
            meta = entry["meta"]
            chapters = entry["chapters"]
            
            out.write(f"\n{'='*80}\n")
            out.write(f"KEY: {key}\n")
            out.write(f"TITLE: {meta['title']}\n")
            out.write(f"CREATOR: {meta['creator']}\n")
            out.write(f"SUBJECT: {meta['subject']}\n")
            out.write(f"CHAPTERS: {len(chapters)}\n")
            out.write(f"{'='*80}\n\n")
            
            for i, ch in enumerate(chapters):
                heading = ch["heading"]
                text = ch["text"]
                char_count = ch["char_count"]
                # Show first 2000 chars of each chapter
                preview = text[:2000]
                out.write(f"--- Chapter {i+1}: {heading} ({char_count} chars) ---\n")
                out.write(preview)
                out.write("\n\n")
    
    print(f"Batch {batch_idx+1}: {len(batch_keys)} books -> {out_path}")

print("Done!")
