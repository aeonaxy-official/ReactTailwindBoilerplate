import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import VerifyEmail from "./Components/VerifyEmail/VerifyEmail";
import SelectOptions from "./Components/SelectOptions/SelectOptions";
import Greetings from "./Components/Welcome/Greetings";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import DemoComponent from "./DemoComponent";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log(isAuthenticated);

  return (
    <>
      <div className="bg-white">
        {/* <DemoComponent/> */}
        {!isAuthenticated && <Navigate to="/" />}
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/welcome" element={<Greetings />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/select_options" element={<SelectOptions />} />
          <Route path="/demo" element={<DemoComponent />} />
        
        </Routes>
      </div>
    </>
  );
}

export default App;
