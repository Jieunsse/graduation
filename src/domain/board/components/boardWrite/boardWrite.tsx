import React, { useMemo, useState } from 'react';
import { Input, TextArea, Button } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';
import * as styles from './boardWrite.css.ts';
import { useBoardStore } from '../../store/boardStore.ts';

type FieldKey = 'title' | 'author' | 'content';

const MIN_LENGTH = {
  title: 2,
  author: 2,
  content: 10,
} as const;

export const BoardWrite = () => {
  const addPost = useBoardStore((state) => state.addPost);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [touched, setTouched] = useState<Record<FieldKey, boolean>>({
    title: false,
    author: false,
    content: false,
  });

  const errors = useMemo(() => {
    const trimmedTitle = title.trim();
    const trimmedAuthor = author.trim();
    const trimmedContent = content.trim();

    return {
      title:
        trimmedTitle.length >= MIN_LENGTH.title
          ? ''
          : `제목을 ${MIN_LENGTH.title}자 이상 입력해 주세요.`,
      author:
        trimmedAuthor.length >= MIN_LENGTH.author
          ? ''
          : `작성자 이름을 ${MIN_LENGTH.author}자 이상 입력해 주세요.`,
      content:
        trimmedContent.length >= MIN_LENGTH.content
          ? ''
          : `내용을 ${MIN_LENGTH.content}자 이상 입력해 주세요.`,
    };
  }, [title, author, content]);

  const isValid = useMemo(
    () => !errors.title && !errors.author && !errors.content,
    [errors]
  );

  const handleBlur = (field: FieldKey) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ title: true, author: true, content: true });

    if (!isValid) {
      return;
    }

    addPost({
      title,
      author,
      content,
    });

    navigate('/board');
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
          <label htmlFor="board-write-title" className={styles.label}>
            제목
          </label>
          <Input
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
          <label htmlFor="board-write-author" className={styles.label}>
            작성자
          </label>
          <Input
            id="board-write-author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            onBlur={handleBlur('author')}
            placeholder="닉네임 또는 이름을 입력해 주세요"
            className={styles.input}
          />
          {touched.author && errors.author ? (
            <span className={styles.error}>{errors.author}</span>
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
          <Button type="submit" className={styles.submitButton} disabled={!isValid}>
            작성 완료
          </Button>
        </div>
      </form>
    </section>
  );
};
