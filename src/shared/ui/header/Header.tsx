import { Flex } from '@radix-ui/themes';
import style from './header.module.css';

export const Header = () => {
  return (
    <div className={style.box}>
      <div className={style.container}>
        <Flex align="center" justify="between" className={style.headerRow}>
          {/* 왼쪽: 로고 */}
          <span className={style.logo}>F1 KOREA</span>

          {/* 가운데: 메뉴 버튼 */}
          <Flex gap="6" align="center" justify="center">
            <button className={style.buttonStyle}>게시판</button>
            <button className={style.buttonStyle}>타임라인</button>
            <button className={style.buttonStyle}>데이터랩</button>
            <button className={style.buttonStyle}>튜토리얼</button>
          </Flex>

          {/* 오른쪽: 로그인 */}
          <button className={style.loginButtonStyle}>로그인</button>
        </Flex>
      </div>
    </div>
  );
};
