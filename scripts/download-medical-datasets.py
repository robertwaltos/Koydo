"""Download all 5 medical curriculum datasets and export as JSON."""
import json
import os
import sys

DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "data", "medical-curriculum")

def download_medmcqa():
    """MedMCQA: 193k medical MCQ questions (MIT License)."""
    from huggingface_hub import hf_hub_download
    import pyarrow.parquet as pq

    out_dir = os.path.join(DATA_DIR, "medmcqa")
    out_file = os.path.join(out_dir, "medmcqa-train.json")
    if os.path.exists(out_file):
        print(f"[medmcqa] Already downloaded: {out_file}")
        return

    print("[medmcqa] Downloading parquet from HuggingFace...")
    path = hf_hub_download(
        repo_id="openlifescienceai/medmcqa",
        filename="data/train-00000-of-00001.parquet",
        repo_type="dataset",
        cache_dir=os.path.join(DATA_DIR, ".cache"),
    )
    print(f"[medmcqa] Reading parquet: {path}")
    table = pq.read_table(path)
    records = table.to_pylist()
    print(f"[medmcqa] {len(records)} records loaded")

    # Save as JSON
    os.makedirs(out_dir, exist_ok=True)
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False)
    print(f"[medmcqa] Saved to {out_file}")


def download_medmcqa_validation():
    """MedMCQA validation set for additional coverage."""
    from huggingface_hub import hf_hub_download
    import pyarrow.parquet as pq

    out_dir = os.path.join(DATA_DIR, "medmcqa")
    out_file = os.path.join(out_dir, "medmcqa-validation.json")
    if os.path.exists(out_file):
        print(f"[medmcqa-val] Already downloaded: {out_file}")
        return

    print("[medmcqa-val] Downloading validation parquet...")
    path = hf_hub_download(
        repo_id="openlifescienceai/medmcqa",
        filename="data/validation-00000-of-00001.parquet",
        repo_type="dataset",
        cache_dir=os.path.join(DATA_DIR, ".cache"),
    )
    table = pq.read_table(path)
    records = table.to_pylist()
    print(f"[medmcqa-val] {len(records)} records loaded")

    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False)
    print(f"[medmcqa-val] Saved to {out_file}")


def download_medical_meadow():
    """Medical Meadow Flashcards: 34k flashcards (CC License)."""
    from huggingface_hub import hf_hub_download

    out_dir = os.path.join(DATA_DIR, "medical-meadow")
    out_file = os.path.join(out_dir, "medical-meadow-flashcards.json")
    if os.path.exists(out_file):
        print(f"[medical-meadow] Already downloaded: {out_file}")
        return

    print("[medical-meadow] Downloading from HuggingFace...")
    path = hf_hub_download(
        repo_id="medalpaca/medical_meadow_medical_flashcards",
        filename="medical_meadow_medical_flashcards.json",
        repo_type="dataset",
        cache_dir=os.path.join(DATA_DIR, ".cache"),
    )
    print(f"[medical-meadow] Reading JSON: {path}")
    with open(path, "r", encoding="utf-8") as f:
        records = json.load(f)
    print(f"[medical-meadow] {len(records)} records loaded")

    os.makedirs(out_dir, exist_ok=True)
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False)
    print(f"[medical-meadow] Saved to {out_file}")


def download_medqa():
    """MedQA: USMLE-style questions (MIT License)."""
    import urllib.request

    out_dir = os.path.join(DATA_DIR, "medqa")
    out_file = os.path.join(out_dir, "medqa-usmle-train.jsonl")
    if os.path.exists(out_file):
        print(f"[medqa] Already downloaded: {out_file}")
        return

    # MedQA stores data in a Google Drive link packaged in the repo
    # Try HuggingFace mirror first
    print("[medqa] Downloading from HuggingFace...")
    try:
        from huggingface_hub import hf_hub_download
        path = hf_hub_download(
            repo_id="bigbio/med_qa",
            filename="data/US/train.jsonl",
            repo_type="dataset",
            cache_dir=os.path.join(DATA_DIR, ".cache"),
        )
        os.makedirs(out_dir, exist_ok=True)
        import shutil
        shutil.copy2(path, out_file)
        # Count lines
        with open(out_file, "r", encoding="utf-8") as f:
            count = sum(1 for _ in f)
        print(f"[medqa] {count} records saved to {out_file}")
    except Exception as e:
        print(f"[medqa] HuggingFace download failed: {e}")
        # Fallback: try GBaker's MedQA mirror
        try:
            from huggingface_hub import hf_hub_download
            path = hf_hub_download(
                repo_id="GBaker/MedQA-USMLE-4-options",
                filename="data/train-00000-of-00001.parquet",
                repo_type="dataset",
                cache_dir=os.path.join(DATA_DIR, ".cache"),
            )
            import pyarrow.parquet as pq
            table = pq.read_table(path)
            records = table.to_pylist()
            print(f"[medqa] {len(records)} records from parquet mirror")
            os.makedirs(out_dir, exist_ok=True)
            out_json = os.path.join(out_dir, "medqa-usmle-train.json")
            with open(out_json, "w", encoding="utf-8") as f:
                json.dump(records, f, ensure_ascii=False)
            print(f"[medqa] Saved to {out_json}")
        except Exception as e2:
            print(f"[medqa] Fallback also failed: {e2}")


