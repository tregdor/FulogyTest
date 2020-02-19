import React from "react";
import injectSheet from 'react-jss';

const classes = {
  root:{
    display: 'grid',
    gridTemplateColumns: '1fr 7fr',
    color: '#fff',
    '& > *':{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  icon:{
    background: '#1290f1',
    fontSize: 45,
    cursor: 'pointer'
  },
  text:{
    background: '#099eff',
    fontSize: 20
  }
};

const HelperBlock = ({classes,setIsHiddenInformation,...rest}) => {
  return (
    <div className={classes.root}>
      <div className={classes.icon} onClick={() => setIsHiddenInformation(true)}>i</div>
      <div className={classes.text}>Выберите цвет свечения</div>
    </div>
  )
};

export default injectSheet(classes)(HelperBlock)