import MainHeader from '../../components/Header/MainHeader';
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
      <MainHeader mainRoute={"http://localhost:3000"} />

      <HomeContainer/>
      <CardsContainer/>                   
    </> 
  )
}
export default MainPage