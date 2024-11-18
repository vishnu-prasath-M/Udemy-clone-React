
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Saleimages from "./components/Saleimage";
import Recommented from "./components/Recommented";
import Topics from "./components/Topics";
import Popular from "./components/Popular";
import Footer from "./components/Footer";
function App()
{

  return(
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <Saleimages></Saleimages>
      <Recommented></Recommented>
      <Topics></Topics>
      <Popular></Popular>
      <Footer></Footer>
    </div>
  )  
}
export default App