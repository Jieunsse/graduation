import { Flex } from '@radix-ui/themes';
import { NavLink, useNavigate } from 'react-router-dom';
import * as style from './header.css';

const navItems = [
  { label: '게시판', to: '/board', type: 'link' as const },
  { label: '타임라인', type: 'button' as const },
  { label: '데이터랩', type: 'button' as const },
  { label: '길라잡이', type: 'button' as const },
];

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className={style.box}>
      <div className={style.container}>
        <Flex align="center" justify="between" className={style.headerRow}>
          {/* 왼쪽: 로고 */}
          <button className={style.logo} onClick={handleClick}>
            F1 KOREA
          </button>

          {/* 가운데: 메뉴 버튼 */}
          <Flex gap="6" align="center" justify="center">
            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className={({ isActive }) =>
                      `${style.buttonStyle} ${isActive ? style.buttonActive : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              }

              return (
                <button
                  key={item.label}
                  type="button"
                  className={style.buttonStyle}
                >
                  {item.label}
                </button>
              );
            })}
          </Flex>

          {/* 오른쪽: 로그인 */}
          <button className={style.loginButtonStyle}>로그인</button>
        </Flex>
      </div>
    </div>
  );
};
