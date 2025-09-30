import { Card } from '@src/components/card/Card.tsx';
import * as styles from './cardContainer.css.ts';

export const CardContainer = () => {
  return (
    <div className={styles.container}>
      <Card
        title={'이탈리아 그랑프리'}
        date={'2025.09.07'}
        driver={'베르스타펜'}
        category={'PIT'}
        description={'타이어 교체'}
      />
      <Card
        title={'일본 그랑프리'}
        date={'2025.04.13'}
        driver={'루이스 해밀턴'}
        category={'SC'}
        description={'세이프티카 발동'}
      />
      <Card
        title={'네덜란드 그랑프리'}
        date={'2025.08.12'}
        driver={'루이스 해밀턴'}
        category={'VSC'}
        description={'버추얼 세이프티카 발동'}
      />
      <Card
        title={'이탈리아 그랑프리'}
        date={'2025.09.07'}
        driver={'베르스타펜'}
        category={'PIT'}
        description={'타이어 교체'}
      />
      <Card
        title={'일본 그랑프리'}
        date={'2025.04.13'}
        driver={'루이스 해밀턴'}
        category={'SC'}
        description={'세이프티카 발동'}
      />
      <Card
        title={'네덜란드 그랑프리'}
        date={'2025.08.12'}
        driver={'루이스 해밀턴'}
        category={'VSC'}
        description={'버추얼 세이프티카 발동'}
      />{' '}
      <Card
        title={'이탈리아 그랑프리'}
        date={'2025.09.07'}
        driver={'베르스타펜'}
        category={'PIT'}
        description={'타이어 교체'}
      />
      <Card
        title={'일본 그랑프리'}
        date={'2025.04.13'}
        driver={'루이스 해밀턴'}
        category={'SC'}
        description={'세이프티카 발동'}
      />
      <Card
        title={'네덜란드 그랑프리'}
        date={'2025.08.12'}
        driver={'루이스 해밀턴'}
        category={'VSC'}
        description={'버추얼 세이프티카 발동'}
      />
    </div>
  );
};
