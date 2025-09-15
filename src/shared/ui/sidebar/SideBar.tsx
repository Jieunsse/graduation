import style from './sidebar.module.css';
import { useState } from 'react';

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={style.container}>
      <div className={style.item}>홈</div>
      <div className={style.item}>대시보드</div>
      <div className={style.dropdown}>
        <div className={style.item} onClick={toggleDropdown}>
          설정 {isOpen ? '▲' : '▼'}
        </div>
        {isOpen && (
          <div className={style.dropdownMenu}>
            <div className={style.dropdownItem}>계정 관리</div>
            <div className={style.dropdownItem}>알림 설정</div>
            <div className={style.dropdownItem}>보안</div>
          </div>
        )}
      </div>
    </div>
  );
};
