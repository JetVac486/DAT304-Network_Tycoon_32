import React, { Component, useState, useEffect } from "react";
import './Slider.css';
import $ from 'jquery';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {FaChevronLeft } from "react-icons/fa";
import {FaChevronRight } from "react-icons/fa";
import {thisrouter, thiscables, thisswitch, thisaccesspoint, thisups, thisskap, thisfans, thisslukker, thiscloud, thissecurity, thisisp, thisfirewall } from '../Components/Cart';

export class Responsive extends Component {
    
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
                        <img src={thisrouter.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thisrouter.title}</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={thiscables.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thiscables.title}</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={thisswitch.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thisswitch.title}</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={thisaccesspoint.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thisaccesspoint.title}</p>
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
};

export class Service extends Component {
    
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
                <h2 className="txt2"> Services</h2>
                <Slider {...settings}>
                    <div className="box">
                        <img src={thiscloud.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thiscloud.title}</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={thissecurity.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thissecurity.title}</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={thisisp.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thisisp.title}</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={thisfirewall.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thisfirewall.title}</p>
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

export class Environmental extends Component {
    
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
                <h2 className="txt2"> Services</h2>
                <Slider {...settings}>
                    <div className="box">
                        <img src={thisups.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thisups.title}</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={thisskap.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thisskap.title}</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={thisfans.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thisfans.title}</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={thisslukker.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thisslukker.title}</p>
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
