import '../../styles/pages/index/IndexMenu.css'
import CardsContainer from "../../components/Main/CardsContainer";
import HomeContainer from '../../components/Main/HomeContainer';
import MainHeader from '../../components/Header/MainHeader';

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
      <MainHeader mainRoute={"http://localhost:4001"}/>
      <HomeContainer/>
      <CardsContainer/>                   
    </> 
  )
}
export default MainPage