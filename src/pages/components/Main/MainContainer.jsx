import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../../../styles/components/main/main.css";

const ContainerInicio = styled.div`
  width: 100%;
  height: 85%;
  background-color: white;
  max-width: 100%;
  padding-top: 8% !important;
  display: flex;
  justify-content: center;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.14'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  `;

const ContainerTitle = styled.div`
  width: 42%;
  margin-top: 8%;
  display: flex;
  height: 550px;
  font-family: "rubik";
  flex-direction: column;
  color: #212121;
  align-items: center;
  cursor: default;
  user-select: none;
`;

const ButtonFirst = styled.button`
  background-color: white;
  color: black;
  width: 11.25rem;
  height: 3.125rem;
  marging 2% 2px;
  font-size: 1.4rem;
  color: white;
  letter-spacing: 0;
  border: 2px solid rgb(84, 200, 255);
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2rem;
  background-color: #3ac0ff;
  &:hover{
    background-color:rgb(38, 186, 254);
    color: white;
    border: 2px solid rgb(84, 200, 255);
  }
  &:active{
    background-color:rgb(38, 186, 254);
    color: white;
    border: 2px solid rgb(84, 200, 255);
  }
`;

const Title = styled.h1`
  font-size: 3.7rem;
  &:hover {
    transition: scale(0.7, 0.7) 1s;
  }
`;

const Subtitle = styled.h2`
  margin-top: 2rem;
  font-size: 1.7rem;
`;

const MainContainer = () => {
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate("Projects-menu");
  };
  return (
    <ContainerInicio className="container-title">
      <ContainerTitle>
        <Title className="font text">Able Note</Title>
        <Subtitle className="text">
          Herramienta de notas de texto y proyectos
        </Subtitle>
        <ButtonFirst type="button" onClick={handlerNavigate}>
          Crear
        </ButtonFirst>
      </ContainerTitle>
    </ContainerInicio>
  );
};

export default MainContainer;
