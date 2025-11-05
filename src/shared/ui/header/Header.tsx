import { Flex } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { logoutUser } from '@domain/user/api/logoutUser';
import * as style from '../styles/header/header.css.ts';

const navItems = [
  { label: '게시판', to: '/board', type: 'link' as const },
  { label: '레이스 분석', to: '/analysis/laptime', type: 'link' as const },
  { label: '챔피언쉽', to: '/championship/driver', type: 'link' as const },
  { label: '룰북', to: '/guide', type: 'link' as const },
];

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() =>
    Boolean(localStorage.getItem('token'))
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(Boolean(localStorage.getItem('token')));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem('token')));
  }, [location]);

  const handleClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error('로그아웃 중 오류가 발생했습니다.', error);
    } finally {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      navigate('/login');
    }
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

          {isLoggedIn ? (
            <button
              type="button"
              className={style.logoutButtonStyle}
              onClick={handleLogoutClick}
            >
              로그아웃
            </button>
          ) : (
            <button
              type="button"
              className={style.loginButtonStyle}
              onClick={handleLoginClick}
            >
              로그인
            </button>
          )}
        </Flex>
      </div>
    </div>
  );
};
