import React from "react";
import injectSheet from 'react-jss';
const classes = {
  root:{
    position: 'absolute',
    top: -10,
    right: -10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 15,
    height: 15,
    borderRadius: 10,
    background: '#6fc6ff',
    fontSize: 10,
    color: '#fff'
  },
};

const ShopCounter = ({classes,counter = 0,...rest}) => {
  return (
    <div className={classes.root}>
      {counter}
    </div>
  )
};
export default injectSheet(classes)(ShopCounter)