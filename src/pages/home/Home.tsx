import MainCarousel from "../../components/Carousel/home/MainCarousel";
import Category from "../../components/Category/Category";
import Testimonial from "../../components/Testimonials/Testimonial";
import HomeFeatured from "../../components/TrendingProducts/HomeFeatured";
import FlyerPage from "../../components/TrendingProducts/FlyerPage";

const Home = () => {
  return (
    <>
      <MainCarousel />
      <HomeFeatured />
      <FlyerPage />
      <Category />
      <Testimonial />
     
    </>
  );
};

export default Home;
