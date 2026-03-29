import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

const iconStyle = {
  stroke: '#C9A96E', // warm gold
  strokeWidth: '1.5px',
  fill: 'none',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const ShieldIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    style={iconStyle}
  >
    <path d="M24 4L36 8V20C36 30 24 44 24 44C24 44 12 30 12 20V8L24 4Z" />
    <path d="M18 22L22 26L30 18" />
  </svg>
);

export const WifiIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    style={iconStyle}
  >
    <path d="M8 18C14.5 11.5 33.5 11.5 40 18" />
    <path d="M12 24C16.5 19.5 31.5 19.5 36 24" />
    <path d="M16 30C18.5 27.5 29.5 27.5 32 30" />
    <circle cx="24" cy="36" r="2" />
  </svg>
);

export const FilmIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    style={iconStyle}
  >
    <rect x="6" y="12" width="36" height="24" rx="2" />
    <path d="M42 16L48 12V36L42 32" />
    <circle cx="15" cy="21" r="1.5" />
    <circle cx="15" cy="27" r="1.5" />
    <circle cx="33" cy="21" r="1.5" />
    <circle cx="33" cy="27" r="1.5" />
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    style={iconStyle}
  >
    <circle cx="24" cy="24" r="8" />
    <path d="M24 4V8" />
    <path d="M24 40V44" />
    <path d="M44 24H40" />
    <path d="M8 24H4" />
    <path d="M37.66 10.34L35.54 12.46" />
    <path d="M12.46 35.54L10.34 37.66" />
    <path d="M37.66 37.66L35.54 35.54" />
    <path d="M12.46 12.46L10.34 10.34" />
  </svg>
);

export const MicIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    style={iconStyle}
  >
    <rect x="18" y="8" width="12" height="20" rx="6" />
    <path d="M12 24C12 30 17.5 35 24 35C30.5 35 36 30 36 24" />
    <path d="M24 35V44" />
    <path d="M18 44H30" />
  </svg>
);

export const BlindsIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    style={iconStyle}
  >
    <rect x="8" y="6" width="32" height="36" rx="2" />
    <path d="M8 12H40" />
    <path d="M8 18H40" />
    <path d="M8 24H40" />
    <path d="M8 30H40" />
    <path d="M8 36H40" />
    <circle cx="36" cy="15" r="1.5" />
    <path d="M36 15V21" />
  </svg>
);

export const SmartHomeIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    style={iconStyle}
  >
    <path d="M8 20L24 8L40 20V40C40 41.1 39.1 42 38 42H10C8.9 42 8 41.1 8 40V20Z" />
    <path d="M18 42V26C18 24.9 18.9 24 20 24H28C29.1 24 30 24.9 30 26V42" />
    <circle cx="33" cy="18" r="2" />
    <path d="M16 16H20" />
    <path d="M16 20H20" />
  </svg>
);

export const RefreshIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    style={iconStyle}
  >
    <path d="M40 24C40 33.9 31.9 42 22 42C12.1 42 4 33.9 4 24C4 14.1 12.1 6 22 6C28.5 6 34.1 9.4 37.4 14.6" />
    <path d="M44 10L37.4 14.6L33 8" />
    <circle cx="24" cy="24" r="6" />
  </svg>
);

export const WrenchIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    style={iconStyle}
  >
    <path d="M36.5 7.5C38.7 9.7 39.3 13 37.8 15.9L26.9 26.8C26.3 27.4 26.3 28.4 26.9 29L30 32.1C30.6 32.7 30.6 33.7 30 34.3L25.7 38.6C25.1 39.2 24.1 39.2 23.5 38.6L9.4 24.5C8.8 23.9 8.8 22.9 9.4 22.3L13.7 18C14.3 17.4 15.3 17.4 15.9 18L19 21.1C19.6 21.7 20.6 21.7 21.2 21.1L32.1 10.2C35 8.7 38.3 9.3 40.5 11.5" />
    <circle cx="35" cy="13" r="2" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    style={iconStyle}
  >
    <circle cx="24" cy="24" r="18" />
    <path d="M24 8V24L32 32" />
    <path d="M12 12L15 15" />
    <path d="M33 33L36 36" />
  </svg>
);

export const CameraIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    style={iconStyle}
  >
    <rect x="6" y="14" width="36" height="26" rx="3" />
    <path d="M16 14L18 8H30L32 14" />
    <circle cx="24" cy="27" r="7" />
    <path d="M34 18H38" />
  </svg>
);

export const LockIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    style={iconStyle}
  >
    <rect x="10" y="22" width="28" height="20" rx="3" />
    <path d="M16 22V14C16 9.6 19.6 6 24 6C28.4 6 32 9.6 32 14V22" />
    <circle cx="24" cy="32" r="3" />
    <path d="M24 35V38" />
  </svg>
);