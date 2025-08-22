import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../../../styles/components/main/main.css";

const ContainerInicio = styled.div`
  width: 100%;
  height: 89%;
  background: linear-gradient(
    to bottom,
    #0f0f11 0%,
    #131722 40%,
    #12181F 70%,
    #12181F 80%,
    #1A2652 90%,
    #1A2857 100%
  );
  max-width: 100%;
  padding-top: 8% !important;
  display: flex;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
    z-index: 0;
    // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.14'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }@media (min-width: 375px) and (max-width: 430px) {
    height: 77.5%;
  }
  @media (min-width: 300px) and (max-width: 550px) {
    
    }
  `;


const ContainerTitle = styled.div`
  width: 42%;
  height: 550px;
  margin-top: 1%;
  display: flex;
  font-family: "rubik";
  flex-direction: column;
  color: white;
  align-items: center;
  text-align: center;
  cursor: default;
  user-select: none;
  @media (min-width: 375px) and (max-width: 430px) {
    margin-top: 28%;
  width: 86%;
  height: 500px;
  line-height: 3;
  }
  @media (min-width: 300px) and (max-width: 374px) {
  margin-top: 20%;
  width: 80%;
  height: 500px;
  }
  `;

const Title = styled.h1`
  font-size: 80px;
  text-align: center;
  font-weight: 1000;
  transition: transform 0.3s ease;
&:hover {
  transform: scale(0.95);
}

@media (min-width: 300px) and (max-width: 550px) {
  font-size: 40px;
  text-align: center;
  }
  `;

const Subtitle = styled.h2`
margin-top: 7.2rem;
font-size: 1.4rem;
color: white;
@media (min-width: 375px) and (max-width: 430px) {
    font-size: 1.3rem;
    
    }
    @media (min-width: 300px) and (max-width: 550px) {
      margin-top: 1rem;
      }
`;

const ButtonFirst = styled.button`
      color: black;
      width: 192px;
      height: 55px;
      font-size: 1.2rem;
      color: #075C5B;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 1.5rem;
      background-color: #32E6E2;
      text-align: center;
      text-decoration: none;
      font-weight: 600;
      justify-content: center;
      align-items: center;
      line-height: 0;
      &:hover{
        // background-color:rgb(38, 186, 254);
        }
        &:active{
          // background-color:rgb(38, 186, 254);
          }
          @media (min-width: 375px) and (max-width: 430px) {
            height: 40px;
            font-size: 1rem;
            margin-top: 2.3rem !important;
            }
            @media (min-width: 300px) and (max-width: 550px) {
              margin-top: 1rem;
              }
              `;

const CarruselContainer = styled.div`
  height: 350px;
  width: 100%;
  background-color: #12181F;
  position: relative;
  top: 100%;
  @media (min-width: 375px) and (max-width: 430px) {
    height: 220px;
  }
  @media (min-width: 300px) and (max-width: 550px) {
  }
`

const ContainerEditor = styled.div`
  display: flex;
  width: 900px;
  height: 470px;
  background-color: #1F689E;
  position: relative;
  align-items: center;
  justify-content: center;
  top: -290%;
  left: 25%;
  border: 1px solid white;
  border-radius: 1rem;
  `

const EditorExample = styled.div`
  display: flex;  
  width: 870px;
  height: 440px;
  z-index: 120;
  background-color: white;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
`

const MainContainer = () => {
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate("Projects-menu");
  };
  return (
    <>
      <ContainerInicio className="container-title">
        <ContainerTitle>
          <Title className="font text">Inserta tus ideas <br /> en la nube</Title>
          <Subtitle className="text">
            Crea cualquier diseño y estructura, desde notas personales hasta mapas con AI, de la forma mas rapida con Lumia Pina.
          </Subtitle>
          <ButtonFirst type="button" onClick={handlerNavigate}>
            Sign Up for Free
          </ButtonFirst>
        </ContainerTitle>
      </ContainerInicio>
      <CarruselContainer>
        <ContainerEditor>
          <EditorExample />
        </ContainerEditor>
      </CarruselContainer>
    </>
  );
};

export default MainContainer;
