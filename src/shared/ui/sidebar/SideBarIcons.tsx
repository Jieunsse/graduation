import type { SvgIconProps } from '@shared/ui/sidebar/sidebarType.ts';

export const LiveIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.75 8.5a5 5 0 0 1 0 7"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M16.25 8.5a5 5 0 0 0 0 7"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M5.1 7.1a8 8 0 0 1 0 9.8"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M18.9 7.1a8 8 0 0 0 0 9.8"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

export const CalendarIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect
      x="3.75"
      y="5.25"
      width="16.5"
      height="15"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M8 3.75V7M16 3.75V7M4 10h16"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const NewsIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5.4 5.25h13.2A1.4 1.4 0 0 1 20 6.65V14a2.75 2.75 0 0 1-2.75 2.75H12l-2.75 2.25V16.75H6.75A2.75 2.75 0 0 1 4 14V6.65a1.4 1.4 0 0 1 1.4-1.4z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 9.25h6.75M9 12.25h4.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const DocumentIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 3.75h6.4L19.25 9v11.25A1.5 1.5 0 0 1 17.75 21.75H7a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 3.75V9h5.25"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12.5h6M9 15.5h6"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

export const CreatorIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect
      x="3.75"
      y="6"
      width="16.5"
      height="12.5"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M8 4v2M16 4v2"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path d="M11.25 10.5v3.5L14.5 12z" fill="currentColor" />
  </svg>
);

export const AnalysisIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 19V10.5M10 19V7M15 19v-5.5M20 19V5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4 19.5h16"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
);

export const ChampionshipIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M8 4h8v2.5a3.5 3.5 0 0 0 3.5 3.5h0a4.5 4.5 0 0 1-4.5 4.5h-5a4.5 4.5 0 0 1-4.5-4.5h0A3.5 3.5 0 0 0 8 6.5V4z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 15.5V19h4v-3.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M9.5 19h5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M10.5 9.5 12 11l1.5-1.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const TechIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M12 5.5V3.5M12 20.5v-2M5.5 12h-2M20.5 12h-2M7.1 7.1 5.7 5.7M18.3 18.3l-1.4-1.4M18.3 5.7 16.9 7.1M7.1 16.9l-1.4 1.4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const ThemeIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M19 14.5a7.5 7.5 0 1 1-8.5-9.3 6 6 0 0 0 8.5 9.3z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SunIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {/* 태양 본체 */}
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.4" />

    {/* 태양 광선 */}
    <line
      x1="12"
      y1="1"
      x2="12"
      y2="3"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <line
      x1="12"
      y1="21"
      x2="12"
      y2="23"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <line
      x1="4.22"
      y1="4.22"
      x2="5.64"
      y2="5.64"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <line
      x1="18.36"
      y1="18.36"
      x2="19.78"
      y2="19.78"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <line
      x1="1"
      y1="12"
      x2="3"
      y2="12"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <line
      x1="21"
      y1="12"
      x2="23"
      y2="12"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <line
      x1="4.22"
      y1="19.78"
      x2="5.64"
      y2="18.36"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <line
      x1="18.36"
      y1="5.64"
      x2="19.78"
      y2="4.22"
      stroke="currentColor"
      strokeWidth="1.4"
    />
  </svg>
);

export const SupportIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 20s-7-4.5-7-10A4 4 0 0 1 12 7a4 4 0 0 1 7 3c0 5.5-7 10-7 10z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LanguageIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M4 12h16"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M12 4a12.5 12.5 0 0 1 3 8 12.5 12.5 0 0 1-3 8m0-16a12.5 12.5 0 0 0-3 8 12.5 12.5 0 0 0 3 8"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronDownIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="m7 10 5 5 5-5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
