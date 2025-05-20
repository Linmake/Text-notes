import HeaderIndex from '../components/Header/HeaderIndex';
import '../styles/pages/index/IndexMenu.css'
import CardsContainer from "./components/Index/CardsContainer";
import HomeContainer from './components/Index/HomeContainer';

/*
const sizes = {
  laptop: 1920,
}

const media = {
  laptop: `(min-width: ${sizes.laptop})`,
}*/

const MainPage = () => {
  return (
    <>
      <HeaderIndex mainRoute={"http://localhost:4001"} />
      <HomeContainer/>
      <CardsContainer/>                   
    </> 
  )
}
export default MainPage