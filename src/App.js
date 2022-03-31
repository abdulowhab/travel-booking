import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Navigation/Header";
import FeaturedTrip from "./components/Main/FeaturedTrip";
import DiscoverExperience from "./components/Main/DiscoverExperience";
import GiftCard from "./components/Main/GiftCard";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FeaturedTrip></FeaturedTrip>
      <DiscoverExperience></DiscoverExperience>
      <GiftCard></GiftCard>
    </div>
  );
}

export default App;
