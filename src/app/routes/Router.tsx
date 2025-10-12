import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { BoardPage } from '@src/domain/board/pages/BoardPage.tsx';
import { Home } from '@app/home/Home.tsx';
import { LoginPage } from '@domain/user/pages/login/LoginPage.tsx';
import { SignupPage } from '@domain/user/pages/signup/SignupPage.tsx';
import { GuideGlossaryPage } from '@src/domain/ruleBook/pages/ruleBook/GuideGlossaryPage.tsx';
import { GuideDetailPage } from '@src/domain/ruleBook/pages/ruleBookDetail/GuideDetailPage.tsx';
import { BoardDetailPage } from '@domain/board/pages/boardDetail/boardDetailPages.tsx';
import { CalenderPage } from '@domain/calender/pages/CalenderPage.tsx';
import { RaceTimelinePage } from '@domain/raceTimeline/pages/RaceTimelinePage.tsx';

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
          path="/board/:id"
          element={
            <BoardDetailPage
              appearance={appearance}
              setAppearance={setAppearance}
            />
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
        <Route
          path="/calendar"
          element={
            <CalenderPage
              appearance={appearance}
              setAppearance={setAppearance}
            />
          }
        />
        <Route
          path="/calendar/:slug"
          element={
            <CalenderPage
              appearance={appearance}
              setAppearance={setAppearance}
            />
          }
        />
        <Route
          path="/timeline"
          element={
            <RaceTimelinePage
              appearance={appearance}
              setAppearance={setAppearance}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};
