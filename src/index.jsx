import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { App } from './Components/App/App';
import { HomePage } from './pages/HomePage/HomePage';
import './global.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [

      {
        path: '/',
        element: <HomePage />,
      },
    //      {
    //     path: '/...',
    //     element: <...HomePage. />,
    //   },
    ]
  }
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
