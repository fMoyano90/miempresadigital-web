import Header from "../components/header";
import Hero from "../components/hero";
import Benefits from "../components/benefits";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import '../static/styles/home.less';

function Home() {
  return (
    <div id='home'>
      <Header />
      <Hero />
      <Benefits />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
