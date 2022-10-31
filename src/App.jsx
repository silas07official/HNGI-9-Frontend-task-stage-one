import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Links from "./components/Links";
import Brand from "./components/Brand";



function App() {
  return (
    <div className="mx-8 md:mx-10">
      <Navbar />
      <Profile />
      <Links />
      <Brand />
    </div>
  );
}

export default App;
