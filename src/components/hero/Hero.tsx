import * as styles from './hero.css.ts';
import { Button } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        올인원 포뮬러 1 <br /> 라이브타이밍 대시보드
      </h1>
      <p className={styles.description}>
        실시간 F1 데이터, 라이브 텔레메트리 및 레이스 분석을 하나의 강력한
        대시보드에서 경험하세요. 이전과는 다른 방식으로 F1을 느낄 수 있습니다.
      </p>
      <Button
        className={styles.ctaButton}
        size="3"
        variant="solid"
        onClick={handleClick}
      >
        Enter the Cosmos
      </Button>
    </section>
  );
};
