import React, { useState } from "react";
import { Row, Col, List, Card, Image, Typography } from "antd";
import { ArrowUpOutlined, EyeOutlined } from "@ant-design/icons";

import UserPortfolio from "../Portfolio/UserPortfolio";
import WebsiteOne from "../../Shared/utils/images/website-1.jpeg"
import WebsiteTwo from "../../Shared/utils/images/website-2.jpeg"

import CarouselOne from "../../Shared/utils/images/portfolio-1.png";
import CarouselTwo from "../../Shared/utils/images/portfolio-2.png";
import CarouselThree from "../../Shared/utils/images/portfolio-3.png";
import CarouselFour from "../../Shared/utils/images/portfolio-4.png";
import CarouselFive from "../../Shared/utils/images/portfolio-5.png";
import CarouselSix from "../../Shared/utils/images/portfolio-6.png";
import CarouselSeven from "../../Shared/utils/images/portfolio-7.png";
import CarouselEigth from "../../Shared/utils/images/portfolio-8.png";

const { Text } = Typography



function CategoryScrollContainer() {

    const [popup, togglePopup] = useState(false);

    const CategoryOne = () => {
        return (
            <div className="slider-body">
                <div className="slider-title">
                    <Text style={{ color: "whitesmoke" }} strong>UI/UX</Text>
                </div>
                <div className="container">
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselOne}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselTwo}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselFour}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselThree}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselFive}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselSix}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselSeven}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselEigth}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={WebsiteOne}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={WebsiteTwo}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>


                </div>
                {/* <div className="cat-wrapper">
                <div className="cat-scroll">
                    <List
                        // grid={{ gutter: 2, column: 1 }}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <Card>
                                    <Image
                                        width={200}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                    <Row>
                                        <Col flex="2 0 165px"><Text strong>{item.title}</Text></Col>
                                        <Col flex="auto"><ArrowUpOutlined />{item.upvotes}</Col>

                                    </Row>
                                    <Row>
                                    <Col flex="2 0 165px"><Text mark>{item.subtitle}</Text></Col>
                                    <Col flex="auto"><EyeOutlined />{item.upvotes}</Col>
                                        
                                    </Row>
                                // </Card>
                            </List.Item>
                        )}
                    />
                </div>
            </div> */}
            </div>
        )
    }

    const CategoryTwo = () => {
        return (
            <div className="slider-body">
                <div className="slider-title">
                    <Text style={{ color: "whitesmoke" }} strong>Software Engineering</Text>
                </div>
                {/* </Row> */}
                <div className="container">
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselOne}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselTwo}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselFour}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselThree}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselFive}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselSix}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselSeven}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={CarouselEigth}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={WebsiteOne}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>
                    <div className="item">
                        <Image
                            onClick={() => togglePopup(true)}
                            width={250}
                            height={150}
                            src={WebsiteTwo}
                        />
                        <div className="tooltip-content">
                            {/* <Card> */}
                            <div>
                                <Row>
                                    <Col flex="2 0 120px"><Text strong>Sam Cook</Text></Col>
                                    <Col flex="auto"><ArrowUpOutlined />34</Col>

                                </Row>
                                <Row>
                                    <Col flex="2 0 120px"><Text mark>Thinking Game</Text></Col>
                                    <Col flex="auto"><EyeOutlined />22</Col>
                                </Row>
                            </div>
                            {/* </Card> */}
                        </div>
                    </div>


                </div>
            </div>
        )
    }

    return (
        <>
            <Row>
                <CategoryOne />
                <CategoryTwo />
            </Row>
            <UserPortfolio
                show={popup}
                toggle={togglePopup}
            />
        </>
    );

}

export default CategoryScrollContainer;