// Footer.tsx
import { Flex } from '@radix-ui/themes';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <Flex direction="row" justify="between" className={styles.footerRow}>
          {/* 왼쪽: 로고 + 카피라이트 */}
          <div className={styles.logoSection}>
            <div className={styles.logo}>F1 KOREA</div>
            <p className={styles.copy}>
              © 2025 F1 KOREA. All rights reserved.
            </p>
          </div>

          {/* 오른쪽: 메뉴 */}
          <div className={styles.menuSection}>
            <div>
              <h4>게시판</h4>
              <ul>
                <li>게시판 01</li>
                <li>게시판 02</li>
                <li>게시판 03</li>
              </ul>
            </div>
            <div>
              <h4>타임라인</h4>
              <ul>
                <li>타임라인 01</li>
                <li>타임라인 02</li>
                <li>타임라인 03</li>
              </ul>
            </div>
            <div>
              <h4>데이터랩</h4>
              <ul>
                <li>데이터랩 01</li>
                <li>데이터랩 02</li>
                <li>데이터랩 03</li>
              </ul>
            </div>
            <div>
              <h4>튜토리얼</h4>
              <ul>
                <li>튜토리얼 01</li>
                <li>튜토리얼 02</li>
                <li>튜토리얼 03</li>
              </ul>
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
};
