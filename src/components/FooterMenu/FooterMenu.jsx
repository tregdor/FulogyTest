import React, {useState} from "react";
import injectSheet from 'react-jss';
import FooterMenuItem from "./FooterMenuItem/FooterMenuItem";

const classes = {
  root:{
    width: '100%',
    height: '10%',
    display: 'grid',
    gridTemplateColumns: 'repeat(8,1fr)',
    gridGap: 2
  }
};

const FooterMenu = ({classes,active = 5,...rest}) => {
  const [activeItem,setActiveItem] = useState(active);
  const items = ['Вариант кухни','Размеры','Сенсор',
    'Питающий кабель','Блок питания','Цвет свечения','Монтаж','Корзина']
    .map((item,id) => <FooterMenuItem text={item} key={id} activeItem={activeItem} id={id}/>);
  return (
    <div className={classes.root}>
      {items}
    </div>
  )
};

export default injectSheet(classes)(FooterMenu)