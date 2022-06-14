import FullContainer from "./Components/FullContainer/FullContainer";
import MaxContainer from "./Components/MaxContainer/MaxContainer";
import Row from "./Components/Row/Row";
import Navbar from "./Components/Navbar/Navbar";
import Carousels from "./Components/Carousel/Carousels";
import logo from './logo.svg';
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <FullContainer>
        <Navbar />
      </FullContainer>
        <Carousels carouselImgAlt="Hero Image" carouselImgSrc={logo}/>
        <FullContainer fullContainerClass="py-5">
          <MaxContainer>
            <Row rowClass="gap-1 flex-lg-nowrap">
              <Card cardClass="col-md-4 col-12"/>
              <Card cardClass="col-md-4 col-12"/>
              <Card cardClass="col-md-4 col-12"/>
          </Row>
          </MaxContainer>
        </FullContainer>
        <FullContainer fullContainerClass="py-5">
          <MaxContainer>
            <Row rowClass="gap-1 flex-lg-nowrap">
            <Card cardClass="col-md-4 col-12" bgCard="true" bgColor="bg-primary"/>
            <Card cardClass="col-md-4 col-12" bgCard="true" bgColor="bg-secondary"/>
            <Card cardClass="col-md-4 col-12" bgCard="true" bgColor="bg-success"/>
            </Row>
          </MaxContainer>
        </FullContainer>
        <Footer/>
    </>
  );
}

export default App;
