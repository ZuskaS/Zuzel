import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './Components/App/App';
import { HomePage } from './pages/HomePage/HomePage';
import { TipsPage } from './pages/TipsPage/TipsPage';
import { InstructionsPage } from './pages/InstructionsPage/InstructionsPage';
import { DifficultySelectionsPage } from './pages/DifficultySelectionsPage/DifficultySelectionsPage';
import { GamePage } from './pages/GamePage/GamePage';
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
        path: '/game/difficulty1',
        element: <GamePage size={3}/>,
      },
        {
        path: '/game/difficulty2',
        element: <GamePage size={4}/>,
      },
          
        {
        path: '/game/difficulty3',
        element: <GamePage size={4}/>,
      },
       {
        path: '/game/difficulty4',
        element: <GamePage size={5}/>,
      },

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
