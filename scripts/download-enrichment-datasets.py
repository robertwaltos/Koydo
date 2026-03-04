#!/usr/bin/env python3
"""
download-enrichment-datasets.py

Downloads free educational datasets from Hugging Face for curriculum enrichment.
All datasets are MIT, Apache 2.0, CC-BY, or public domain licensed.

Usage:
    python scripts/download-enrichment-datasets.py
"""

import os
import json
import sys

DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "data")

DATASETS = {
    "aqua-rat": {
        "hf_path": "deepmind/aqua_rat",
        "subsets": ["raw"],
        "splits": ["train", "validation", "test"],
        "description": "98K algebra word problems with rationales",
        "license": "Apache-2.0",
    },
    "gsm8k": {
        "hf_path": "openai/gsm8k",
        "subsets": ["main"],
        "splits": ["train", "test"],
        "description": "8.8K grade-school math with solutions",
        "license": "MIT",
    },
    "math-dataset": {
        "hf_path": "lighteval/MATH",
        "subsets": ["all"],
        "splits": ["train", "test"],
        "description": "12.5K competition math problems",
        "license": "MIT",
    },
    "pubmedqa": {
        "hf_path": "qiaojin/PubMedQA",
        "subsets": ["pqa_labeled", "pqa_artificial"],
        "splits": ["train"],
        "description": "273K biomedical MCQs from PubMed",
        "license": "MIT",
    },
    "commonsenseqa": {
        "hf_path": "tau/commonsense_qa",
        "subsets": ["default"],
        "splits": ["train", "validation"],
        "description": "12K general knowledge MCQs",
        "license": "MIT",
    },
    "arc": {
        "hf_path": "allenai/ai2_arc",
        "subsets": ["ARC-Easy", "ARC-Challenge"],
        "splits": ["train", "validation", "test"],
        "description": "7.7K grade-school science MCQs",
        "license": "CC-BY-SA-4.0",
    },
    "sciq": {
        "hf_path": "allenai/sciq",
        "subsets": ["default"],
        "splits": ["train", "validation", "test"],
        "description": "13.7K science MCQs with support docs",
        "license": "CC-BY-NC-3.0",
    },
}


def download_dataset(name, config):
    """Download a single dataset from Hugging Face."""
    try:
        from datasets import load_dataset
    except ImportError:
        print("ERROR: 'datasets' package not installed. Run: pip install datasets")
        sys.exit(1)

    out_dir = os.path.join(DATA_DIR, name)
    os.makedirs(out_dir, exist_ok=True)

    print(f"\n{'='*60}")
    print(f"Downloading: {name}")
    print(f"  HF path: {config['hf_path']}")
    print(f"  License: {config['license']}")
    print(f"  Description: {config['description']}")
    print(f"{'='*60}")

    total_rows = 0

    for subset in config["subsets"]:
        for split in config["splits"]:
            try:
                print(f"  Loading {subset}/{split}...", end=" ", flush=True)
                ds = load_dataset(config["hf_path"], subset, split=split, trust_remote_code=True)
                rows = len(ds)
                total_rows += rows

                out_file = os.path.join(out_dir, f"{subset}-{split}.jsonl")
                with open(out_file, "w", encoding="utf-8") as f:
                    for row in ds:
                        f.write(json.dumps(row, ensure_ascii=False) + "\n")

                print(f"{rows:,} rows → {out_file}")

            except Exception as e:
                err_msg = str(e)
                if "doesn't exist" in err_msg or "not found" in err_msg:
                    print(f"SKIP (split not available)")
                else:
                    print(f"ERROR: {err_msg}")

    print(f"  Total: {total_rows:,} rows for {name}")
    return total_rows


def main():
    print("=" * 60)
    print("Koydo Enrichment Dataset Downloader")
    print(f"Output directory: {DATA_DIR}")
    print("=" * 60)

    grand_total = 0

    for name, config in DATASETS.items():
        count = download_dataset(name, config)
        grand_total += count

    print(f"\n{'='*60}")
    print(f"All downloads complete. Grand total: {grand_total:,} rows")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
