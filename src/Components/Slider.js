import React, { Component } from "react";
import './Slider.css';
import $ from 'jquery';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {FaChevronLeft } from "react-icons/fa";
import {FaChevronRight } from "react-icons/fa";

export default class Responsive extends Component {
    
    render() {
        const settings = {
            dots: true,
            arrows: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            focusOnSelect: true,
            prevArrow: <FaChevronLeft/>,
            nextArrow: <FaChevronRight/>,
        };
        return (
            <div className="testings">
                <h2 className="txt2"> Components</h2>
                <Slider {...settings}>
                    <div className="box">
                        <img src="https://media.4rgos.it/i/Argos/5728882_R_Z001A?w=750&h=440&qlt=70" alt="" />
                        <div className="cards_body">
                            <p className="txt">Router</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://newattitude.no/wp-content/uploads/2017/06/network-cables-494645_1280_web.jpg" alt="" />
                        <div className="cards_body">
                            <p className="txt">Cables</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://img.prisguiden.no/2971/2971265/original.1024x422!m.jpg" alt="" />
                        <div className="cards_body">
                            <p className="txt">Switch</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://m.media-amazon.com/images/I/41KxiEtu+5S._AC_SL1200_.jpg" alt="" />
                        <div className="cards_body">
                            <p className="txt">Accsesspoint</p>
                        </div>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                        
                    </div>
                </Slider>
            </div>
        );
    }
}
// https://react-slick.neostack.com/docs/example/multiple-items