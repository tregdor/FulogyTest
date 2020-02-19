import React from "react";
import injectSheet from 'react-jss';
import Info from "./Info/Info";
import HelperBlock from "./HelperBlock/HelperBlock";
import TypeSelector from "./TypeSelector/TypeSelector";
const classes ={
  root: {
    display: 'grid',
    gridTemplateRows: '5fr 1fr 3fr',
    background: '#f7f7f7',
    border: '1px solid #e7e7e7'
  }
};

const LampInfo = ({classes,setIsHiddenInformation,setActiveType,activeType,...rest}) => {
  return (
    <div className={classes.root}>
      <Info/>
      <HelperBlock setIsHiddenInformation={setIsHiddenInformation}/>
      <TypeSelector setActiveType={setActiveType} activeType={activeType}/>
    </div>
  )
};

export default injectSheet(classes)(LampInfo)
