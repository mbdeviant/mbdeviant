"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ImageLightbox({ images }: { images: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="cursor-pointer"
            onClick={() => setOpenIndex(i)}
          >
            <Image
              width={500}
              height={500}
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="rounded-lg shadow-lg transition-transform duration-200 hover:scale-105"
            />
          </div>
        ))}
      </div>
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in"
          onClick={() => setOpenIndex(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              width={1400}
              height={900}
              src={images[openIndex]}
              alt={`Screenshot ${openIndex + 1}`}
              className="rounded-lg shadow-2xl max-h-[80vh] max-w-[90vw] transition-transform duration-300 scale-100"
            />
          </div>
        </div>
      )}
    </>
  );
}
