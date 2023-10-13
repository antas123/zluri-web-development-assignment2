import React, { useState } from 'react';
import './d.css'

const Dropdown = ({onHover}) => {
  const [selectedOption, setSelectedOption] = useState('Forest');
  const [ isOpen, setIsOpen] = useState(false);
  const optionsList = ['Mountain', 'Forest', 'Ocean', 'Desert'];


  const handleClick =()=>{
    setIsOpen(!isOpen);
  }

  const handleChange =(item)=>{
    setSelectedOption(item);
    onHover(item)
  }
  const handleClick2 =(item)=>{
    onHover(item)
  }
  return (
    <div >
      <div className="dropdown" value={selectedOption}  onClick={handleClick}>
        <div onClick={()=>handleClick2(selectedOption)}  className={isOpen ? 'select-open' : 'select'}>
            <span  className={isOpen ? 'selected-open' : 'selected'}>{isOpen?"Dropdown" : selectedOption}</span>
            <div className={isOpen ? 'caret-open' : 'caret'}></div>
        </div>
        <ul className={isOpen ? 'menu-open' : 'menu'}>
         {
            optionsList.map((item,index)=>{
                return <li className="item" onMouseOver={()=>onHover(item)} onClick={()=>handleChange(item)} key={index}>{item}</li>
            })
         }
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;



