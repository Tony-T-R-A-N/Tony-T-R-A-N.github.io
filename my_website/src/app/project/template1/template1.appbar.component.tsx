import '../template1/template1.css';
import '../../common/layout.css';
import '../../common/padding.css';
import { Link } from 'react-router-dom';

interface AppBarItemProps {
    label: string;
    route: string;
}

interface AppBarProps {
    items: AppBarItemProps[];
}

const AppBar = ({ items }: AppBarProps) => {
    return (
        <div className='center row'>
            {items.map(item => {
                return <Link className='padding-2vh' to={item.route}>{item.label}</Link>
            })}
        </div>
    );
}

export default AppBar;