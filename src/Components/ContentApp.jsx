import React from "react";

import { Table } from "antd";


const columns = [
  {
    title: "Full Name",
    //width: 100,
    dataIndex: "name",
    key: "name",
   // fixed: "left",
  },
  {
    title: "Age",
  //  width: 100,
    dataIndex: "age",
    key: "age",
  //  fixed: "left",
    sorter: true,
  },
  { title: "Column 1", dataIndex: "address", key: "1" },
  { title: "Column 2", dataIndex: "address", key: "2" },
  { title: "Column 3", dataIndex: "address", key: "3" },
  { title: "Column 4", dataIndex: "address", key: "4" },
  { title: "Column 5", dataIndex: "address", key: "5" },
  { title: "Column 6", dataIndex: "address", key: "6" },
  { title: "Column 7", dataIndex: "address", key: "7" },
  { title: "Column 8", dataIndex: "address", key: "8" },
  {
    title: "Action",
    key: "operation",
   // fixed: "right",
   // width: 100,
    render: () => <a>action</a>,
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 40,
    address: "London Park",
  }, {
    key: "121",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "2312",
    name: "Jim Green",
    age: 40,
    address: "London Park",
  }, {
    key: "1344",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "2343224",
    name: "Jim Green",
    age: 40,
    address: "London Park",
  }, {
    key: "13434",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "3432",
    name: "Jim Green",
    age: 40,
    address: "London Park",
  }, {
    key: "1343",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "23434",
    name: "Jim Green",
    age: 40,
    address: "London Park",
  }, {
    key: "1232",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "25234",
    name: "Jim Green",
    age: 40,
    address: "London Park",
  },
];

export default function ContentApp() {
  return (
    <div>
      <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
    </div>
  );
}
