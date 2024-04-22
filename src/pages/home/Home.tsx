import MainCarousel from "../../components/Carousel/home/MainCarousel";
import Category from "../../components/Category/Category";
import Testimonial from "../../components/Testimonials/Testimonial";
import HomeFeatured from "../../components/TrendingProducts/HomeFeatured";
import PopularProducts from "../../components/TrendingProducts/PopularProducts";

const Home = () => {
  return (
    <>
      <MainCarousel />
      <HomeFeatured />
      <Category />
      <Testimonial />
      <PopularProducts />
    </>
  );
};

export default Home;
