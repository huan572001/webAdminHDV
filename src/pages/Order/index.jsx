import { Tabs } from 'antd';
import React from 'react';
import Ordered from './Ordered';
const index = () => {
  return (
    <>
      <Tabs>
        <Tabs.TabPane tab="Đã xác nhận" key="1">
          <Ordered />
        </Tabs.TabPane>
        {/* <Tabs.TabPane tab="MENTOR CHỜ DUYỆT" key="2">
      <MentorPending />
    </Tabs.TabPane> */}
        <Tabs.TabPane tab="Chờ duyệt" key="3">
          {/* <User role={5} reload={reLoad} /> */}
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default index;
