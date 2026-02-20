"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lesson } from "@/lib/data/curriculum";
import { toLessonPath } from "@/lib/routing/paths";

export default function RecommendedLesson() {
  const [recommendation, setRecommendation] = useState<Lesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const response = await fetch("/api/ai/recommendations");
        const data = await response.json();
        if (data.recommendation) {
          setRecommendation(data.recommendation);
        }
      } catch (error) {
        console.error("Failed to fetch recommendation", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendation();
  }, []);

  if (isLoading) {
    return (
      <div className="h-24 w-full animate-pulse rounded-2xl bg-sky-100" />
    );
  }

  if (!recommendation) {
    return (
      <div className="rounded-2xl border border-green-300 bg-green-50 p-4 text-center">
        <p className="font-semibold text-green-800">
          Great work! We have no new recommendations for you right now.
        </p>
      </div>
    );
  }

  return (
    <Link
      href={toLessonPath(recommendation.id)}
      className="block rounded-2xl border-2 border-indigo-300 bg-gradient-to-r from-indigo-50 via-rose-50 to-sky-50 p-6 shadow-md transition-transform hover:scale-[1.02]"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-indigo-700">
          Recommended For You
        </h3>
        <span className="text-sm font-semibold text-white bg-indigo-600 px-3 py-1 rounded-full">
          Next Up
        </span>
      </div>
      <p className="mt-2 text-xl font-semibold">{recommendation.title}</p>
      <p className="mt-1 text-sm text-zinc-600">
        Let&apos;s work on this skill next to keep improving!
      </p>
    </Link>
  );
}
