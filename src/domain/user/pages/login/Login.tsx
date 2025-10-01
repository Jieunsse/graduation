import { LoginForm } from '@src/domain/user/components/login/LoginForm.tsx';
import * as styles from './styles/login.css.ts';

export const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.primaryGlow} aria-hidden="true" />
      <div className={styles.secondaryGlow} aria-hidden="true" />
      <LoginForm />
    </div>
  );
};
