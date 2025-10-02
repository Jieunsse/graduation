import { LoginForm } from '@domain/user/components/loginForm/LoginForm.tsx';
import * as styles from '../../styles/login/login.css.ts';

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.primaryGlow} aria-hidden="true" />
      <div className={styles.secondaryGlow} aria-hidden="true" />
      <LoginForm />
    </div>
  );
};
