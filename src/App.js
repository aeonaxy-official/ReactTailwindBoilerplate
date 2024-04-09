import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Welcome from "./Components/Welcome/Welcome";
import DemoComponent from "./DemoComponent";
import VerifyEmail from "./Components/VerifyEmail/VerifyEmail";
import SelectOptions from "./Components/SelectOptions/SelectOptions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/verify"  element={<VerifyEmail/>} />
        <Route path="/select_options" element={<SelectOptions/>} />
      </Routes>
    </>
  );
}

export default App;
