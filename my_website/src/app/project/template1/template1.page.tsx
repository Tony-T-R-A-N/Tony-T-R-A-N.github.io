import { Outlet } from "react-router-dom";
import AppBar from "../../common/appbar.component";

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
        <div>
            <AppBar items={items} />
            <Outlet />
        </div>
    );
}

export default Template1;