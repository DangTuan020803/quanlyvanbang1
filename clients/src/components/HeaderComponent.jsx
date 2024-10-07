import { Avatar, Button, Input, Space } from "antd";
import { SearchNormal1, Notification } from "iconsax-react";
import React from "react";

const HeaderComponent = () => {
  return (
    <div>
      <div className="p-2 row bg-white">
        <div className="col">
          <Input
            placeholder="Search..."
            style={{ borderRadius: 100 }}
            size="large"
            width="50%"
            prefix={
              <SearchNormal1 className="text-muted " size={22}></SearchNormal1>
            }
          ></Input>
        </div>
        <div className="col text-right">
          <Space>
            <Button type="text" icon={<Notification size={22} />}></Button>
            <Avatar
              src={
                "https://images.unsplash.com/photo-1719937051058-63705ed35502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
              }
              size={40}
            ></Avatar>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
