import React from "react";
import injectSheet from 'react-jss';

const classes = {
  root:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: props =>  props.id === props.activeItem? '#099eff': '#f7f7f7',
    border: '1px solid #cecece',
    borderBottom: props =>  props.id <= props.activeItem ? `3px solid #0ec0ff` :`3px solid #ff4054`,
    color: props =>  props.id === props.activeItem? 'white': 'black',
    fontSize: 16,
    borderRadius: 3,
    cursor: 'pointer',
  }
};

const FooterMenuItem = ({classes,text,...rest}) => {

  return (
    <div className={classes.root}>
      <div>{text.split(' ')[0]}</div>
      <div>{text.split(' ')[1]}</div>
    </div>
  )
};

export default injectSheet(classes)(FooterMenuItem)