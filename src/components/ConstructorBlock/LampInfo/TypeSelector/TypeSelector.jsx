import React from "react";
import injectSheet from 'react-jss';
import TypeSelectorItem from "./TypeSelectorItem/TypeSelectorItem";

const classes = {
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '0 100px'
  }
};

const TypeSelector = ({classes,setActiveType,activeType = 0, ...rest}) => {

  let items = ['Теплый', 'Дневной', 'Холодный'].map((item, id) => <TypeSelectorItem text={ item } key={ id }
                                                                                    isActive={ item === activeType }
                                                                                    setActiveType={setActiveType} />);
  return (
    <div className={classes.root}>
      {items}
    </div>
  )
};

export default injectSheet(classes)(TypeSelector)