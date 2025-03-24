import PropTypes from 'prop-types';
import styled from 'styled-components';

const Template = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5rem;
  position: relative;
  background-color: white;
`

const BodyTemplate = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`

export const NoProjectCompTemplate = ({ children  }) => {
  return (
    <Template>
      <BodyTemplate>{children}</BodyTemplate>
    </Template>
  )
}

NoProjectCompTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}