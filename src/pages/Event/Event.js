import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from '../../components/Card/cards';
import MyCalendar from '../../components/Calendar/Calendar';
import { Container, Row, Col } from 'react-bootstrap';
import Up from "../../assets/images/up.svg";
import Down from "../../assets/images/down.svg";
import Branch from "../../assets/images/branch.png";
import Circle from '../../components/Circle/Circle';
const Event = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true, // Enable infinite loop
        speed: 500,
        slidesToShow: 4, // Show 4 items at a time
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        prevArrow: null,
        nextArrow: null,
      };
  
    const handleArrowClick = (direction) => {
      if (sliderRef.current) {
        if (direction === 'up') {
          sliderRef.current.slickPrev();
        } else if (direction === 'down') {
          sliderRef.current.slickNext();
        }
      }
    };
  return (
    <>
    <Container>
      <MyCalendar />

      <Row className="mx-0">
        <Col lg={2}>
        <div className="slider-line">
      <img
        className="img-fluid Uparrow"
        src={Up}
        alt=""
        onClick={() => handleArrowClick('up')}
      />
      <Slider ref={sliderRef} {...settings}>
        <div>
          <Circle text="EVENT TYPE NAME HERE" />
        </div>
        <div>
          <Circle text="EVENT TYPE NAME HERE" />
        </div>
        <div>
          <Circle text="EVENT TYPE NAME HERE" />
        </div>
        <div>
          <Circle text="EVENT TYPE NAME HERE" />
        </div>
        <div>
          <Circle text="EVENT TYPE NAME HERE" />
        </div>
        <div>
          <Circle text="EVENT TYPE NAME HERE" />
        </div>
      </Slider>
      <img
        className="img-fluid Downarrow"
        src={Down}
        alt=""
        onClick={() => handleArrowClick('down')}
      />
    </div>
        
          {/* Content for the left sidebar (empty for now) */}
          {/* Replace with your own content */}
        </Col>
        <Col lg={10}>
          <Row>
            <Col lg={4}>
              <div className='card-margin'>
                <Cards dayText="Monday" dateText="01" />
              </div>
              <div className='card-margin'>
                <Cards dayText="Wednesday" dateText="03" />
              </div>
              <div className='card-margin'>
                <Cards dayText="Friday" dateText="05" />
              </div>
            </Col>
            <Col lg={4}>
              <img className="img-fluid" src={Branch} alt="" />
            </Col>
            <Col lg={4}>
              <div className='card-margin'>
                <Cards dayText="Monday" dateText="01" />
              </div>
              <div className='card-margin'>
                <Cards dayText="Wednesday" dateText="03" />
              </div>
              <div className='card-margin'>
                <Cards dayText="Friday" dateText="05" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default Event;
