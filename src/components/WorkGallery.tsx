"use client";

import { useState, useCallback } from "react";
import { galleryImages, TAG_MAP, ALL_TAGS } from "@/content/gallery";
import SectionReveal from "./SectionReveal";
import Link from "next/link";

export default function WorkGallery() {
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const toggleTag = useCallback((tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  }, []);

  const filteredImages =
    activeTags.size === 0
      ? galleryImages
      : galleryImages.filter((img) =>
          img.tags.some((t) => activeTags.has(t))
        );

  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (dir: -1 | 1) => {
    if (lightboxIndex === null) return;
    const next = lightboxIndex + dir;
    if (next >= 0 && next < filteredImages.length) {
      setLightboxIndex(next);
    }
  };

  return (
    <>
      {/* Filter Bar */}
      <div className="sticky top-20 lg:top-24 z-30 bg-cream/95 backdrop-blur-md border-b border-warm-taupe/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 flex flex-wrap gap-3 lg:gap-6 justify-center">
          <button
            onClick={() => setActiveTags(new Set())}
            className={`font-body text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 pb-1 border-b-2 cursor-pointer ${
              activeTags.size === 0
                ? "text-deep-navy border-deep-navy"
                : "text-warm-taupe border-transparent hover:text-slate-blue"
            }`}
          >
            ALL
          </button>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`font-body text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 pb-1 border-b-2 cursor-pointer ${
                activeTags.has(tag)
                  ? "text-deep-navy border-deep-navy"
                  : "text-warm-taupe border-transparent hover:text-slate-blue"
              }`}
            >
              {TAG_MAP[tag]}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid — Masonry via columns */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-5">
            {filteredImages.map((image, i) => (
              <SectionReveal key={image.id} delay={Math.min(i * 0.08, 0.4)}>
                <div
                  className="mb-4 lg:mb-5 break-inside-avoid cursor-pointer group relative overflow-hidden"
                  onClick={() => setLightboxIndex(i)}
                >
                  {/* Placeholder — will be replaced with Next.js Image when real photos arrive */}
                  <div
                    className={`bg-gradient-to-br from-deep-navy to-slate-blue flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700 ${
                      image.aspect === "portrait"
                        ? "aspect-[3/4]"
                        : image.aspect === "square"
                        ? "aspect-square"
                        : "aspect-video"
                    }`}
                  >
                    <span className="text-cream font-body uppercase tracking-[0.15em] text-sm opacity-60">
                      {image.alt}
                    </span>
                  </div>
                  {/* Hover overlay with tags */}
                  <div className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/40 transition-colors duration-500 flex items-end p-4">
                    <div className="flex gap-2 flex-wrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                      {image.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-cream text-[11px] font-body font-semibold uppercase tracking-[0.1em] bg-cream/20 px-2 py-1"
                        >
                          {TAG_MAP[tag]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <p className="text-center text-warm-taupe font-body text-[16px] py-20">
              No photos match the selected filters.
            </p>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-cream pb-[120px] lg:pb-[160px]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="font-forum text-deep-navy text-[32px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Inspired? Let&apos;s Talk.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <Link
              href="/contact"
              className="inline-block font-body font-bold text-[14px] tracking-[0.1em] uppercase px-10 py-4 bg-deep-navy text-cream hover:bg-slate-blue transition-all duration-300"
            >
              BEGIN YOUR PROJECT
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[9998] bg-deep-navy/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-cream text-2xl hover:text-warm-taupe transition-colors cursor-pointer z-10"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(-1);
              }}
              className="absolute left-4 lg:left-8 text-cream text-3xl hover:text-warm-taupe transition-colors cursor-pointer z-10"
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-[85vw] max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-deep-navy to-slate-blue w-[80vw] max-w-[1000px] aspect-video flex items-center justify-center">
              <span className="text-cream font-body uppercase tracking-[0.15em] text-sm opacity-60">
                {filteredImages[lightboxIndex].alt}
              </span>
            </div>
            <div className="flex gap-2 mt-4">
              {filteredImages[lightboxIndex].tags.map((tag) => (
                <span
                  key={tag}
                  className="text-cream/70 text-[11px] font-body font-semibold uppercase tracking-[0.1em] bg-cream/10 px-3 py-1"
                >
                  {TAG_MAP[tag]}
                </span>
              ))}
            </div>
          </div>

          {/* Next */}
          {lightboxIndex < filteredImages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(1);
              }}
              className="absolute right-4 lg:right-8 text-cream text-3xl hover:text-warm-taupe transition-colors cursor-pointer z-10"
              aria-label="Next"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
