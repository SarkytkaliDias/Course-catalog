"use client";

import { useState } from "react";

type LikeButtonProps = { initialLikes: number };

export function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);
  return (
    <button onClick={() => setLikes((prev) => prev + 1)} className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700">
      ❤ {likes}
    </button>
  );
}
