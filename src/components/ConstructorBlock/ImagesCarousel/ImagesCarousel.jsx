import React, {useEffect, useState} from "react";
import injectSheet from 'react-jss';
import warm1 from './images/warm1.jpg'
import warm2 from './images/warm2.jpg'
import warm3 from './images/warm3.jpg'
import cold3 from './images/cold3.jpg'
import cold2 from './images/cold2.jpg'
import cold1 from './images/cold1.jpg'
import day1 from './images/day1.jpg'
import day2 from './images/day2.jpg'
import day3 from './images/day3.jpg'
import ImageCarouselButton from "./ImageCarouselButton/ImageCarouselButton";

const classes = {
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  carousel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '90%',
  },
  carouselImage: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    '& > img': {
      maxWidth: '100%',
      maxHeight: '100%',
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 70,
    height: 12,
    position: 'absolute',
    bottom: 15,
    zIndex: 5
  },
};

const ImagesCarousel = ({classes, activeType, ...rest}) => {
  const [activeButton, setActiveButton] = useState(0);
  const [currentImg, setCurrentImg] = useState(warm1);
  useEffect(() => {
    if (activeType === 'Теплый') {
      if (activeButton === 0) {
        setCurrentImg(warm1)
      } else if (activeButton === 1) {
        setCurrentImg(warm2)
      } else {
        setCurrentImg(warm3)
      }
    } else if (activeType === 'Дневной') {
      if (activeButton === 0) {
        setCurrentImg(day1)
      } else if (activeButton === 1) {
        setCurrentImg(day2)
      } else {
        setCurrentImg(day3)
      }
    } else {
      if (activeButton === 0) {
        setCurrentImg(cold1)
      } else if (activeButton === 1) {
        setCurrentImg(cold2)
      } else {
        setCurrentImg(cold3)
      }
    }
  }, [activeButton, activeType]);
  return (
    <div className={ classes.root }>
      <div className={ classes.carousel }>
        <div className={ classes.carouselImage }>
          <img src={ currentImg } alt=""/>
          <div className={ classes.buttons }>
            { [0, 1, 2].map(item => <ImageCarouselButton key={ item } id={ item }
                                                         isActive={ activeButton === item }
                                                         setActiveButton={ setActiveButton }/>) }
          </div>
        </div>
      </div>
    </div>
  )
};

export default injectSheet(classes)(ImagesCarousel)