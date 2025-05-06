import React from "react";
import { Link } from "react-router-dom";
import { CardBody, CardComponent } from "../../../components/HomeCards/Card";
import styled from "styled-components";

export default function CardsContainer() {
  const ContainerCards = styled.div`
    width: 100vw;
    height: 100%;
    position: absolute;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <ContainerCards id="Create">
        <Link to={'/Projects-menu/'} className="link-card" style={{ "marginRight": '13rem' }}>
          <CardComponent>
            <CardBody title="Create a folder" icon="iconProjectsMenu"></CardBody>
          </CardComponent>
        </Link>
        <Link to={'Project/'} className="link-card">
          <CardComponent>
            <CardBody title="Create a note" icon="iconProject"></CardBody>
          </CardComponent>
        </Link>
      </ContainerCards>
  );
}