def download_medquad():
    """MedQuAD: 47k medical Q&A pairs (CC-BY-4.0)."""
    import urllib.request
    import zipfile

    out_dir = os.path.join(DATA_DIR, "medquad")
    marker = os.path.join(out_dir, "_download_complete")
    if os.path.exists(marker):
        print(f"[medquad] Already downloaded")
        return

    print("[medquad] Downloading from GitHub...")
    zip_url = "https://github.com/abachaa/MedQuAD/archive/refs/heads/master.zip"
    zip_path = os.path.join(out_dir, "medquad.zip")
    os.makedirs(out_dir, exist_ok=True)

    urllib.request.urlretrieve(zip_url, zip_path)
    print(f"[medquad] Extracting...")

    with zipfile.ZipFile(zip_path, "r") as z:
        z.extractall(out_dir)

    os.remove(zip_path)
    with open(marker, "w") as f:
        f.write("done")
    print(f"[medquad] Extracted to {out_dir}")


def download_openstax():
    """OpenStax medical textbooks metadata (CC-BY-4.0)."""
    import urllib.request

    out_dir = os.path.join(DATA_DIR, "openstax")
    out_file = os.path.join(out_dir, "openstax-books.json")
    if os.path.exists(out_file):
        print(f"[openstax] Already downloaded: {out_file}")
        return

    # Download book list from OpenStax API
    print("[openstax] Fetching book catalog from OpenStax API...")
    os.makedirs(out_dir, exist_ok=True)

    # Medical-relevant OpenStax books
    medical_books = [
        {"slug": "anatomy-and-physiology-2e", "title": "Anatomy and Physiology 2e"},
        {"slug": "microbiology", "title": "Microbiology"},
        {"slug": "biology-2e", "title": "Biology 2e"},
        {"slug": "concepts-of-biology", "title": "Concepts of Biology"},
        {"slug": "chemistry-2e", "title": "Chemistry 2e"},
        {"slug": "psychology-2e", "title": "Psychology 2e"},
    ]

    all_content = []
    for book in medical_books:
        url = f"https://openstax.org/apps/archive/20250226.204519/contents/{book['slug']}.json"
        print(f"  [openstax] Fetching {book['title']}...")
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Koydo-Curriculum-Builder/1.0"})
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                all_content.append({
                    "slug": book["slug"],
                    "title": book["title"],
                    "tree": data.get("tree", {}),
                    "license": "CC-BY-4.0",
                })
                chapters = []
                def count_pages(node, depth=0):
                    if "contents" in node:
                        for child in node["contents"]:
                            count_pages(child, depth + 1)
                    else:
                        chapters.append(node.get("title", ""))
                count_pages(data.get("tree", {}))
                print(f"    {len(chapters)} pages found")
        except Exception as e:
            print(f"    [openstax] Failed to fetch {book['title']}: {e}")

    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(all_content, f, ensure_ascii=False, indent=2)
    print(f"[openstax] Saved {len(all_content)} books to {out_file}")


if __name__ == "__main__":
    import concurrent.futures

    print("=" * 60)
    print(" Medical Curriculum Dataset Downloader")
    print("=" * 60)

    tasks = [
        ("MedMCQA (train)", download_medmcqa),
        ("MedMCQA (validation)", download_medmcqa_validation),
        ("Medical Meadow", download_medical_meadow),
        ("MedQA", download_medqa),
        ("MedQuAD", download_medquad),
        ("OpenStax", download_openstax),
    ]

    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:
        futures = {ex.submit(fn): name for name, fn in tasks}
        for future in concurrent.futures.as_completed(futures):
            name = futures[future]
            try:
                future.result()
                print(f"[DONE] {name}")
            except Exception as e:
                print(f"[ERROR] {name}: {e}")

    print("\n" + "=" * 60)
    print(" All downloads complete!")
    print("=" * 60)
