import Slide1 from '../../assets/carousal/slide.jpg';
import Slide2 from '../../assets/carousal/slide1.png';
import Slide3 from '../../assets/carousal/slide4.jpg';
import { Carousel} from 'react-bootstrap';
import TitleMessage from './TitleMessage';

export default function Card() {
    return (
        <>
            <Carousel fade controls={false} indicators interval={3000} pause={false}>
                <Carousel.Item>
                    <img className="custom-img" src={Slide1} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="custom-img" src={Slide2} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="custom-img" src={Slide3} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
                <TitleMessage />
        </>
    )
}




