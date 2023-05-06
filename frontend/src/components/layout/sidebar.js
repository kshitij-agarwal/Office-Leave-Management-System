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

  const onSideBarMenuCick = (url) => {
    console.log("in onSideBarMenuCick - ", url);
    navigate(url);
  };

  const sideBarMenu = [
    {
      key: "/",
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
        <div className="new-leave-button">
          <Button icon={<PlusOutlined />}>
            <span className="new-leave-button-text">Add New Leave</span>
          </Button>
        </div>

        <Menu
          defaultSelectedKeys="/"
          items={sideBarMenu}
          onClick={(e) => {
            navigate(e.key);
          }}
        />
      </Sider>

      {/* No Use */}
      {/* <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div> */}
    </>
  );
};

export default Sidebar;
