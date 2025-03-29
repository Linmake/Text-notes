import PropTypes from 'prop-types';
import project from '../../assets/projectIcon.webp';
import projectosMenu from '../../assets/projectMenuIcon.webp';
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
    box-shadow: 0px 0px 6px rgba(168, 168, 168, 0.78);
    background-color: rgba(253, 253, 253);
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
  if (icon === "projectIcon") {
    imgSource = project;
  } else if (icon === "iconProjectsMenu") {
    imgSource = projectosMenu;
  }
  return (
    <>
      <Section>
        <H2>{title}</H2>
        <Img src={imgSource} alt="Icon Project" />
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
    if (ruta === "Projects-menu" || ruta === "Project") {
      setRuta(`/${ruta}`);
    } else {
      console.error("Provide a valid url");
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
  icon: PropTypes.oneOf(['iconProject', 'iconProjectsMenu']).isRequired,
};

CardComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
