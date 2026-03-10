interface ImagePlaceholderProps {
  label?: string;
  aspect?: string;
  className?: string;
  comment?: string;
}

export default function ImagePlaceholder({
  label = "Project Photography",
  aspect = "aspect-video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gradient-to-br from-deep-navy to-slate-blue ${aspect} flex items-center justify-center ${className}`}
    >
      <span className="text-cream font-body uppercase tracking-[0.15em] text-sm opacity-60">
        {label}
      </span>
    </div>
  );
}
