import './app.css';
import './common/marginPadding.css';

function Header() {
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

function Bio() {
  return (
    <div className='border padding-2vh'>
      <h2>About me</h2>
      <p>Tony is an experienced Android developer who is
        enthusiastic about exploring and integrating new technologies
        and design patterns into his work. He prioritizes crafting
        visually appealing user experiences that are user-friendly
        and easy to navigate for his clients. Whether it is Android,
        iOS or web, he will deliver.</p>
    </div>
  );
}

function Passion() {
  return (
    <div className='border margin-top-2vh padding-2vh'>
      <h2>Passion</h2>
      ...under construction...
    </div>
  );
}

function Project() {
  return (
    <div className='border margin-top-2vh padding-2vh'>
      <h2>Projects</h2>
      ...under construction...
    </div>
  );
}

// interface ExperienceProps {
//   imageUrls: string[];
//   texts: string[];
// };

// function CompanyLogo({}) {

// }

// const ExperienceCell: React.FC<ExperienceProps> = ({ imageUrls, texts }) => {
//   const companyLogo = () => imageUrls.forEach(function (value) {
//     <img className='experience-image' src={value} />
//   });
//   return (
//     <div className='border experience row padding-2vh'>
//       <div className='center col'>

//       </div>
//       <div className='col center margin-left-1vh'>
//         <p>Software Engineer 3</p>
//       </div>
//     </div>
//   );
// };

function Experience() {
  return (
    <div className='border margin-top-2vh padding-2vh'>
      <h2>Experience</h2>
      <div className='col margin-top-2vh padding-2vh'>
        <div className='border experience row padding-2vh'>
          <div className='center col'>
            <img alt='company logo' className='experience-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png' />
          </div>
          <div className='col center margin-left-1vh'>
            <p>Software Engineer 3</p>
          </div>
        </div>
        <div className='border experience margin-top-1vh row padding-2vh'>
          <div className='col center'>
            <img alt='company logo' className='experience-image' src='https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/1bcff1bf-880c-486b-9a95-a9667ea2c884.png' />
            <img alt='company logo' className='experience-image' src='https://www.seisan.com/images/seisan_logo.png' />
          </div>
          <div className='col center margin-left-1vh'>
            <p>UltraInstinctSoftwareLLC, LLC.</p>
            <p>Senior Android Developer <b>(Owner)</b></p>
          </div>
        </div>
        <div className='border experience margin-top-1vh row padding-2vh'>
          <div className='col center margin-top-1vh'>
            <img alt='company logo' className='experience-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png' />
            <img alt='company logo' className='experience-image' src='https://cdn-ukwest.onetrust.com/logos/09d556d0-30eb-4698-a151-f351ed55d981/8c8fbea8-fe13-4b76-963a-3abfcd2a670a/e1f4f8ed-9ac9-4ac1-a24f-70f55e045ff2/CF_logo_Colour_RGB.png' />
          </div>
          <div className='col center margin-left-1vh'>
            <p>Senior Software Engineer <b>(Consultant)</b></p>
          </div>
        </div>
        <div className='border experience margin-top-1vh row padding-2vh'>
          <div className='col center'>
            <img alt='company logo' className='experience-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Target_%282018%29.svg/1024px-Target_%282018%29.svg.png' />
          </div>
          <div className='col center margin-left-1vh'>
            <p>Senior Android Engineer</p>
          </div>
        </div>
        <div className='border experience margin-top-1vh row padding-2vh'>
          <div className='col center'>
            <img alt='company logo' className='experience-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Target_%282018%29.svg/1024px-Target_%282018%29.svg.png' />
            <img alt='company logo' className='experience-image' src='https://aimconsulting.com/wp-content/themes/aim-2022/images/aimlogo.svg' />
          </div>
          <div className='col center margin-left-1vh'>
            <p>Senior Mobile Developer <b>(Consultant)</b></p>
          </div>
        </div>
        <div className='border experience margin-top-1vh row padding-2vh'>
          <div className='col center'>
            <img alt='company logo' className='experience-image' src='https://www.spok.com/wp-content/uploads/2021/02/logo-us.png' />
          </div>
          <div className='col center margin-left-1vh'>
            <p>Software Engineer II</p>
          </div>
        </div>
        <div className='border experience margin-top-1vh row padding-2vh'>
          <div className='col center'>
            <img alt='company logo' className='experience-image' src='https://www.medtronic.com/content/dam/medtronic-com/mdt_logo_white.png' />
            <img alt='company logo' className='experience-image' src='https://www.artech.com/wp-content/uploads/2020/12/Artech-Logo.png' />
          </div>
          <div className='col center margin-left-1vh'>
            <p>Contingent Software Engineer III <b>(Consultant)</b></p>
          </div>
        </div>
        <div className='border experience margin-top-1vh row padding-2vh'>
          <div className='col center'>
            <img alt='company logo' className='experience-image' src='https://www.viosmedical.com/wp-content/themes/vios/assets/images/vios-logo.svg?ver=1' />
            <img alt='company logo' className='experience-image' src='https://scitechmn.org/wp-content/uploads/2020/02/SciTech_Internship_Program-Logo.png' />
          </div>
          <div className='col center margin-left-1vh'>
            <p>Software Engineer Intern</p>
          </div>
        </div>
        <div className='border experience margin-top-1vh row padding-2vh'>
          <div className='col center'>
            <img alt='company logo' className='experience-image' src='https://twin-cities.umn.edu/sites/twin-cities.umn.edu/files/block-m__gold-bg.png' />
          </div>
          <div className='col center margin-left-1vh'>
            <p>Halberg Chronobiology Center</p>
            <p>Database Research Assistant</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <body className='App-body padding-2vh'>
      <Bio />
      <Passion />
      <Project />
      <Experience />
    </body>
  );
}

function App() {
  return (
    <div className='App'>
      <Header />
      <Body />
    </div>
  );
}

export default App;