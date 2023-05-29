import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Layout, Menu, theme } from "antd";

import {
  ProfileOutlined,
  CalendarOutlined,
  TeamOutlined,
  SecurityScanOutlined,
  NotificationOutlined,
  UserOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import "./sidebar.scss";

const { Header, Content, Sider } = Layout;

const Sidebar = () => {
  let navigate = useNavigate();

  // const onSideBarMenuCick = (url) => {
  //   console.log("in onSideBarMenuCick - ", url);
  //   navigate(url);
  // };

  const sideBarMenu = [
    {
      key: "/dashboard",
      icon: <ProfileOutlined />,
      label: "Dashboard",
      // onClick: onSideBarMenuCick("/"),
    },
    {
      key: "/leaves",
      icon: <CalendarOutlined />,
      label: "My Leaves",
      // onClick: onSideBarMenuCick("/leaves"),
    },
    {
      key: "/team",
      icon: <TeamOutlined />,
      label: "Team",
      // onClick: onSideBarMenuCick("/team"),
    },
    {
      key: "/leave/policy",
      icon: <SecurityScanOutlined />,
      label: "Leave Policy",
      // onClick: onSideBarMenuCick("/leave/policy"),
    },
  ];

  return (
    <>
      <Sider theme="light" className="olms-sidebar">
        <div className="new-leave-button-div">
          <Button
            icon={<PlusOutlined />}
            className="new-leave-button"
            onClick={() => {
              navigate("/leaves");
            }}
          >
            <span className="new-leave-button-text">Add New Leave</span>
          </Button>
        </div>

        <Menu
          className="sidebar-menu"
          defaultSelectedKeys="/"
          items={sideBarMenu}
          onClick={(e) => {
            navigate(e.key);
          }}
        />
      </Sider>
    </>
  );
};

export default Sidebar;
