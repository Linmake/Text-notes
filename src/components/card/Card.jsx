import PropTypes from 'prop-types';
import proyect from '../../assets/proyecto-icon_1.webp'
import idea from '../../assets/idea-icon.webp'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components'

const Section = styled.section`
  width: 30%;
  margin-top: 14%;
  margin-bottom: 14%;
`

const H2 = styled.h2`
  font-size: 1.6rem;
  font-weight: 550;
`

const Img = styled.img`
  width: 30%;
  margin-top: 15%;
  margin-bottom: 15%;
`

const Article = styled.article`
  width: 341px;
  height: 401px;
  box-shadow: 0px 0px 6px rgba(131, 131, 131, 0.822);
  border: 2px solid rgb(255, 255, 255);
  background-color: #f7fedde6;
  padding: 1%;
  border-radius: 0.4rem;
  &:first-child {
  margin-right: 15%;
  }
  &:hover {
  cursor: pointer;
  box-shadow: 0px 0px 6px rgba(176, 176, 176, 0.783);
  }
`

export const CardBody = ({ title, descr, icon }) => {
  let imgSource
  if (icon === "proyectIcon") {
    imgSource = proyect
  } if (icon === "ideaIcon") {
    imgSource = idea
  }
  return (
    <>
      <Section>
        <H2>{title}</H2>
        <Img src={imgSource} alt="proyecto icono" />
        <p>
          {descr}
        </p>
      </Section>
    </>
  )
}

export const CardComponent = ({ children }) => {
  const [ruta, setRuta] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    if (ruta === "") return
    navigate(ruta)
  }, [ruta, navigate])

  const handleClick = (ruta) => {
    if (ruta === "idea" || ruta === "proyecto") {
      setRuta(`/${ruta}/create`)
    } else {
      console.error("especifica una ruta correcta")
    }
  }
  return (
    <>
      <Article onClick={() => { handleClick({ ruta }) }}>
        <section id="target-1" className="targets">{children}</section>
      </Article>
    </>
  )
}


//Props
CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
}

CardComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

