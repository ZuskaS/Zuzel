import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
            // {
            //     path: '/tips',
            //     element: <TipsPage />
            // },
            // {
            //     path: '/instruction',
            //     element: <InstructionsPage />
            // },
            // {
            //     path: '/difficulty',
            //     element: <DifficultySelectionPage />
            // },
            // {
            //     path: '/memory',
            //     element: <MemoryPreviewPage />
            // },
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
        ]
    }
]);

createRoot(document.querySelector('#app')).render(
    <RouterProvider router={router} />
);
