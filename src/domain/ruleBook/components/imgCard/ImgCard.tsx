import * as styles from '@domain/ruleBook/components/imgCard/styles/imgCard.css.ts';

interface ImgCardProps {
  src: string;
  alt?: string;
}

export const ImgCard = ({ src, alt }: ImgCardProps) => {
  return (
    <>
      <div className={styles.imgCard}>
        <img src={src} alt={alt} className={styles.img} />
      </div>
    </>
  );
};
