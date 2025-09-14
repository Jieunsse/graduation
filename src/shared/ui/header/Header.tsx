import { Container, Flex } from '@radix-ui/themes';
import style from './header.module.css';

export const Header = () => {
  return (
    <>
      <Container size="1" className={style.container}>
        <Flex gap="3" align="center" justify="between">
          <button className={style.buttonStyle}>게시판</button>
          <button className={style.buttonStyle}>타임라인</button>
          <button className={style.buttonStyle}>데이터랩</button>
          <button className={style.buttonStyle}>튜토리얼</button>
        </Flex>
      </Container>
    </>
  );
};
