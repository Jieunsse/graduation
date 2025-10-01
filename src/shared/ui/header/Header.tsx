import { Flex } from '@radix-ui/themes';
import { NavLink, useNavigate } from 'react-router-dom';
import * as style from './header.css';

const navItems = [
  { label: '게시판', to: '/board', type: 'link' as const },
  { label: '타임라인', type: 'button' as const },
  { label: '데이터랩', type: 'button' as const },
  { label: '룰북', to: '/guide', type: 'link' as const },
];

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className={style.box}>
      <div className={style.container}>
        <Flex align="center" justify="between" className={style.headerRow}>
          <button className={style.logo} onClick={handleClick}>
            F1 KOREA
          </button>

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

          <button className={style.loginButtonStyle} onClick={handleLoginClick}>
            로그인
          </button>
        </Flex>
      </div>
    </div>
  );
};
