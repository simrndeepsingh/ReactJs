import FullContainer from "./Components/FullContainer/FullContainer";
import MaxContainer from "./Components/MaxContainer/MaxContainer";
import Row from "./Components/Row/Row";
import Navbar from "./Components/Navbar/Navbar";
import Carousels from "./Components/Carousel/Carousels";
import hero from './hero-img.png';
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import IconCard from "./Components/IconCard/IconCard";
import product from "./apple-watch.png";
function App() {
  return (
    <>
      <FullContainer fullContainerClass="bg-default-blue position-fixed navbar__container">
          <Navbar />
      </FullContainer>
        <Carousels carouselImgAlt="Hero Image" carouselImgSrc={hero}/>
        <FullContainer fullContainerClass="bg-white rounded">
          <MaxContainer>
            <Row>
              <IconCard iconType="bi-send text-muted" iconClass="icon__card"/>
              <IconCard iconType="bi-arrow-repeat text-muted" iconClass="icon__card" />
              <IconCard iconType="bi-credit-card text-muted" iconClass="icon__card" />
              <IconCard iconType="bi-person text-muted" iconClass="icon__card" />
            </Row>
          </MaxContainer>
        </FullContainer>
        <FullContainer fullContainerClass="py-5">
          <MaxContainer>
            <Row>
              <Card cardClass="col-md-4 col-12" imgSrc={product} imgAlt="Apple Watch" size="3"/>
              <Card cardClass="col-md-4 col-12" imgSrc={product} imgAlt="Apple Watch" size="3"/>
              <Card cardClass="col-md-4 col-12" imgSrc={product} imgAlt="Apple Watch" size="3"/>
              <Card cardClass="col-md-4 col-12" imgSrc={product} imgAlt="Apple Watch" size="3"/>
          </Row>
          </MaxContainer>
        </FullContainer>
        <Footer/>
    </>
  );
}

export default App;
