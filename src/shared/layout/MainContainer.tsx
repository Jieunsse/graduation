import React from 'react';
import * as style from './MainContainer.css.ts';

interface MainContainerProps {
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

export const MainContainer = ({ sidebar, children }: MainContainerProps) => {
  return (
    <main className={style.container}>
      <div className={style.sidebarSlot}>{sidebar}</div>
      <div className={style.contentSlot}>
        <div className={style.contentInner}>{children}</div>
      </div>
    </main>
  );
};
