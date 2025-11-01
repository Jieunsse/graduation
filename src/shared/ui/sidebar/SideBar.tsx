import { useEffect, useState } from 'react';
import * as styles from '../styles/sidebar/sidebar.css.ts';
import React from 'react';
import type {
  CollapsibleNavItem,
  ControlItem,
  MenuItem,
} from '@shared/ui/sidebar/sidebarType.ts';
import {
  AnalysisIcon,
  CalendarIcon,
  ChampionshipIcon,
  ChevronDownIcon,
  CreatorIcon,
  DocumentIcon,
  LanguageIcon,
  NewsIcon,
  SupportIcon,
  TechIcon,
  ThemeIcon,
  SunIcon,
} from '@shared/ui/sidebar/SideBarIcons.tsx';
import { useLocation, useNavigate } from 'react-router-dom';

interface SideBarProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const primaryNavigation: MenuItem[] = [
  { label: '레이스 캘린더', Icon: CalendarIcon, path: '/calendar' },
  { label: 'Drivers', Icon: NewsIcon, path: '/drivers' },
  { label: '스타팅 그리드', Icon: DocumentIcon, path: '/starting-grid' },
  { label: '크리에이터 콘텐츠', Icon: CreatorIcon, path: '/creator' },
];

const collapsibleNavigation: CollapsibleNavItem[] = [
  {
    label: '레이스 분석',
    Icon: AnalysisIcon,
    subItems: [
      { label: '랩타임 비교', path: '/analysis/laptime' },
      { label: '피트 전략' },
      { label: '경기 결과', path: '/analysis/race-result' },
    ],
  },
  {
    label: '챔피언십',
    Icon: ChampionshipIcon,
    subItems: [
      { label: '드라이버 순위' },
      { label: '컨스트럭터 순위', path: '/championship/constructors' },
    ],
  },
  {
    label: '테크니컬',
    Icon: TechIcon,
    subItems: [
      { label: '업데이트 추적' },
      { label: '기술 규정 정리' },
    ],
  },
  {
    label: '지원',
    Icon: SupportIcon,
    subItems: [
      { label: '고객 센터' },
      { label: '커뮤니티' },
    ],
  },
];

const controlItems: ControlItem[] = [
  { label: '테마', value: '다크', Icon: ThemeIcon },
  { label: '언어', value: '한국어', Icon: LanguageIcon },
];

export const SideBar = ({ appearance, setAppearance }: SideBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() =>
    collapsibleNavigation.reduce<Record<string, boolean>>((acc, item) => {
      const shouldOpen = item.subItems.some((subItem) =>
        subItem.path ? location.pathname.startsWith(subItem.path) : false
      );
      acc[item.label] = shouldOpen;
      return acc;
    }, {})
  );

  useEffect(() => {
    setOpenSections((previous) => {
      const next = { ...previous };
      collapsibleNavigation.forEach((item) => {
        const shouldOpen = item.subItems.some((subItem) =>
          subItem.path ? location.pathname.startsWith(subItem.path) : false
        );
        if (shouldOpen) {
          next[item.label] = true;
        }
      });
      return next;
    });
  }, [location.pathname]);

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const toggleTheme = () => {
    setAppearance((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <aside className={styles.container}>
      {/* 상단 메뉴 */}
      <div>
        <nav className={styles.section} aria-label="주요 메뉴">
          <ul className={styles.menuList}>
            {primaryNavigation.map((item) => {
              const IconComponent = item.Icon;
              const isHighlight = (item as any).variant === 'highlight';
              const isActive = item.path
                ? location.pathname.startsWith(item.path)
                : false;
              const className = [
                styles.menuButton,
                isHighlight ? styles.menuButtonHighlight : '',
                isActive ? styles.menuButtonActive : '',
              ]
                .filter(Boolean)
                .join(' ');
              const handleClick = () => {
                if (item.path) {
                  navigate(item.path);
                }
              };
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    className={className}
                    onClick={handleClick}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className={styles.iconWrapper}>
                      <IconComponent className={styles.icon} />
                    </span>
                    <span className={styles.label}>{item.label}</span>
                    {(item as any).tag ? (
                      <span className={styles.tag}>{(item as any).tag}</span>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <hr className={styles.divider} />

        {/* 접힘형 메뉴 */}
        <nav className={styles.section} aria-label="세부 메뉴">
          <ul className={styles.menuList}>
            {collapsibleNavigation.map((section) => {
              const IconComponent = section.Icon;
              const isOpen = Boolean(openSections[section.label]);

              return (
                <li key={section.label}>
                  <button
                    type="button"
                    className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ''}`}
                    onClick={() => toggleSection(section.label)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.iconWrapper}>
                      <IconComponent className={styles.icon} />
                    </span>
                    <span className={styles.label}>{section.label}</span>
                    {/* 우측 화살표 아이콘: 별도 클래스 없이 최소 인라인만 */}
                    <span style={{ marginLeft: 'auto', opacity: 0.65 }}>
                      <ChevronDownIcon className={styles.icon} />
                    </span>
                  </button>

                  {isOpen ? (
                    <ul
                      className={styles.menuList}
                      style={{
                        marginLeft: 46,
                        gap: 4,
                        marginTop: 6,
                        marginBottom: 8,
                      }}
                    >
                      {section.subItems.map((subItem) => {
                        const isActive = subItem.path
                          ? location.pathname.startsWith(subItem.path)
                          : false;

                        return (
                          <li key={subItem.label}>
                            <button
                              type="button"
                              className={`${styles.menuButton} ${
                                isActive ? styles.menuButtonActive : ''
                              }`}
                              style={{
                                padding: '4px 8px',
                                fontSize: 13,
                                background: 'none',
                              }}
                              onClick={() => {
                                if (subItem.path) {
                                  navigate(subItem.path);
                                }
                              }}
                              aria-current={isActive ? 'page' : undefined}
                            >
                              <span className={styles.label}>{subItem.label}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* 하단 컨트롤(테마/언어) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          marginTop: 32,
        }}
      >
        {controlItems.map((control) => {
          let IconComponent = control.Icon;
          const isTheme = control.label === '테마';

          if (isTheme) {
            IconComponent = appearance === 'dark' ? ThemeIcon : SunIcon;
          }

          const valueText = isTheme
            ? appearance === 'dark'
              ? '다크'
              : '라이트'
            : control.value;

          return (
            <button
              type="button"
              className={styles.controlButton}
              key={control.label}
              onClick={isTheme ? toggleTheme : undefined}
            >
              <span
                className={styles.iconWrapper}
                style={{ width: 36, height: 36 }}
              >
                <IconComponent className={styles.icon} />
              </span>

              <span style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    opacity: 0.75,
                  }}
                >
                  {control.label}
                </span>
                <span style={{ fontSize: 14, fontWeight: 600 }}>
                  {valueText}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
