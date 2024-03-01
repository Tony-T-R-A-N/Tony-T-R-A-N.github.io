import '../../common/layout.css'
import '../../common/margin.css'
import './template1.css';

const Template1MenuPage = () => {
    return (
        <div className='center row template1-menu'>
            <div className='col'>
                <p className='text-bold'>Hawt joe</p>
                <p>Dark roast<br />$3</p>
                <p>Medium roast<br />$3</p>
                <p>Light roast<br />$3</p>
            </div>
            <div className='col margin-left-4vh'>
                <p className='text-bold'>Chill drinks</p>
                <p>Frappuccino<br />$3</p>
                <p>Iced mocha<br />$3</p>
            </div>
            <div className='col margin-left-4vh'>
                <p className='text-bold'>Munchies</p>
                <p>Brownie bar<br />$1</p>
                <p>Cake pop<br />$1</p>
                <p>Chocolate donut<br />$1</p>
                <p>Fudge ball<br />$1</p>
                <p>Ice cream<br />$1</p>
            </div>
        </div>
    );
}

export default Template1MenuPage;