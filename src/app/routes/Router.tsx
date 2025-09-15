import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Test } from '@src/test/Test.tsx';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};
