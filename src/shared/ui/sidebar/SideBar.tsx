import { useState } from 'react';
import styles from './sidebar.module.css';
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
  LiveIcon,
  NewsIcon,
  SupportIcon,
  TechIcon,
  ThemeIcon,
} from '@shared/ui/sidebar/SideBarIcons.tsx';

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
                      item.variant === 'highlight'
                        ? styles.menuButtonHighlight
                        : ''
                    }`}
                  >
                    <span className={styles.menuButtonContent}>
                      <span className={styles.iconWrapper}>
                        <IconComponent className={styles.icon} />
                      </span>
                      <span className={styles.label}>{item.label}</span>
                    </span>
                    {item.tag ? (
                      <span className={styles.tag}>{item.tag}</span>
                    ) : null}
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
                          <button
                            type="button"
                            className={styles.subMenuButton}
                          >
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
            <button
              type="button"
              className={styles.controlButton}
              key={control.label}
            >
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
