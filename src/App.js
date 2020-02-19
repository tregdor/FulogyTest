import React, {useState} from 'react';
import Header from "./components/Header/Header";
import HiddenMenu from "./components/Header/Burger/Menu/Menu";
import injectSheet from 'react-jss';
import ConstructorBlock from "./components/ConstructorBlock/ConstructorBlock";
import HiddenInformation from "./components/ConstructorBlock/LampInfo/HelperBlock/HiddenInformation/HiddenInformation";
import FooterMenu from "./components/FooterMenu/FooterMenu";

const classes = {
  root: {
    width: '100vw',
    height: '100vh',
    fontFamily: 'Roboto',

  },
  content: {
    height: 'calc(100% - 85px)',
    position: 'relative'
  }

}

const  App  = ({classes,...rest}) => {
  const [isHiddenMenu, setIsHiddenMenu] = useState(false);
  const [isHiddenInformation, setIsHiddenInformation] = useState(false);

  return (
    <div className={ classes.root }>
      <Header setIsHiddenMenu={ () => setIsHiddenMenu(!isHiddenMenu) } isHiddenMenu={isHiddenMenu}/>
      <div className={ classes.content }>
        { isHiddenMenu && <HiddenMenu/> }
        { isHiddenInformation && <HiddenInformation setIsHiddenInformation={setIsHiddenInformation}/> }
        <ConstructorBlock setIsHiddenInformation={setIsHiddenInformation}/>
        <FooterMenu/>
      </div>
    </div>
  );
}

export default injectSheet(classes)(App);
