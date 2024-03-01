import Bio from './app.bio';
import './app.css';
import Experience from './app.experience';
import Project from './app.project';
import './common/layout.css';
import './common/margin.css';
import './common/padding.css';

const Body = () => {
  return (
    <body className='App-body padding-2vh'>
      <Bio />
      <Project />
      <Experience />
    </body>
  );
}

const Header = () => {
  return (
    <header className='App-header'>
      <div className='col'>
        <img
          alt='headshot of me from LinkedIn'
          className='App-header-avatar margin-2vh'
          src='https://media.licdn.com/dms/image/C5603AQHkFw6haoqrTg/profile-displayphoto-shrink_400_400/0/1660568085887?e=1712793600&v=beta&t=Oh1Rkigsps8OTmzLscahsNJAADM_h24-icYfznL1mqU' />
        <a href='https://www.linkedin.com/in/tranx/' target='_blank' rel='noopener noreferrer' >
          <img
            alt='LinkedIn logo used to go to my LinkedIn'
            className='App-header-logo margin-horizontal-1vh'
            src='https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg' />
        </a>
      </div>
      <div className='App-header-description margin-2vh'>
        <p>Tony Tran</p>
        <p>(He/Him/His)</p>
        <p>Software Developer</p>
      </div>
    </header>
  );
}

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Body />
    </div>
  );
}

export default App;