import React, {useState} from "react";
import injectSheet from 'react-jss';
import ImagesCarousel from "./ImagesCarousel/ImagesCarousel";
import LampInfo from "./LampInfo/LampInfo";

const classes = {
  root: {
    height: '90%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  }
};

const ConstructorBlock = ({classes,setIsHiddenInformation, ...rest}) => {
  const [activeType,setActiveType] = useState('Теплый');
  return (
    <div className={ classes.root }>
      <ImagesCarousel activeType={activeType}/>
      <LampInfo setIsHiddenInformation={setIsHiddenInformation} activeType={activeType} setActiveType={setActiveType}/>
    </div>
  )
};

export default injectSheet(classes)(ConstructorBlock)