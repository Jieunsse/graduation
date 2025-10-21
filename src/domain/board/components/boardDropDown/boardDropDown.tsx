import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as styles from './boardDropDown.css.ts';
import type { UserSelectableCategory } from '../../store/boardStore.ts';

const categories: readonly UserSelectableCategory[] = [
  '정보',
  '잡담',
  '후기',
  '질문',
];

type BoardCategory = (typeof categories)[number];

interface BoardDropDownProps {
  value: BoardCategory;
  onChange: (category: BoardCategory) => void;
  label?: string;
}

const mergeClassNames = (
  ...classNames: Array<string | false | null | undefined>
) => classNames.filter(Boolean).join(' ');

export const BoardDropDown = ({
  value,
  onChange,
  label = '카테고리',
}: BoardDropDownProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const requestedIndex = useMemo(() => categories.indexOf(value), [value]);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const handleDocumentClick = useCallback(
    (event: MouseEvent) => {
      if (!containerRef.current) {
        return;
      }

      if (!containerRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    },
    [closeMenu]
  );

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [handleDocumentClick, open]);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleSelect = (category: BoardCategory) => {
    onChange(category);
    closeMenu();
  };

  return (
    <div ref={containerRef} className={styles.root}>
      <span className={styles.label}>{label}</span>
      <button
        type="button"
        className={mergeClassNames(styles.trigger, open && styles.triggerOpen)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="board-category-menu"
        onClick={handleToggle}
      >
        <span>{categories[requestedIndex] ?? categories[0]}</span>
        <svg
          className={mergeClassNames(
            styles.chevron,
            open && styles.chevronOpen
          )}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open ? (
        <div role="listbox" id="board-category-menu" className={styles.menu}>
          {categories.map((categoryOption) => {
            const isActive = categoryOption === value;

            return (
              <button
                key={categoryOption}
                type="button"
                role="option"
                aria-selected={isActive}
                className={mergeClassNames(
                  styles.option,
                  isActive && styles.optionActive
                )}
                onClick={() => handleSelect(categoryOption)}
              >
                {categoryOption}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export type { BoardCategory };
