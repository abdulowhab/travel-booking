import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Navigation/Header";
import FeaturedTrip from "./components/Main/FeaturedTrip";
import DiscoverExperience from "./components/Main/DiscoverExperience";
import GiftCard from "./components/Main/GiftCard";
import Hosting from "./components/Main/Hosting";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FeaturedTrip></FeaturedTrip>
      <DiscoverExperience></DiscoverExperience>
      <GiftCard></GiftCard>
      <Hosting></Hosting>
    </div>
  );
}

export default App;
