import React, { useEffect, useState, useRef } from "react";
import firebase from "firebase";
import { db } from "./Firebase";
import {
  Layout,
  Menu,
  Button,
  Input,
  Drawer,
  Form,
  Radio,
  Col,
  Row,
  Select,
  DatePicker,
  Tag,
} from "antd";
import {
  DownOutlined,
  AlignCenterOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { GiStethoscope, GiWeightLiftingUp } from "react-icons/gi";
import { MdFitnessCenter, MdChat } from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";

import "./Sider.css";
import Table from "./Table";

const { Option } = Select;
const { Header, Content, Footer, Sider } = Layout;
const SiderMenu = () => {
  const formRef = useRef();
  const [collapsed, setCollapsed] = useState(true);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [rehab, setRehab] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [form] = Form.useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users").add({
      name,
      email,
      age,
      rehab,
      sex,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
    });
    formRef.current.resetFields();
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsed={collapsed}
          onCollapse={(e) => setCollapsed(true)}
          style={{ backgroundColor: "white" }}
        >
          <div className="logo" />
          <Menu
            theme="light"
            defaultSelectedKeys="none"
            mode="inline"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              padding: "1em 0em",
            }}
          >
            <Menu.Item
              key="1"
              icon={
                <AlignCenterOutlined
                  className="menu_icon"
                  style={{ fontSize: "25px", color: "gray" }}
                />
              }
              style={{ margin: "1em 0em" }}
            >
              Home
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={
                <GiStethoscope
                  className="menu_icon"
                  style={{ fontSize: "25px", color: "gray" }}
                />
              }
              style={{ margin: "1em 0em" }}
            >
              Consult
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={
                <MdFitnessCenter
                  className="menu_icon"
                  style={{ fontSize: "25px", color: "gray" }}
                />
              }
              style={{ margin: "1em 0em" }}
            >
              Fitness
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={
                <GiWeightLiftingUp
                  className="menu_icon"
                  style={{ fontSize: "25px", color: "gray" }}
                  style={{ fontSize: "25px", color: "gray" }}
                />
              }
              style={{ margin: "1em 0em" }}
            >
              Diet
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={
                <MdChat
                  className="menu_icon"
                  style={{ fontSize: "25px", color: "gray" }}
                />
              }
              style={{ margin: "1em 0em" }}
            >
              Contact us
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={
                <BsPeopleCircle
                  className="menu_icon"
                  style={{ fontSize: "25px", color: "gray" }}
                />
              }
              style={{ margin: "1em 0em" }}
            >
              About us
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout"
            style={{
              padding: "0.5em",
              backgroundColor: "white",
              height: "auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="header_left">
              <h1 className="header_heading">My Patients</h1>
            </div>
            <div className="header_right">
              <Input
                type="text"
                className="header_input"
                prefix={
                  <SearchOutlined style={{ fontSize: "20px", color: "gray" }} />
                }
              />
              <Button className="header_patient">
                All Patients
                <DownOutlined />
              </Button>

              <Button
                className="header_Button"
                onClick={(e) => setVisible(true)}
              >
                New Patient
              </Button>
              <Drawer
                width={500}
                onClose={(e) => setVisible(false)}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
              >
                <h2 style={{ fontWeight: "700", color: "rgb(66, 133, 244)" }}>
                  Add New Patient
                </h2>
                <br />
                <Form layout="vertical" onSubmit={handleSubmit} ref={formRef}>
                  <Row>
                    <Form.Item
                      name="name"
                      label="Patient Name"
                      rules={[{ required: true, message: "Please enter name" }]}
                    >
                      <Input
                        placeholder="Please enter user name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Item>
                  </Row>

                  <Row>
                    <Form.Item
                      name="radio-group"
                      label="Sex"
                      onChange={(e) => setSex(e.target.value)}
                    >
                      <Radio.Group
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                      >
                        <Radio value="Male">Male</Radio>
                        <Radio value="Female">Female</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item
                      name="age"
                      label="Age"
                      rules={[{ required: true, message: "" }]}
                    >
                      <Input
                        placeholder="Please enter your age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </Form.Item>
                  </Row>

                  <Row>
                    <Form.Item
                      name={["user", "email"]}
                      label="Email ID"
                      rules={[
                        {
                          type: "email",
                        },
                      ]}
                    >
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Item>
                  </Row>

                  <Row>
                    <Form.Item
                      name="date-picker"
                      label="First Appointment Date"
                    >
                      <DatePicker value={date} />
                    </Form.Item>
                  </Row>
                  <Row>
                    <Form.Item
                      name="rehab"
                      label="Add Rehab Center"
                      rules={[{ required: true, message: "" }]}
                      value={rehab}
                      onChange={(e) => setRehab(e.target.value)}
                    >
                      <Select
                        mode="multiple"
                        value={rehab}
                        onChange={(value) => setRehab({ rehab: value })}
                      >
                        <Option value="Leg Rehab Combo">
                          <Tag
                            color="#9370DB"
                            style={{
                              padding: "0em 1em ",
                              textAlign: "center",
                              borderRadius: "10px",
                              fontSize: "14px",
                            }}
                          >
                            Leg Rehab Combo
                          </Tag>
                        </Option>
                      </Select>
                    </Form.Item>
                  </Row>

                  <Button
                    onClick={handleSubmit}
                    type="primary"
                    disabled={!name || !sex || !age || !email || !rehab}
                  >
                    Save
                  </Button>
                </Form>
              </Drawer>
            </div>
          </Header>
          <div
            className="list"
            style={{
              display: "flex",
              width: "100%",
              backgroundColor: "#fff",
              marginTop: "-1em",
              fontSize: "14px",
              fontWeight: "500",
              color: "gray",
            }}
          >
            <p
              style={{
                marginLeft: "15em",
                textAlign: "center",
                marginTop: "1em",
              }}
            >
              Name
            </p>
            <p
              style={{
                marginLeft: "15em",
                textAlign: "center",
                marginTop: "1em",
              }}
            >
              Sex
            </p>
            <p
              style={{
                marginLeft: "13em",
                textAlign: "center",
                marginTop: "1em",
              }}
            >
              Last Visit
            </p>
            <p
              style={{
                marginLeft: "15em",
                textAlign: "center",
                marginTop: "1em",
              }}
            >
              Rehab
            </p>
          </div>
          <Content style={{ margin: "0 16px" }}>
            <Table />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default SiderMenu;
