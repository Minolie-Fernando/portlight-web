import React, { useState } from "react";
import { Row, Carousel, Image, Typography, Button, Col, Card } from "antd";

import CategoryScrollContainer from "./CategoryScroll";
import UserPortfolio from "../Auth/SignUpPopup";
import CarouselOne from "../../Shared/utils/images/portfolio-1.png";
import CarouselTwo from "../../Shared/utils/images/portfolio-2.png";
import CarouselThree from "../../Shared/utils/images/portfolio-3.png";
import CarouselFour from "../../Shared/utils/images/portfolio-4.png";
import CarouselFive from "../../Shared/utils/images/portfolio-5.png";
import CarouselSix from "../../Shared/utils/images/portfolio-6.png";
import CarouselSeven from "../../Shared/utils/images/portfolio-7.png";
import CarouselEigth from "../../Shared/utils/images/portfolio-8.png";



const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const { Title } = Typography;

function FeedContainer() {

    return (
        <div className="feed-wrapper">
            <div className="twp-wrapper body-background-img">
                <div className="inner"></div>
                <div className="body-background">
                    <Row>
                        <Col flex="10">
                            <div className="reader margin-support">
                                <Title style={{ color: "white" }}>Plug in your portfolio</Title>
                                <Title style={{ color: "white", width: 500, whiteSpace: "pre-wrap" }} level={2}>Bring in attention to your portfolios and let sponsors find you</Title>
                                <Button className="pro-btn-b">Sign up</Button>
                            </div>
                        </Col>
                        <Col flex="auto">
                            <div className="feed-image-container">
                                <Card>
                                    <Carousel autoplay>
                                        <div className="slider-item-div">
                                            <Image
                                                width={750}
                                                height={450}
                                                preview={false}
                                                src={CarouselOne}
                                            />
                                        </div>
                                        <div className="slider-item-div">
                                            <Image
                                                width={750}
                                                height={450}
                                                preview={false}
                                                src={CarouselTwo}
                                            />
                                        </div>
                                        <div className="slider-item-div">
                                            <Image
                                                width={750}
                                                height={450}
                                                preview={false}
                                                src={CarouselThree}
                                            />
                                        </div>
                                        <div className="slider-item-div">
                                            <Image
                                                width={750}
                                                height={450}
                                                preview={false}
                                                src={CarouselFour}
                                            />
                                        </div>
                                        <div className="slider-item-div">
                                            <Image
                                                width={750}
                                                height={450}
                                                preview={false}
                                                src={CarouselFive}
                                            />
                                        </div>
                                        <div className="slider-item-div">
                                            <Image
                                                width={750}
                                                height={450}
                                                preview={false}
                                                src={CarouselSix}
                                            />
                                        </div>
                                        <div className="slider-item-div">
                                            <Image
                                                width={750}
                                                height={450}
                                                preview={false}
                                                src={CarouselSeven}
                                            />
                                        </div>
                                        <div className="slider-item-div">
                                            <Image
                                                width={750}
                                                height={450}
                                                preview={false}
                                                src={CarouselEigth}
                                            />
                                        </div>
                                    </Carousel>
                                    {/* <Image
                                        width={750}
                                        height={450}
                                        preview={false}
                                        src={CarouselOne}
                                    /> */}
                                </Card>
                            </div>
                        </Col>
                    </Row>

                </div>
                <div className="inner"></div>
                <div className="inner"></div>
                <div className="inner"></div>
                <div className="inner"></div>
                <Row className="reader">
                    <CategoryScrollContainer />
                </Row>
            </div>

        </div>
    );

}

export default FeedContainer;