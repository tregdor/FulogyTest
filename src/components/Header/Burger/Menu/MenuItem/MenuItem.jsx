import React from "react";
import injectSheet from 'react-jss';
const classes = {
  root:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#2c2c2c',
    borderBottom: '1px solid grey',
    borderTop: '1px solid grey',
    color: '#fff',
  },

};
const MenuItem = ({classes,text,...rest}) => {
  return (
    <div className={classes.root}>
      {text}
    </div>
  )
};

export default injectSheet(classes)(MenuItem)