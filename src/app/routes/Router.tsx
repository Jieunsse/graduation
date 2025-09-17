import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Test } from '@src/test/Test.tsx';
import React from 'react';

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
      </Routes>
    </BrowserRouter>
  );
};
