import About from "./About";
import Banner from "./Banner";
import MyProfile from "./MyProfile";
import Protfolio from "./Protfolio";
import Blog from "./Blog";

import Contact from "./Contact";
import Footer from "./Footer";

import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <MyProfile></MyProfile>
            <Protfolio></Protfolio>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;