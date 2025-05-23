import '../../styles/pages/main/main.css'
import MainContainer from '../components/Main/MainContainer';
import MainHeader from '../../components/Header/MainHeader';
import CardsContainer from '../components/Main/CardsContainer';

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