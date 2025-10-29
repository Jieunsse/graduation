import React, { useMemo, useState } from 'react';
import { TextArea, Button } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as styles from './boardWrite.css.ts';
import { BoardDropDown } from '@domain/board/components/boardDropDown/boardDropDown.tsx';
import { type UserSelectableCategory } from '../../store/boardStore.ts';

type FieldKey = 'title' | 'content';

const MIN_LENGTH = {
  title: 2,
  content: 10,
} as const;

export const BoardWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<UserSelectableCategory>('정보');
  const [touched, setTouched] = useState<Record<FieldKey, boolean>>({
    title: false,
    content: false,
  });

  const errors = useMemo(() => {
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    return {
      title:
        trimmedTitle.length >= MIN_LENGTH.title
          ? ''
          : `제목을 ${MIN_LENGTH.title}자 이상 입력해 주세요.`,
      content:
        trimmedContent.length >= MIN_LENGTH.content
          ? ''
          : `내용을 ${MIN_LENGTH.content}자 이상 입력해 주세요.`,
    };
  }, [title, content]);

  const isValid = useMemo(() => !errors.title && !errors.content, [errors]);

  const handleBlur = (field: FieldKey) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ title: true, content: true });

    if (!isValid) {
      return;
    }

    try {
      await axios.post('/api/posts', {
        title,
        content,
        category,
      });

      navigate('/board');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.headerTitle}>새로운 이야기를 들려주세요</h2>
        <p className={styles.headerDescription}>
          자유 게시판은 모든 팬이 경험과 정보를 나누는 공간입니다. 작성 전에는
          게시판 가이드를 확인해 주세요.
        </p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <BoardDropDown value={category} onChange={setCategory} />
        </div>

        <div className={styles.field}>
          <label htmlFor="board-write-title" className={styles.label}>
            제목
          </label>
          <input
            id="board-write-title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            onBlur={handleBlur('title')}
            placeholder="게시글 제목을 입력해 주세요"
            className={styles.input}
          />
          {touched.title && errors.title ? (
            <span className={styles.error}>{errors.title}</span>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="board-write-content" className={styles.label}>
            내용
          </label>
          <TextArea
            id="board-write-content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            onBlur={handleBlur('content')}
            placeholder="본문 내용을 입력해 주세요. 여러 문단으로 구성하면 가독성이 좋아요."
            className={styles.textarea}
          />
          {touched.content && errors.content ? (
            <span className={styles.error}>{errors.content}</span>
          ) : null}
        </div>

        <div className={styles.actions}>
          <Button
            type="submit"
            className={styles.submitButton}
            disabled={!isValid}
          >
            작성 완료
          </Button>
        </div>
      </form>
    </section>
  );
};
