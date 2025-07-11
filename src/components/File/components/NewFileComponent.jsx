import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputContainer from './InputContainer';
import { InputFile } from '../Files';
import styled from 'styled-components';

const FileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
  width: 100%;
`

const NewFileComponent = ({ addNewFile, FileInput, handlerNewFile, onBlur }) => {
  return (
    <InputContainer
    className={
      `nav-item ${(addNewFile) ? '' : 'hidde'}`}>
      <FileContainer className="text-white">
        <FontAwesomeIcon id="iconFolder" icon={faAlignLeft} />
        <span className="fs-4 d-none d-sm-inline fa-table-list newFileInp">
          <InputFile
            ref={FileInput} 
            type="text"
            id="newFileInp"
            onKeyDown={ event => handlerNewFile(event)}
            onBlur={e => onBlur(e)}
          />
        </span>
      </FileContainer>
    </InputContainer>
  );
}
export default NewFileComponent