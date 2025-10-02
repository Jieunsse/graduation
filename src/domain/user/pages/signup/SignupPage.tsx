import { SignupForm } from '@domain/user/components/signupForm/SignupForm.tsx';
import * as styles from '../../styles/signup/signup.css.ts';

export const SignupPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.primaryGlow} aria-hidden="true" />
      <div className={styles.secondaryGlow} aria-hidden="true" />
      <SignupForm />
    </div>
  );
};
