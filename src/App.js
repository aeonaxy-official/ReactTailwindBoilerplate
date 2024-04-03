import NotificationBar from "./pages/components/NotificationBar";
import SideBar from "./pages/components/SideBar"

function App() {
  return (
    <div>
   <NotificationBar />
   <div style={{ marginTop: "250px" }}> {/* Adjust margin-left based on the width of your sidebar */}
        <SideBar />
      </div>
    </div>
  );
}

export default App;
