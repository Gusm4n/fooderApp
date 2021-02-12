
import './CarouselFood.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimeiraImagem from './img/pizza.jpg'

function CarouselFood() {
  return (
    <div className="CarouselFood">
      <h4>Today's Promo</h4>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PrimeiraImagem}
            alt="First slide"
          />
          <Carousel.Caption className="BorderP">
            <p>Praesent commodo cursus magna.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PrimeiraImagem}
            alt="Second slide"
          />

          <Carousel.Caption className="BorderP">
            <p>Praesent commodo cursus magna.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PrimeiraImagem}
            alt="Third slide"
          />

          <Carousel.Caption className="BorderP">
            <p>Praesent commodo cursus magna.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFood;