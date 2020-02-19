import React from "react";
import injectSheet from 'react-jss';
const classes = {
  root:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 35,
    background: '#e6e6e6',
    borderRadius: 5,
    boxShadow: '0 0 5px rgba(0,0,0,0.5)',
  }
};

const Class = ({classes,type = 'Standart',...rest}) => {
  return (
    <div className={classes.root}>
      {type}
    </div>
  )
};

export default injectSheet(classes)(Class)