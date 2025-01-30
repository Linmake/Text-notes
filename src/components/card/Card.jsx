<<<<<<< HEAD
import PropTypes from 'prop-types';
import proyecto from '../../assets/proyectoIcon.webp';
import proyectosMenu from '../../assets/proyectosMenuIcon.webp';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
const Article = styled.article`
  width: 320px;
  height: 380px;
  box-shadow: 0px 0px 4px rgba(131, 131, 131, 0.822);
  border: 2px solid rgb(255, 255, 255);
  background-color: #FFF;
  padding: 1%;
  border-radius: 0.3rem;
  &:first-child {
    margin-right: 10%;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 6px rgba(176, 176, 176, 0.783);
  }
`;
const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  padding: 1rem;
  text-align: center;
  font-family: "Poppins";
`;
const H2 = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
`;
const Img = styled.img`
  width: 30%;
  margin-top: 15%;
`;
export const CardBody = ({ title, icon }) => {
  let imgSource;
  if (icon === "proyectoIcon") {
    imgSource = proyecto;
  } else if (icon === "proyectosMenuIcon") {
    imgSource = proyectosMenu;
  }
  return (
    <>
      <Section>
        <H2>{title}</H2>
        <Img src={imgSource} alt="proyecto icono" />
      </Section>
    </>
  );
};

export const CardComponent = ({ children }) => {
  const [ruta, setRuta] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (ruta === "") return;
    navigate(ruta);
  }, [ruta, navigate]);

  const handleClick = (ruta) => {
    if (ruta === "proyectos-menu" || ruta === "proyecto") {
      setRuta(`/${ruta}`);
    } else {
      console.error("especifica una ruta correcta");
    }
  };

  return (
    <>
      <Article onClick={() => { handleClick(ruta); }}>
        <section id="target-1" className="targets">{children}</section>
      </Article>
    </>
  );
};

// Props
CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(['proyectoIcon', 'proyectosMenuIcon']).isRequired,
};

CardComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
=======
import PropTypes from 'prop-types';
import proyecto from '../../assets/proyectoIcon.webp';
import proyectosMenu from '../../assets/proyectosMenuIcon.webp';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
const Article = styled.article`
  width: 320px;
  height: 380px;
  box-shadow: 0px 0px 4px rgba(131, 131, 131, 0.822);
  border: 2px solid rgb(255, 255, 255);
  background-color: #FFF;
  padding: 1%;
  border-radius: 0.3rem;
  &:first-child {
    margin-right: 10%;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 6px rgba(176, 176, 176, 0.783);
  }
`;
const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  padding: 1rem;
  text-align: center;
  font-family: "Poppins";
`;
const H2 = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
`;
const Img = styled.img`
  width: 30%;
  margin-top: 15%;
`;
export const CardBody = ({ title, icon }) => {
  let imgSource;
  if (icon === "proyectoIcon") {
    imgSource = proyecto;
  } else if (icon === "proyectosMenuIcon") {
    imgSource = proyectosMenu;
  }
  return (
    <>
      <Section>
        <H2>{title}</H2>
        <Img src={imgSource} alt="proyecto icono" />
      </Section>
    </>
  );
};

export const CardComponent = ({ children }) => {
  const [ruta, setRuta] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (ruta === "") return;
    navigate(ruta);
  }, [ruta, navigate]);

  const handleClick = (ruta) => {
    if (ruta === "proyectos-menu" || ruta === "proyecto") {
      setRuta(`/${ruta}`);
    } else {
      console.error("especifica una ruta correcta");
    }
  };

  return (
    <>
      <Article onClick={() => { handleClick(ruta); }}>
        <section id="target-1" className="targets">{children}</section>
      </Article>
    </>
  );
};

// Props
CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(['proyectoIcon', 'proyectosMenuIcon']).isRequired,
};

CardComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
>>>>>>> 1223f99ee06a0a92a5bd8f2f92bd5b31e4eb6a13
