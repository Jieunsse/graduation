import { FormEvent } from 'react';
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

  const handleGoogleLogin = () => {
    // TODO: integrate Google login flow
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.logo}>F1 KOREA</span>
        <h1 className={styles.title}>로그인</h1>
        <p className={styles.subtitle}>
          F1 KOREA와 함께 생생한 그랑프리 현장을 경험해 보세요.
        </p>
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

      <button className={styles.googleButton} type="button" onClick={handleGoogleLogin}>
        <span className={styles.googleIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path
              d="M21.35 11.1h-9.17v2.95h5.45c-.23 1.43-.94 2.64-2.02 3.46v2.88h3.26c1.91-1.76 3.01-4.36 3.01-7.46 0-.72-.07-1.41-.18-2.08z"
              fill="#4285F4"
            />
            <path
              d="M12.18 21c2.73 0 5.01-.9 6.68-2.61l-3.26-2.88c-.9.6-2.05.96-3.42.96-2.63 0-4.86-1.77-5.66-4.17H3.12v3.02C4.77 18.82 8.21 21 12.18 21z"
              fill="#34A853"
            />
            <path
              d="M6.52 12.3c-.2-.6-.32-1.25-.32-1.92 0-.67.12-1.32.32-1.92V5.44H3.12C2.41 6.83 2 8.39 2 10.08c0 1.7.41 3.25 1.12 4.64l3.4-2.42z"
              fill="#FBBC05"
            />
            <path
              d="M12.18 4.58c1.48 0 2.79.51 3.83 1.5l2.87-2.87C17.18 1.75 14.9.76 12.18.76 8.21.76 4.77 2.94 3.12 6.02l3.4 2.42c.8-2.4 3.03-4.17 5.66-4.17z"
              fill="#EA4335"
            />
          </svg>
        </span>
        Google 계정으로 계속하기
      </button>

      <div className={styles.footer}>
        <span>아직 계정이 없으신가요?</span>
        <button className={styles.signUpButton} type="button" onClick={handleSignUp}>
          회원가입
        </button>
      </div>
    </div>
  );
};
