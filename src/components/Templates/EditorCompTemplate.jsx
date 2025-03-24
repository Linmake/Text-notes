import PropTypes from 'prop-types';
import styled from 'styled-components';

const Template = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 97%;
`

const BodyTemplate = styled.div`
  display: grid;
  grid-template-areas: "header header" "aside main";
  grid-template-rows: 7% 96.1%;
  grid-template-columns: 20% 80%;
  width: 100%;
  height: 100%;
`

const EditorCompTemplate = ({ children }) => {
  return (
    <>
      <Template>
        <BodyTemplate>{children}</BodyTemplate>
      </Template>
    </>
  )
}

EditorCompTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default EditorCompTemplate