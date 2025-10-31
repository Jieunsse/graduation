import type { FormEvent } from 'react';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/loginApi';
import * as styles from './login.css.ts';

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = (formData.get('email') ?? '').toString();
    const password = (formData.get('password') ?? '').toString();

    try {
      const data = await loginUser(username, password);
      localStorage.setItem('token', data.token);
      navigate('/board');
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
