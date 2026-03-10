interface ServiceIconProps {
  icon: string;
  className?: string;
}

export default function ServiceIcon({ icon, className = "w-10 h-10" }: ServiceIconProps) {
  const strokeProps = {
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };

  switch (icon) {
    case "lighting":
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      );
    case "automation":
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6M9 12h4M9 15h5" />
        </svg>
      );
    case "av":
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M10 9l5 3-5 3V9z" />
        </svg>
      );
    case "shades":
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M3 8h18M3 13h18" />
          <line x1="12" y1="18" x2="12" y2="21" />
          <circle cx="12" cy="21" r="1" fill="currentColor" />
        </svg>
      );
    case "networking":
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
          <path d="M12 7v4M8.5 16.5L11 13M15.5 16.5L13 13" />
          <circle cx="12" cy="13" r="1" fill="currentColor" />
        </svg>
      );
    case "security":
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}
