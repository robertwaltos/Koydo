"""
Download datasets for MBA, Law, EE, and Master's level courses.
Uses HuggingFace Hub for all datasets.
"""
import json
import os
import sys
import concurrent.futures

DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "data")


def ensure_dir(path):
    os.makedirs(path, exist_ok=True)
    return path


def download_parquet_dataset(repo_id, config, split, out_path, label, filename_pattern=None):
    """Download a HuggingFace dataset split as parquet and convert to JSON."""
    if os.path.exists(out_path):
        print(f"  [{label}] Already exists: {out_path}")
        return

    from huggingface_hub import hf_hub_download
    import pyarrow.parquet as pq

    print(f"  [{label}] Downloading {repo_id} ({config}/{split})...")
    cache_dir = os.path.join(DATA_DIR, ".hf-cache")

    try:
        # Try to find the parquet file
        if filename_pattern:
            fname = filename_pattern
        else:
            fname = f"data/{split}-00000-of-00001.parquet"

        path = hf_hub_download(
            repo_id=repo_id,
            filename=fname,
            repo_type="dataset",
            cache_dir=cache_dir,
        )
        table = pq.read_table(path)
        records = table.to_pylist()
    except Exception as e:
        print(f"  [{label}] Primary path failed ({e}), trying alternatives...")
        # Try different path patterns
        alternatives = [
            f"{split}-00000-of-00001.parquet",
            f"data/{config}/{split}-00000-of-00001.parquet",
            f"{config}/{split}-00000-of-00001.parquet",
            f"{split}.parquet",
        ]
        records = None
        for alt in alternatives:
            try:
                path = hf_hub_download(
                    repo_id=repo_id, filename=alt,
                    repo_type="dataset", cache_dir=cache_dir,
                )
                table = pq.read_table(path)
                records = table.to_pylist()
                print(f"  [{label}] Found at: {alt}")
                break
            except Exception:
                continue

        if records is None:
            print(f"  [{label}] FAILED: Could not find parquet file")
            return

    print(f"  [{label}] {len(records)} records loaded")
    ensure_dir(os.path.dirname(out_path))
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False)
    print(f"  [{label}] Saved to {out_path}")


def download_mmlu_all():
    """Download MMLU - all subjects (231k questions, MIT)."""
    out_path = os.path.join(DATA_DIR, "mmlu", "mmlu-test.json")
    download_parquet_dataset(
        "cais/mmlu", "all", "test", out_path, "mmlu-test"
    )

    out_val = os.path.join(DATA_DIR, "mmlu", "mmlu-validation.json")
    download_parquet_dataset(
        "cais/mmlu", "all", "validation", out_val, "mmlu-val"
    )


def download_mmlu_pro():
    """Download MMLU-Pro (12k advanced questions, MIT)."""
    out_path = os.path.join(DATA_DIR, "mmlu-pro", "mmlu-pro-test.json")
    download_parquet_dataset(
        "TIGER-Lab/MMLU-Pro", "default", "test", out_path, "mmlu-pro"
    )


def download_finqa():
    """Download FinQA (8k financial reasoning, CC-BY-4.0)."""
    for split in ["train", "validation", "test"]:
        out_path = os.path.join(DATA_DIR, "finqa", f"finqa-{split}.json")
        download_parquet_dataset(
            "ibm/finqa", "default", split, out_path, f"finqa-{split}"
        )


def download_casehold():
    """Download CaseHOLD (53k legal case holdings, Apache 2.0)."""
    out_path = os.path.join(DATA_DIR, "casehold", "casehold-train.json")
    download_parquet_dataset(
        "casehold/casehold", "all", "train", out_path, "casehold-train"
    )


def download_cuad():
    """Download CUAD contract QA (26k, CC-BY-4.0)."""
    out_path = os.path.join(DATA_DIR, "cuad", "cuad-train.json")
    download_parquet_dataset(
        "theatticusproject/cuad-qa", "default", "train", out_path, "cuad-train"
    )


def download_datatonic_cases():
    """Download DataTonic business case studies (40k, MIT)."""
    out_path = os.path.join(DATA_DIR, "datatonic-cases", "cases-train.json")
    download_parquet_dataset(
        "DataTonic/dark_thoughts_case_study_reason", "default", "train",
        out_path, "datatonic-cases"
    )


def download_cot_legal():
    """Download CoT Legal Issues and Laws (MIT)."""
    out_path = os.path.join(DATA_DIR, "cot-legal", "cot-legal.json")
    if os.path.exists(out_path):
        print(f"  [cot-legal] Already exists")
        return

    from huggingface_hub import hf_hub_download
    cache_dir = os.path.join(DATA_DIR, ".hf-cache")

    print("  [cot-legal] Downloading...")
    try:
        path = hf_hub_download(
            repo_id="mattwesney/CoT_Legal_Issues_And_Laws",
            filename="data.json",
            repo_type="dataset",
            cache_dir=cache_dir,
        )
        import shutil
        ensure_dir(os.path.dirname(out_path))
        shutil.copy2(path, out_path)
        with open(out_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        print(f"  [cot-legal] {len(data)} records saved")
    except Exception as e:
        # Try parquet
        try:
            download_parquet_dataset(
                "mattwesney/CoT_Legal_Issues_And_Laws", "default", "train",
                out_path, "cot-legal"
            )
        except Exception as e2:
            print(f"  [cot-legal] FAILED: {e2}")


def download_law_stack_exchange():
    """Download Law Stack Exchange QA (CC-BY-SA-4.0)."""
    out_path = os.path.join(DATA_DIR, "law-stackexchange", "law-se-train.json")
    download_parquet_dataset(
        "jonathanli/law-stack-exchange", "default", "train",
        out_path, "law-se-train"
    )


def download_ee_task695():
    """Download EE questions (Apache 2.0)."""
    out_path = os.path.join(DATA_DIR, "ee-mmlu", "ee-task695-train.json")
    download_parquet_dataset(
        "Lots-of-LoRAs/task695_mmmlu_answer_generation_electrical_engineering",
        "default", "train", out_path, "ee-task695"
    )


def download_theoremqa():
    """Download TheoremQA (MIT)."""
    out_path = os.path.join(DATA_DIR, "theoremqa", "theoremqa-test.json")
    download_parquet_dataset(
        "TIGER-Lab/TheoremQA", "default", "test",
        out_path, "theoremqa"
    )


if __name__ == "__main__":
    print("=" * 60)
    print(" Universal Dataset Downloader")
    print("=" * 60)

    tasks = [
        ("MMLU (all subjects)", download_mmlu_all),
        ("MMLU-Pro", download_mmlu_pro),
        ("FinQA", download_finqa),
        ("CaseHOLD", download_casehold),
        ("CUAD", download_cuad),
        ("DataTonic Cases", download_datatonic_cases),
        ("CoT Legal", download_cot_legal),
        ("Law StackExchange", download_law_stack_exchange),
        ("EE Task695", download_ee_task695),
        ("TheoremQA", download_theoremqa),
    ]

    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:
        futures = {ex.submit(fn): name for name, fn in tasks}
        for future in concurrent.futures.as_completed(futures):
            name = futures[future]
            try:
                future.result()
                print(f"  [DONE] {name}")
            except Exception as e:
                print(f"  [ERROR] {name}: {e}")

    print("\n" + "=" * 60)
    print(" All downloads complete!")
    print("=" * 60)
