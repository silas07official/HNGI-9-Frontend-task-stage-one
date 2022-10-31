import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Links from "./components/Links";
import Brand from "./components/Brand";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="mx-8 md:mx-10">
      <Navbar />
      <Profile />
      <Links />
      <Brand />
      <Footer />
    </div>
  );
}

export default App;
