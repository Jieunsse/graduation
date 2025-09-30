import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './login.css.ts';

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: integrate real login flow
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.logo}>F1 KOREA</span>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          이메일
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="이메일을 입력하세요"
            required
          />
        </label>

        <label className={styles.label}>
          비밀번호
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </label>

        <button className={styles.loginButton} type="submit">
          로그인
        </button>
      </form>

      <div className={styles.footer}>
        <span>아직 계정이 없으신가요?</span>
        <button
          className={styles.signUpButton}
          type="button"
          onClick={handleSignUp}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};
