import '../../common/layout.css';
import '../../common/margin.css';
import '../template1/template1.css'
import AppBar from './template1.appbar.component';
import { Outlet } from 'react-router-dom';

var items = [
    {
        label: 'Home',
        route: 'home',
    },
    {
        label: 'Menu',
        route: 'menu',
    },
]

const Template1 = () => {
    return (
        <div className='template1'>
            <header className='header row'>
                <p className='company-logo margin-left-2vh'>SILLY COFFEE</p>
                <AppBar items={items} />
            </header>
            <body>
                <Outlet />
            </body>
        </div>
    );
}

export default Template1;