import PropTypes from 'prop-types';
import styled from 'styled-components';

const Template = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #FFFFFF;
  padding: 3rem;
`

const BodyTemplate = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`

export const ProjectCompTemplate = ({ children  }) => {
  return (
    <Template>
      <BodyTemplate>{children}</BodyTemplate>
    </Template>
  )
}

ProjectCompTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}