import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { BoardPage } from '@src/domain/board/pages/BoardPage.tsx';
import { Home } from '@src/pages/home/Home.tsx';
import { Login } from '@src/pages/login/Login.tsx';
import { CardPage } from '@pages/card/CardPage.tsx';
import { GuideGlossaryPage } from '@src/domain/ruleBook/pages/ruleBook/GuideGlossaryPage.tsx';
import { GuideDetailPage } from '@src/domain/ruleBook/pages/ruleBookDetail/GuideDetailPage.tsx';

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
            <Home appearance={appearance} setAppearance={setAppearance} />
          }
        />
        <Route
          path="/board"
          element={
            <BoardPage appearance={appearance} setAppearance={setAppearance} />
          }
        />
        <Route
          path="/card"
          element={
            <CardPage appearance={appearance} setAppearance={setAppearance} />
          }
        />
        <Route
          path="/guide"
          element={
            <GuideGlossaryPage
              appearance={appearance}
              setAppearance={setAppearance}
            />
          }
        />
        <Route
          path="/guide/:slug"
          element={
            <GuideDetailPage
              appearance={appearance}
              setAppearance={setAppearance}
            />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
