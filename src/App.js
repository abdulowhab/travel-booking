import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Navigation/Header";
import FeaturedTrip from "./components/Main/FeaturedTrip";
import DiscoverExperience from "./components/Main/DiscoverExperience";
import GiftCard from "./components/Main/GiftCard";
import Hosting from "./components/Main/Hosting";
import Banner from "./components/Main/Banner";
import FooterDown from "./components/Footer/FooterDown";
import FooterMiddle from "./components/Footer/FooterMiddle";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner />
      <FeaturedTrip></FeaturedTrip>
      <DiscoverExperience></DiscoverExperience>
      <GiftCard></GiftCard>
      <Hosting></Hosting>
      <FooterMiddle />
      <FooterDown />
    </div>
  );
}

export default App;
