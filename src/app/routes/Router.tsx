import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Home } from '@app/home/Home.tsx';
import { BoardPage } from '@domain/board/pages/BoardPage.tsx';
import { BoardDetailPage } from '@domain/board/pages/boardDetail/boardDetailPages.tsx';
import { BoardWritePage } from '@domain/board/pages/boardWritePage/boardWritePage.tsx';
import { GuideGlossaryPage } from '@domain/ruleBook/pages/ruleBook/GuideGlossaryPage.tsx';
import { GuideDetailPage } from '@domain/ruleBook/pages/ruleBookDetail/GuideDetailPage.tsx';
import { CalenderPage } from '@domain/calender/pages/CalenderPage.tsx';
import { RaceTimelinePage } from '@domain/raceTimeline/pages/RaceTimelinePage.tsx';
import { RaceResultPage } from '@domain/raceResult/pages/RaceResultPage.tsx';
import { LapTimePage } from '@domain/lapTime/pages/LapTimePage.tsx';
import { LoginPage } from '@domain/user/pages/login/LoginPage.tsx';
import { SignupPage } from '@domain/user/pages/signup/SignupPage.tsx';
import { DriverCardPage } from '@domain/driver/pages/driverCardPage.tsx';
import { CreatorContentPage } from '@domain/creator/pages/CreatorContentPage.tsx';
import { StartingGridPage } from '@domain/grid/pages/StartingGridPage.tsx';
import { ConstructorStandingsPage } from '@domain/championship/pages/ConstructorStandingsPage.tsx';
import { DriverRankingPage } from '@domain/championship/pages/DriverRankingPage.tsx';
import NewsPage from '@domain/news/pages/NewsPage.tsx';

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
          path="/board/write"
          element={
            <BoardWritePage
              appearance={appearance}
              setAppearance={setAppearance}
            />
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
        <Route
          path="/analysis/race-result"
          element={
            <RaceResultPage
              appearance={appearance}
              setAppearance={setAppearance}
            />
          }
        />
        <Route
          path="/analysis/laptime"
          element={
            <LapTimePage
              appearance={appearance}
              setAppearance={setAppearance}
            />
          }
        />
        <Route
          path="/drivers"
          element={
            <DriverCardPage
              appearance={appearance}
              setAppearance={setAppearance}
            />
          }
        />
        <Route
          path="/starting-grid"
          element={
            <StartingGridPage
              appearance={appearance}
              setAppearance={setAppearance}
            />
          }
        />
        <Route
          path="/creator"
          element={
            <CreatorContentPage
              appearance={appearance}
              setAppearance={setAppearance}
            />
          }
        />
        <Route
          path="/championship/constructors"
          element={
            <ConstructorStandingsPage
              appearance={appearance}
              setAppearance={setAppearance}
            />
          }
        />
        <Route
          path="/championship/driver"
          element={
            <DriverRankingPage
              appearance={appearance}
              setAppearance={setAppearance}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
