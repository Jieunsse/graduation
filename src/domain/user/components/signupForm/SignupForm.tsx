import type { FormEvent } from 'react';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/registerApi';
import * as styles from './styles/signup.css.ts';

export const SignupForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = (formData.get('username') ?? '').toString();
    const email = (formData.get('email') ?? '').toString();
    const password = (formData.get('password') ?? '').toString();
    const passwordConfirm = (formData.get('passwordConfirm') ?? '').toString();

    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      await registerUser(username, email, password);
      navigate('/login');
    } catch (error) {
      if (isAxiosError(error)) {
        const message = error.response?.data?.error ?? error.message;
        alert(message);
        return;
      }

      if (error instanceof Error) {
        alert(error.message);
        return;
      }

      alert('알 수 없는 오류가 발생했습니다.');
    }
  };

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.logo}>F1 KOREA</span>
        <div className={styles.titleGroup}>
          <h1 className={styles.title}>계정을 생성하세요</h1>
          <p className={styles.subtitle}>
            신규 계정을 만들고 F1 KOREA의 최신 소식과 콘텐츠를 받아보세요.
          </p>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            사용자 이름
            <input
              className={styles.input}
              type="text"
              name="username"
              placeholder="사용자 이름을 입력하세요"
              autoComplete="username"
              required
            />
          </label>

          <label className={styles.label}>
            이메일
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="이메일을 입력하세요"
              autoComplete="email"
              required
            />
          </label>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            비밀번호
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              autoComplete="new-password"
              required
            />
          </label>

          <label className={styles.label}>
            비밀번호 확인
            <input
              className={styles.input}
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호를 다시 입력하세요"
              autoComplete="new-password"
              required
            />
          </label>
        </div>

        <div className={styles.actions}>
          <button className={styles.submitButton} type="submit">
            회원가입
          </button>
        </div>
      </form>

      <div className={styles.footer}>
        <span>이미 계정이 있으신가요?</span>
        <button
          className={styles.loginButton}
          type="button"
          onClick={handleGoToLogin}
        >
          로그인
        </button>
      </div>
    </div>
  );
};
