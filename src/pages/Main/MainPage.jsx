import HeaderIndex from '../../components/Header/HeaderIndex';
import '../../styles/pages/index/IndexMenu.css'
import CardsContainer from "../../components/Main/CardsContainer";
import HomeContainer from '../../components/Main/HomeContainer';

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
      <HeaderIndex mainRoute={"http://localhost:4001"} />
      <HomeContainer/>
      <CardsContainer/>                   
    </> 
  )
}
export default IndexMenuPage