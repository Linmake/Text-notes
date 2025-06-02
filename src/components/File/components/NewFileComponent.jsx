import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputContainer from './InputContainer';
import { InputFile } from '../Files';
const NewFileComponent = ({ addNewFile, FileInput, handlerNewFile, onBlur }) => {
  return (
    <InputContainer
    className={
      `nav-item ${(addNewFile) ? '' : 'hidde'}`}>
      <div className="text-white">
        <FontAwesomeIcon id="iconFolder" icon={faFile} />
        <span className="fs-4 d-none d-sm-inline fa-table-list newFileInp">
          <InputFile
            ref={FileInput} 
            type="text"
            id="newFileInp"
            onKeyDown={ event => handlerNewFile(event)}
            onBlur={e => onBlur(e)}
          />
        </span>
      </div>
    </InputContainer>
  );
}
export default NewFileComponent