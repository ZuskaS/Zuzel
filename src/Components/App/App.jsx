import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import './App.css'

export const App = () => (
    <div className='app'> 
        <Header />
        <Outlet />
    </div>
);