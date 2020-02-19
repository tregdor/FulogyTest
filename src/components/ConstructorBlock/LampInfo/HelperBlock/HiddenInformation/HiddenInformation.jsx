import React from "react";
import injectSheet from 'react-jss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

const classes = {
  root: {
    height: '90%',
    position: 'absolute',
    zIndex: 3,
    background: '#eaeaea',
    padding: '30px 50px',
  boxSizing:'border-box'
  },
  back: {
    color: '#a9a9a9',
    marginBottom: 20,
    cursor: 'pointer'
  },
  text: {
    width: '70%',
    fontSize: 18
  }
};

const HiddenInformation = ({classes,setIsHiddenInformation, ...rest}) => {
  return (
    <div className={ classes.root }>
      <div className={ classes.back } onClick={() => setIsHiddenInformation(false)}><FontAwesomeIcon icon={faAngleLeft} color={'#a9a9a9'}/> Вернуться</div>
      <div className={ classes.text }>
        <p>
          «Casual» - это свободный и динамичный стиль, причем он используется не только в
          одежде, но и в интерьере. На рабочем месте это правильное распредепение пространства, удобная деренянная
          мебель,
          натуральные ткани, а дома, в вашей квартире это, и первую очередь, удобство и уют и много свободного
          пространства.
        </p>
        <p>
          Простым решением для вашей прихожей может быть система крючков, установпенных на деренянной плите
          или натянутая сетка, на которую можно вешать нсе, что угодно обувь за каблуки, сумки, зонты, пакеты, одежду.
          Причем, даже дети спокОйна спранятся а этой задачей сами, еспи крючки или сетку разместить до самого пола.
        </p>
        <p>
          Кухня в стиле «сasual»-это, конечно, церево. Хотя подойдет и пластик, если вы дополните интерьер. клетчатыми,
          полосаты
          ми, в горавек ипи в цнеточек шторами и скатертько. Можно украсить по напему разумению множеством разноцветных
          деталей: кружечек, баночек, плоек. Топько не переусердетвуйте, ведь «сasual», прежде всего свобода, простор, а
          не помещение шотно забитое вещами
        </p>
      </div>
    </div>
  )
};

export default injectSheet(classes)(HiddenInformation)