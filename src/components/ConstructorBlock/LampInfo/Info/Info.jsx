import React from "react";
import injectSheet from 'react-jss';
import InfoItem from "./InfoItem/InfoItem";
import Type from "./Class/Class";
const classes ={
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '30px 40px',
  }
};

const Info = ({classes,...rest}) => {
  const items = [
    {text:<Type/>,title:'Класс'},
    {text:'59 Вт.' ,title:'Потребляемая  мощность'},
    {text:'3459 Люмен = 7,5 ламп  накаливания по 40 Вт.',title:'Сила света'},
    {text:'3 года',title:'Гарантия'},
    {text:'Да',title:'Монтаж'},
    {text:'2594 рублей',title:'Итого сумма'}].map((item,id) => <InfoItem data={item} key={id}/>)
  return (
    <div className={classes.root}>
      {items}
    </div>
  )
};

export default injectSheet(classes)(Info)