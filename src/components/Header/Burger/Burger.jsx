import React from "react";
import injectSheet from 'react-jss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";

const classes = {
  root: {},
};

const Burger = ({classes, setIsHiddenMenu, isHiddenMenu, ...rest}) => {

  return (
    <div className={ classes.root } onClick={ setIsHiddenMenu }>
      <FontAwesomeIcon icon={ isHiddenMenu ? faTimes : faBars } color={ 'grey' }/>
    </div>
  )
};
export default injectSheet(classes)(Burger)