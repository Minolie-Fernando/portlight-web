import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Button } from "antd"

const { Content, Sider } = Layout;

interface BodyProps {
  children?: any;
}

function Header(props: BodyProps) {

  return (
    <Layout className="body">
      <div className="pro-header">
        <Row className="pro-wrapper" align="middle">
          <Col span={6}>
          <div className="logo">
            <Link to="/">
              <img src="/assets/name-brand-2.png" width={200} alt="Logo" />
            </Link>
          </div>
          </Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col span={6}>
          <div style={{ paddingLeft: "8em" }}>
            <Button  className="pro-btn-a">Become a Sponsor </Button>
            {/* <Button  className="pro-btn-b">Sign Up</Button> */}
          </div>
          </Col>
        </Row>
      </div>
      <Content className="twp-body">
        <div className="inner" />
        {props.children}
      </Content>
    </Layout>
  )
}

export default Header;
