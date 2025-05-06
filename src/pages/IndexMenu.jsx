import HeaderComponent from '../components/Header/Header';
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

const IndexMenuPage = () => {
  return (
    <>
      <HeaderComponent/>
      <HomeContainer/>
      <CardsContainer/>
    </> 
  )
}
export default IndexMenuPage