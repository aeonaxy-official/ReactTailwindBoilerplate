// import DemoComponent from "./DemoComponent";
import BlueSection from "./components/BlueSection";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      {/* <DemoComponent /> */}
      <Landing />
      <Features />
      <FAQ />
      <BlueSection />

    </div>
  );
}

export default App;
