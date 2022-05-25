import React from "react";
import {
    Row,
    Col,
    Modal,
    Typography,
    Tag,
    Statistic,
    Image
} from "antd";
import { ArrowUpOutlined, EyeOutlined, SaveOutlined, LikeOutlined } from "@ant-design/icons";
import WebsiteOne from "../../Shared/utils/images/website-1.jpeg"
import WebsiteTwo from "../../Shared/utils/images/website-2.jpeg"

const { Text } = Typography

interface UserPortfolio {
    show: boolean;
    toggle: (visible: boolean) => void
}

const UserPortfolio = (props: UserPortfolio) => {

    const { show, toggle } = props;

    const SiteStats = () => {
        return (
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Active Users" value={112893} />
                </Col>
                <Col span={12}>
                    <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />

                </Col>
            </Row>
        )
    }
    return (
        <Modal
            visible={show}
            onCancel={() => toggle(false)}
            footer={null}
            width={1080}
            title={<><h2 className="section-heading">Sam Goode</h2><Text mark><a href="http://hirepaladin.com" target="_blank" rel="noreferrer">Thinking Room</a></Text></>}
            bodyStyle={{
                backgroundColor: "white"
            }}
        //closeIcon={}
        >
            <div style={{
                maxWidth: 1000,
                width: "100%",
                margin: "auto"
            }}>
                <Row>

                    <Col flex="2 0 165px">
                        <Tag color="magenta">Software</Tag>
                        <Tag color="red">IT</Tag>
                        <Tag color="volcano">OhTech</Tag>
                    </Col>
                    <Col flex="40px"><ArrowUpOutlined />34</Col>
                    <Col flex="40px"><EyeOutlined />22</Col>
                    <Col flex="40px"><SaveOutlined /></Col>

                </Row>
                <Row align="middle">
                    <div style={{margin: 10, alignItems: "center"}}>
                        <Image
                            // onClick={() => togglePopup(true)}
                            preview={false}
                            width="100%"
                            height={600}
                            src={WebsiteOne}
                        />
                    </div>
                </Row>
                <Row align="middle" justify="center">
                    <SiteStats />
                </Row>
            </div>
        </Modal>
    );
}

export default UserPortfolio;