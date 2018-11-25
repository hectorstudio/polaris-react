import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NextArrow, PrevArrow } from './Styles';

const RenderNextArrow = (props) => {
  const { onClick, className } = props;

  return <NextArrow className={className} icon={faAngleRight} onClick={onClick} />;
};

const RenderPrevArrow = (props) => {
  const { onClick, className } = props;

  return <PrevArrow className={className} icon={faAngleLeft} onClick={onClick} />;
};

const Carousel = (props) => {
  const sliderSettings = {
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <RenderNextArrow />,
    prevArrow: <RenderPrevArrow />,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const { children } = props;

  return (
    <Slider {...sliderSettings}>
      { children }
    </Slider>
  );
};

RenderNextArrow.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

RenderNextArrow.defaultProps = {
  onClick: null,
  className: null,
};

RenderPrevArrow.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

RenderPrevArrow.defaultProps = {
  onClick: null,
  className: null,
};

export default Carousel;
