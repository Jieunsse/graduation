import { Flex } from '@radix-ui/themes';
import * as styles from './footer.css';

export const Footer = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <Flex direction="row" justify="between" className={styles.footerRow}>
          {/* 왼쪽: 로고 + 카피라이트 */}
          <div className={styles.logoSection}>
            <div className={styles.logo}>F1 KOREA</div>
            <p className={styles.copy}>
              © 2025 Conradmaker. All rights reserved.
            </p>
          </div>

          {/* 오른쪽: 메뉴 */}
          <div className={styles.menuSection}>
            <div>
              <p className={styles.menuHeading}>제품</p>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>라이브 타이밍</li>
                <li className={styles.menuItem}>리플레이</li>
                <li className={styles.menuItem}>캘린더</li>
                <li className={styles.menuItem}>뉴스 허브</li>
                <li className={styles.menuItem}>FIA 문서</li>
              </ul>
            </div>
            <div>
              <p className={styles.menuHeading}>데이터, 분석</p>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>텔레메트리 분석</li>
                <li className={styles.menuItem}>랩타임 분석</li>
                <li className={styles.menuItem}>드라이버 순위</li>
                <li className={styles.menuItem}>컨스트럭터 순위</li>
              </ul>
            </div>
            <div>
              <p className={styles.menuHeading}>기타</p>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>기술 업데이트</li>
                <li className={styles.menuItem}>파츠 사용 / 리미트</li>
                <li className={styles.menuItem}>사고 & 복구 비용 분석</li>
              </ul>
            </div>
            <div>
              <p className={styles.menuHeading}>리소스</p>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>블로그</li>
                <li className={styles.menuItem}>로드맵</li>
                <li className={styles.menuItem}>체인지 로그</li>
                <li className={styles.menuItem}>피드백</li>
              </ul>
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
};
