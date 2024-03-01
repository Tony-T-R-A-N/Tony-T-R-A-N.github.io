import '../../common/layout.css'
import './template1.css';

const Template1HomePage = () => {
    return (
        <div>
            <body className='row center'>
                <div className='col text-center'>
                    <h1>Coffee that will make you laugh</h1>
                    <p>123 ABC Blvd, Fake City, ZZ, 98765</p>
                </div>
            </body>
            <footer className='row center'>
                <div className='col text-center'>
                    <p>Hours:<br />M-F<br />6AM-6PM</p>
                </div>
            </footer>
        </div>
    );
}

export default Template1HomePage;