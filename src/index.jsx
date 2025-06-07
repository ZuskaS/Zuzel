import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './Components/App/App';
import { HomePage } from './pages/HomePage/HomePage';
import { TipsPage } from './pages/TipsPage/TipsPage';
import { InstructionsPage } from './pages/InstructionsPage/InstructionsPage';
import { DifficultySelectionsPage } from './pages/DifficultySelectionsPage/DifficultySelectionsPage';
import { MemoryPreviewPage } from './pages/MemoryPreviewPage/MemoryPreviewPage';

import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    element: <App />,
    children: [
      {
        path: '/tips',
        element: <TipsPage />,
      },
      {
        path: '/instruction',
        element: <InstructionsPage />,
      },
      {
        path: '/difficulty',
        element: <DifficultySelectionsPage />,
      },
      {
        path: '/memory',
        element: <MemoryPreviewPage />,
      },
      // {
      //     path: '/test',
      //     element: <MemoryTestPage />
      // },
      // {
      //     path: '/evaluation',
      //     element: <EvaluationPage />
      // },
      // {
      //     path: '/navigation',
      //     element: <NavigationPage />
      // }
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
