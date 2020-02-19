import React from "react";
import injectSheet from 'react-jss';

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  title:{
    width: '30%',
    color: '#525252',
    fontSize: 18,
  },
  text: {
    width: '40%',
    color: '#464646',
    fontSize: 20
  }
};

const InfoItem = ({classes,data, ...rest}) => {
  return (
    <div className={ classes.root }>
      <div className={classes.title}>{data.title}:</div>
      <div className={classes.text}>{data.text}</div>
    </div>
  )
};

export default injectSheet(classes)(InfoItem)