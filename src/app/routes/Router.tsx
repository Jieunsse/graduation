import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Test } from '@src/test/Test.tsx';
import React from 'react';
import { BoardPage } from '@src/domain/board/pages/BoardPage.tsx';

interface RouterProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const Router = ({ appearance, setAppearance }: RouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Test appearance={appearance} setAppearance={setAppearance} />
          }
        />
        <Route
          path="/board"
          element={
            <BoardPage appearance={appearance} setAppearance={setAppearance} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
