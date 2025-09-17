import { useState } from 'react';
import styles from './sidebar.module.css';

type SvgIconProps = {
  className?: string;
};

const LiveIcon = ({ className }: SvgIconProps) => (
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

const CalendarIcon = ({ className }: SvgIconProps) => (
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

const NewsIcon = ({ className }: SvgIconProps) => (
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

const DocumentIcon = ({ className }: SvgIconProps) => (
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
    <path d="M9 12.5h6M9 15.5h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const CreatorIcon = ({ className }: SvgIconProps) => (
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
    <path d="M8 4v2M16 4v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M11.25 10.5v3.5L14.5 12z" fill="currentColor" />
  </svg>
);

const AnalysisIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 19V10.5M10 19V7M15 19v-5.5M20 19V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 19.5h16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.7" />
  </svg>
);

const ChampionshipIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M8 4h8v2.5a3.5 3.5 0 0 0 3.5 3.5h0a4.5 4.5 0 0 1-4.5 4.5h-5a4.5 4.5 0 0 1-4.5-4.5h0A3.5 3.5 0 0 0 8 6.5V4z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10 15.5V19h4v-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M9.5 19h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
    <path d="M10.5 9.5 12 11l1.5-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const TechIcon = ({ className }: SvgIconProps) => (
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

const SupportIcon = ({ className }: SvgIconProps) => (
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

const ThemeIcon = ({ className }: SvgIconProps) => (
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

const LanguageIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
    <path d="M4 12h16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path
      d="M12 4a12.5 12.5 0 0 1 3 8 12.5 12.5 0 0 1-3 8m0-16a12.5 12.5 0 0 0-3 8 12.5 12.5 0 0 0 3 8"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDownIcon = ({ className }: SvgIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m7 10 5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type MenuItem = {
  label: string;
  Icon: (props: SvgIconProps) => JSX.Element;
  variant?: 'highlight';
  tag?: string;
};

type CollapsibleNavItem = {
  label: string;
  Icon: (props: SvgIconProps) => JSX.Element;
  subItems: string[];
};

type ControlItem = {
  label: string;
  value: string;
  Icon: (props: SvgIconProps) => JSX.Element;
};

const primaryNavigation: MenuItem[] = [
  { label: '라이브 타이밍', Icon: LiveIcon, variant: 'highlight', tag: 'LIVE' },
  { label: '레이스 캘린더', Icon: CalendarIcon },
  { label: '최신 뉴스', Icon: NewsIcon },
  { label: 'FIA 문서', Icon: DocumentIcon },
  { label: '크리에이터 콘텐츠', Icon: CreatorIcon },
];

const collapsibleNavigation: CollapsibleNavItem[] = [
  {
    label: '레이스 분석',
    Icon: AnalysisIcon,
    subItems: ['랩타임 비교', '피트 전략', '트랙 포지션'],
  },
  {
    label: '챔피언십',
    Icon: ChampionshipIcon,
    subItems: ['드라이버 순위', '컨스트럭터 순위'],
  },
  {
    label: '테크니컬',
    Icon: TechIcon,
    subItems: ['업데이트 추적', '기술 규정 정리'],
  },
  {
    label: '지원',
    Icon: SupportIcon,
    subItems: ['고객 센터', '커뮤니티'],
  },
];

const controlItems: ControlItem[] = [
  {
    label: '테마',
    value: '다크',
    Icon: ThemeIcon,
  },
  {
    label: '언어',
    value: '한국어',
    Icon: LanguageIcon,
  },
];

export const SideBar = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() =>
    collapsibleNavigation.reduce<Record<string, boolean>>((acc, item, index) => {
      acc[item.label] = index === 0;
      return acc;
    }, {}),
  );

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <aside className={styles.container} aria-label="사이드바 내비게이션">
      <div>
        <nav className={styles.section} aria-label="주요 메뉴">
          <ul className={styles.menuList}>
            {primaryNavigation.map((item) => {
              const IconComponent = item.Icon;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    className={`${styles.menuButton} ${
                      item.variant === 'highlight' ? styles.menuButtonHighlight : ''
                    }`}
                  >
                    <span className={styles.menuButtonContent}>
                      <span className={styles.iconWrapper}>
                        <IconComponent className={styles.icon} />
                      </span>
                      <span className={styles.label}>{item.label}</span>
                    </span>
                    {item.tag ? <span className={styles.tag}>{item.tag}</span> : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <hr className={styles.divider} />

        <nav className={styles.section} aria-label="세부 메뉴">
          <ul className={styles.menuList}>
            {collapsibleNavigation.map((section) => {
              const IconComponent = section.Icon;
              const isOpen = Boolean(openSections[section.label]);

              return (
                <li key={section.label} className={styles.collapsibleItem}>
                  <button
                    type="button"
                    className={`${styles.menuButton} ${styles.menuButtonCollapsible} ${
                      isOpen ? styles.menuButtonOpen : ''
                    }`}
                    onClick={() => toggleSection(section.label)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.menuButtonContent}>
                      <span className={styles.iconWrapper}>
                        <IconComponent className={styles.icon} />
                      </span>
                      <span className={styles.label}>{section.label}</span>
                    </span>
                    <ChevronDownIcon
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                    />
                  </button>
                  {isOpen ? (
                    <ul className={styles.subMenu}>
                      {section.subItems.map((subItem) => (
                        <li key={subItem}>
                          <button type="button" className={styles.subMenuButton}>
                            {subItem}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className={styles.controls}>
        {controlItems.map((control) => {
          const IconComponent = control.Icon;

          return (
            <button type="button" className={styles.controlButton} key={control.label}>
              <span className={styles.controlContent}>
                <span className={styles.controlIcon}>
                  <IconComponent className={styles.icon} />
                </span>
                <span>
                  <span className={styles.controlLabel}>{control.label}</span>
                  <span className={styles.controlValue}>{control.value}</span>
                </span>
              </span>
              <ChevronDownIcon className={styles.controlChevron} />
            </button>
          );
        })}
      </div>
    </aside>
  );
};
