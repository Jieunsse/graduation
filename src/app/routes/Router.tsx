import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@src/pages/home/Home.tsx';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
