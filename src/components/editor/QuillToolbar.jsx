<<<<<<< HEAD
import { useContext } from 'react';
import { positionSideContext } from '@context/SideProv';

const QuillToolbar = () => {
  const { sidebarVisible } = useContext(positionSideContext);

  return (
    <div id='toolbar' className={`ql-toolbar ql-snow ${sidebarVisible ? '' : 'expand-toolbar'}`}>
      <select className="ql-header">
        <option value="1"></option>
        <option value="2"></option>
        <option selected></option>
      </select>
      <select className="ql-font"></select>
      <select className="ql-size">
        <option value="small"></option>
        <option selected></option>
        <option value="large"></option>
        <option value="huge"></option>
      </select>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline"></button>
      <button className="ql-strike"></button>
      <button className="ql-blockquote"></button>
      <button className="ql-list" value="ordered"></button>
      <button className="ql-list" value="bullet"></button>
      <button className="ql-indent" value="-1"></button>
      <button className="ql-indent" value="+1"></button>
      <button className="ql-link"></button>
      <button className="ql-image"></button>
      <button className="ql-clean"></button>
    </div>
  );
};

export default QuillToolbar;
=======
import { useContext } from 'react';
import { positionSideContext } from '@context/SideProv';

const QuillToolbar = () => {
  const { sidebarVisible } = useContext(positionSideContext);

  return (
    <div id='toolbar' className={`ql-toolbar ql-snow ${sidebarVisible ? '' : 'expand-toolbar'}`}>
      <select className="ql-header">
        <option value="1"></option>
        <option value="2"></option>
        <option selected></option>
      </select>
      <select className="ql-font"></select>
      <select className="ql-size">
        <option value="small"></option>
        <option selected></option>
        <option value="large"></option>
        <option value="huge"></option>
      </select>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline"></button>
      <button className="ql-strike"></button>
      <button className="ql-blockquote"></button>
      <button className="ql-list" value="ordered"></button>
      <button className="ql-list" value="bullet"></button>
      <button className="ql-indent" value="-1"></button>
      <button className="ql-indent" value="+1"></button>
      <button className="ql-link"></button>
      <button className="ql-image"></button>
      <button className="ql-clean"></button>
    </div>
  );
};

export default QuillToolbar;
>>>>>>> 1223f99ee06a0a92a5bd8f2f92bd5b31e4eb6a13
