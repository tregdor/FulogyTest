import React from "react";
import injectSheet from 'react-jss';
import HiddenInfoItem from "./MenuItem/MenuItem";
const classes = {
  root:{
    display:'grid',
    position: 'absolute',
    right: 0,
    width: '300px',
    height: '100%',
    gridTemplateRows: 'repeat(8, 1fr)',
    zIndex: 4,
  },

};
const Menu = ({classes,...rest}) => {
  const items = ['Обучающее видео','Оформление заказа','Оплата'
    ,'Доставка','Гарантия','Возврат','Контакты','Партнерам'].map((item,id) => <HiddenInfoItem key={id} text={item}/>)
  return (
    <div className={classes.root}>
      {items}
    </div>
  )
};

export default injectSheet(classes)(Menu)