import * as styles from './hero.css.ts';
import { Button } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/board');
  };

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        F1 Korea <br /> 커뮤니티
      </h1>
      <p className={styles.description}>
        실시간 F1 데이터, 초보자를 위한 용어 설명을 통해 F1 경기를 관람해보세요.
        <br />
        이전과는 다른 방식으로 F1을 느낄 수 있습니다.
      </p>
      <Button
        className={styles.ctaButton}
        size="3"
        variant="solid"
        onClick={handleClick}
      >
        Enter the F1 KOREA
      </Button>
    </section>
  );
};
