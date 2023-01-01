import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className}  onClick={onClick}>
      <img
        style={{ width: "50px" }}
        src="../Images/white-arrow.png" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img
        style={{ width: "50px", rotate: "180deg" }}
        src="../Images/white-arrow.png" />
    </div>
  );
}

export default class About extends Component {
  static displayName = About.name;


  render() {

    var settings = {
      className: "center",
      centerMode: true,
      centerPadding: "5px",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:2,
      //slidesToScroll: 5,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            //slidesToScroll: 3,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            //slidesToScroll: 2,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            //slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };

    return (
      <div className='about-block'>
        <h1>About Us</h1>
        <p>We're not just a gym with the latest equipment and best fitness trainer,
          we also provide you with various classes that will help you achieve your fitness goals.
        </p>
        <div class="card-container">
        <Slider {...settings}>
            <div class="containerCard">
              <img src="../Images/Img01.jpg" alt="Avatar" class="image" />
              <div class="middle">
                <div class="text">
                  <h5>Family Fun</h5>
                  We have programs for Family memebers together to put some motivation in the proccess.
                </div>
              </div>
            </div>
            <div class="containerCard">
              <img src="../Images/Img02.jpg" alt="Avatar" class="image" />
              <div class="middle">
                <div class="text" style={{ color: "rgb(170, 95, 255)"}}>
                  <h5>True Expertise</h5>
                  Our trainers are highly qualified and elites of this field.
                </div>
              </div>
            </div>
            <div class="containerCard">
              <img src="../Images/Img03.png" alt="Avatar" class="image" />
              <div class="middle">
                <div class="text" style={{ color: "orange"}}>
                  <h5>Body Transformation</h5>
                  Helping achieve your weight loss and muscle gain goals.
                </div>
              </div>
            </div>
            <div class="containerCard">
              <img src="../Images/Img04.png" alt="Avatar" class="image" />
              <div class="middle">
                <div class="text" style={{ color: "rgb(47, 255, 47)"}}>
                  <h5>Flexible Memeberships</h5>
                  Offering you various packages that suits you best.
                </div>
              </div>
            </div>          
        </Slider>
        </div>
      </div >
    );
  }
}