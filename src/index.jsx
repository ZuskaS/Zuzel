import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import { App } from './Components/App/App';
import { HomePage } from './pages/HomePage/HomePage';
import { TipsPage } from './pages/TipsPage/TipsPage';
import { InstructionsPage } from './pages/InstructionsPage/InstructionsPage';
import { DifficultySelectionsPage } from './pages/DifficultySelectionsPage/DifficultySelectionsPage';
import { GamePage } from './pages/GamePage/GamePage';
import './global.css';

const GamePageWrapper = () => {
  const location = useLocation()
  return <GamePage key={location.key}></GamePage>
}

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
        path: `/game/difficulty/:difficulty`,
        element: <GamePageWrapper />,
      },
     ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
