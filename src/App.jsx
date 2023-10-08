import { useSelector } from "react-redux"
import Main from "./components/Main"
import Slider from "./components/Slider"
import Footer from "./components/Footer"


function App() {
  const { all_info } = useSelector(state => state.Diablo)
  return (
    <div className="relative h-[100vh] w-full overflow-hidden text-white">
      <img src={all_info.image} alt={all_info.title} className="absolute h-full w-full z-[-100]" />
      <div className="h-full w-full overflow-hidden flex flex-col justify-center px-[5%]">
        <div className="flex w-full items-center text-white text-[50px]">
            <Main />
            <Slider/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
