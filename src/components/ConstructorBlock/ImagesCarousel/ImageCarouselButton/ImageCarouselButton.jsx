import React from "react";
import injectSheet from 'react-jss';

const classes = {
  root: {
    width: 10,
    height: 10,
    border: '1px solid #fff',
    borderRadius: 5,
    background: props => props.isActive? '#fff':'',
    cursor: 'pointer'
  }
};

const ImageCarouselButton = ({classes,setActiveButton,id, ...rest}) => {
  return <div className={classes.root} onClick={ () => setActiveButton(id)}/>
};

export default injectSheet(classes)(ImageCarouselButton)