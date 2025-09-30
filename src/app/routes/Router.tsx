import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { BoardPage } from '@src/domain/board/pages/BoardPage.tsx';
import { CardContainer } from '@src/components/card/cardContainer/CardContainer.tsx';
import { Home } from '@src/pages/home/Home.tsx';

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
        <Route path="/card" element={<CardContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
