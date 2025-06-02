import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage/homepage';
import './global.css';

createRoot(document.querySelector('#app')).render(<HomePage />);
