import '../../styles/pages/index/IndexMenu.css'
import MainContainer from '../components/Index/MainContainer';
import MainHeader from '../../components/Header/MainHeader';
import CardsContainer from '../components/Index/CardsContainer';

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
      <MainContainer/>
      <CardsContainer/>                   
    </> 
  )
}
export default MainPage