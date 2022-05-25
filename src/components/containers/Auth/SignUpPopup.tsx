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

const { Text } = Typography

interface UserPortfolio {
    show: boolean;
    toggle: (visible: boolean) => void
}

const SignUpPopup = (props: UserPortfolio) => {

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
            width={500}
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
                    <h2>JOIUN UYS</h2>
                </Row>
            </div>
        </Modal>
    );
}

export default SignUpPopup;