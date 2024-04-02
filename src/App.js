// import DemoComponent from "./DemoComponent";
import BlueSection from "./components/BlueSection";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <NavBar />
      {/* <DemoComponent /> */}
      <Landing />
      <Features />
      <FAQ />
      <BlueSection />
      <Footer />

    </div>
  );
}

export default App;
