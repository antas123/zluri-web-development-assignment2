import React,{useState} from 'react'
import Dropdown from './Dropdown'
import './Img.css'
import ocean from "./proimages/ocean.jpg"
import forest from './proimages/forest.jpg'
import mountain from "./proimages/mountain.jpg"
import desert from "./proimages/desert.jpg"

const Imgcompo = () => {

    const [image, setImage] = useState(forest);

    const img ={"Ocean":ocean, "Forest":forest,"Mountain": mountain,"Desert": desert};


    const onHoverHandler =(data)=>{
        setImage(img[data]);
    }

  return (
    <div className='box1'>
        <div className='box2'>
          <Dropdown className='db' onHover={onHoverHandler}/>
        </div>
        <div className='box3'>
          <img className='img' src={image} alt="pic" />
        </div>
    </div>
  )
}

export default Imgcompo