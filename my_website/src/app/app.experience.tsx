import './common/layout.css';
import './common/margin.css';
import './common/padding.css';

interface ImageColumnProps {
    imageUrls: string[];
}

const ImageColumn = ({ imageUrls }: ImageColumnProps) => {
    return (
        <div className='center col'>
            {imageUrls.map(item => {
                return <img alt='company logo' className='experience-image' src={item} />
            })}
        </div>
    );
}

interface DescriptionColumnProps {
    descriptions: string[];
}

const DescriptionColumn = ({ descriptions }: DescriptionColumnProps) => {
    return (

        <div className='col center margin-left-1vh'>
            {descriptions.map(item => {
                return <p>{item}</p>
            })}
        </div>
    )
}

interface RowProps {
    imageUrls: string[];
    descriptions: string[];
}

const Row = ({ imageUrls, descriptions }: RowProps) => {
    return (
        <div className='border experience row padding-2vh'>
            <ImageColumn imageUrls={imageUrls} />
            <DescriptionColumn descriptions={descriptions} />
        </div>
    );
}

const RowWithMargin = ({ imageUrls, descriptions }: RowProps) => {
    return (
        <div className='border experience row margin-top-1vh padding-2vh'>
            <ImageColumn imageUrls={imageUrls} />
            <DescriptionColumn descriptions={descriptions} />
        </div>
    );
}

const Experience = () => {
    return (
        <div className='border margin-top-2vh padding-2vh'>
            <h2>Experience</h2>
            <div className='col margin-top-2vh padding-2vh'>
                <Row
                    imageUrls={['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png']}
                    descriptions={['Software Engineer 3']} />
                <RowWithMargin
                    imageUrls={['https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/1bcff1bf-880c-486b-9a95-a9667ea2c884.png', 'https://www.seisan.com/images/seisan_logo.png']}
                    descriptions={['UltraInstinctSoftwareLLC, LLC.', 'Senior Android Developer (Owner)']} />
                <RowWithMargin
                    imageUrls={['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png', 'https://cdn-ukwest.onetrust.com/logos/09d556d0-30eb-4698-a151-f351ed55d981/8c8fbea8-fe13-4b76-963a-3abfcd2a670a/e1f4f8ed-9ac9-4ac1-a24f-70f55e045ff2/CF_logo_Colour_RGB.png']}
                    descriptions={['Senior Software Engineer (Consultant)']} />
                <RowWithMargin
                    imageUrls={['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Target_%282018%29.svg/1024px-Target_%282018%29.svg.png']}
                    descriptions={['Senior Android Engineer']} />
                <RowWithMargin
                    imageUrls={['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Target_%282018%29.svg/1024px-Target_%282018%29.svg.png', 'https://aimconsulting.com/wp-content/themes/aim-2022/images/aimlogo.svg']}
                    descriptions={['Senior Mobile Developer (Consultant)']} />
                <RowWithMargin
                    imageUrls={['https://www.medtronic.com/content/dam/medtronic-com/mdt_logo_white.png']}
                    descriptions={['Software Engineer II']} />
                <RowWithMargin
                    imageUrls={['https://www.spok.com/wp-content/uploads/2021/02/logo-us.png', 'https://www.artech.com/wp-content/uploads/2020/12/Artech-Logo.png']}
                    descriptions={['Contingent Software Engineer III (Consultant)']} />
                <RowWithMargin
                    imageUrls={['https://www.viosmedical.com/wp-content/themes/vios/assets/images/vios-logo.svg?ver=1', 'https://scitechmn.org/wp-content/uploads/2020/02/SciTech_Internship_Program-Logo.png']}
                    descriptions={['Halberg Chronobiology Center', 'Database Research Assistant']} />
                <RowWithMargin
                    imageUrls={['https://twin-cities.umn.edu/sites/twin-cities.umn.edu/files/block-m__gold-bg.png']}
                    descriptions={['Software Engineer Intern']} />
            </div>
        </div>
    );
}

export default Experience;