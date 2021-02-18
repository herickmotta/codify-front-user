import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Colors from "../../config/colors";

export default function Spinner({ color }) {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: color || Colors.white,
      }}
      spin
    />
  );
  return <Spin indicator={antIcon} />;
}
