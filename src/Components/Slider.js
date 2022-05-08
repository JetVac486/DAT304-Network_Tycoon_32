import React, { Component, useState, useEffect } from "react";
import './Slider.css';
import $ from 'jquery';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {FaChevronLeft } from "react-icons/fa";
import {FaChevronRight } from "react-icons/fa";
import {thisrouter, thiscables, thisswitch, thisskap, thisslukker, thisaggregat, thiscloud, thissecurity, thisisp } from '../Components/Cart';

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
                        <img src={thisskap.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thisskap.title}</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={thisslukker.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thisslukker.title}</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={thisaggregat.img} alt="" />
                        <div className="cards_body">
                            <p className="txt">{thisaggregat.title}</p>
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

/* 
<ul>
    {thiscart.map((item, index) => {
        <div>
            <img src="https://media.4rgos.it/i/Argos/5728882_R_Z001A?w=750&h=440&qlt=70" alt="" />
            <div className="cards_body">
                <p className="txt">Router</p>
            </div>
        </div>
    }} 
</ul>

 <img src={thiscart.img} alt="" />
            <div className="cards_body">
                <p className="txt">{thiscart.title}</p>
            </div>

thiscart[0].forEach(element => {
                element.incudes('title')
                if (element.title.includes('Router')) {
                    return(
                        <>
                            <img src={thiscart[0][0].img} alt="" />
                            <div className="cards_body">
                                <p className="txt" >{thiscart[0][0].title}</p>
                            </div>
                        </>
                    ) 
                }

function Router_slider () {
            if (thiscart[0][0].title.includes('Router')) {
                return(
                    <>
                        <img src={thiscart[0][0].img} alt="" />
                        <div className="cards_body">
                            <p className="txt" >{thiscart[0][0].title}</p>
                        </div>
                    </>
                )
            }  
            else {
                return(
                    <>
                        <img src="https://media.4rgos.it/i/Argos/5728882_R_Z001A?w=750&h=440&qlt=70" alt="" />
                        <div className="cards_body">
                            <p className="txt">Router</p>
                        </div>
                    </>
                )
            }
        }


function UpdateSlider () {
            const [show,setShow] = useState(false);
            const visability = () => {
                if(thisrouter.length > 0) {
                    return(
                        <div>
                            <img src={thisrouter.img} alt="" />
                            <div className="cards_body">
                                <p className="txt">{thisrouter.title}</p>
                            </div>
                        </div>
                    )
                }
                else if (thisrouter.length == null) {
                    return(
                        <div>
                            <img src="https://media.4rgos.it/i/Argos/5728882_R_Z001A?w=750&h=440&qlt=70" alt="" />
                            <div className="cards_body">
                                <p className="txt">Router</p>
                            </div>
                        </div>
                    )
                }
                else {
                    return null;
                }
            };
            useEffect(() => {
                visability();
            }, [])
        }
*/