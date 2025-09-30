import { useState } from 'react';
import * as styles from './sidebar.css.ts';
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
} from '@shared/ui/sidebar/SideBarIcons.tsx';

interface SideBarProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const primaryNavigation: MenuItem[] = [
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
  { label: '테마', value: '다크', Icon: ThemeIcon },
  { label: '언어', value: '한국어', Icon: LanguageIcon },
];

export const SideBar = ({ appearance, setAppearance }: SideBarProps) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () =>
      collapsibleNavigation.reduce<Record<string, boolean>>(
        (acc, item, index) => {
          acc[item.label] = index === 0;
          return acc;
        },
        {}
      )
  );

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
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    className={`${styles.menuButton} ${isHighlight ? styles.menuButtonHighlight : ''}`}
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
                      {section.subItems.map((subItem) => (
                        <li key={subItem}>
                          <button
                            type="button"
                            className={styles.menuButton}
                            style={{
                              padding: '4px 8px',
                              fontSize: 13,
                              background: 'none',
                            }}
                          >
                            <span className={styles.label}>{subItem}</span>
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
          const IconComponent = control.Icon;
          const isTheme = control.label === '테마';
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
