import React from "react";
import injectSheet from 'react-jss';
import background from './images/light.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const classes = {
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 120,
    height: 80,
    background: `url(${ background }) 50% 50% no-repeat`,
    backgroundSize: 'cover',
    borderRadius: 3,
    boxShadow: '0 0 5px rgba(0,0,0,0.5)',
    cursor: 'pointer'
  },
  checkedBlock: {
    position: 'absolute',
    display: props => props.isActive ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    top: 5,
    right: 5,
    background: '#099eff',
    borderRadius: 3
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '30%',
    background: '#444444',
    fontSize: 13,
    color: 'white',
  }
};

const TypeSelectorItem = ({classes, text,setActiveType, ...rest}) => {

  return (
    <div className={ classes.root } onClick={() => setActiveType(text)}>
      <div className={ classes.title }>{ text }</div>
      <div className={ classes.checkedBlock }><FontAwesomeIcon icon={ faCheck } color={ 'white' }/></div>
    </div>
  )
};

export default injectSheet(classes)(TypeSelectorItem)