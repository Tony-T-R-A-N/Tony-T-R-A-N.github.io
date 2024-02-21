import './marginPadding.css';
import { Link } from "react-router-dom";

interface AppBarItemProps {
    label: string;
    route: string;
}

interface AppBarProps {
    items: AppBarItemProps[];
}

const AppBar = ({ items }: AppBarProps) => {
    return (
        <div>
            {items.map(item => {
                return <Link className="margin-horizontal-2vh" to={item.route}>{item.label}</Link>
            })}
        </div>
    );
}

export default AppBar;