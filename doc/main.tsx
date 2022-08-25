import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { App } from './app';
import { HomePage } from './pages/HomePage';
import { CommentPage } from './pages/CommentPage';
import { TypographyPage } from './pages/TypographyPage';
import { BtnPage } from './pages/BtnPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="comment" element={<CommentPage />} />
          <Route path="typography" element={<TypographyPage />} />
          <Route path="btn" element={<BtnPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
