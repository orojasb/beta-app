import React from "react";

import { Button,  Table } from "antd";
import { useState, useEffect, useRef } from "react";
import { FileAddFilled } from "@ant-design/icons";
import DeadLineModal from "./DeadLineModal";
import {getData} from "../services/GetData";

export default function Documents() {
  const [documents, setDocuments] = useState([]);
  const [record, setRecord] = useState();
  const columns = [
    {
      title: "Radicado",
      //    width: 100,
      dataIndex: "docRadicado",
      key: "docRadicado",
      // fixed: "left",
    },
    {
      title: "Nombre",
      //    width: 100,
      dataIndex: "docNombre",
      key: "docNombre",
      //  fixed: "left",
      sorter: true,
    },
    {
      title: "Remitente",
      dataIndex: "docRemitente",
      //    width: 100,
      key: "docRemitente",
    },
    {
      title: "Action",
      key: "operation",
      // fixed: "right",
      //    width: 100,
      render: (text, record) => (
        <Button
          key={record.id}
          type="primary"
          onClick={() => {
            showModal(record);
          }}
        >
          {" "}
          <FileAddFilled />{" "}
        </Button>
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  const showModal = (record) => {
    setOpen(true);
    setRecord(record);
  };

  useEffect(() => {
    getData("http://localhost:8080/document/").then((data) => {
        setDocuments(data);
      });
  }, []);

  return (
    <div>
      {documents.map((document) => {<h2> {document.docRadicado}</h2>;})}
      <Table columns={columns} dataSource={documents} />
      {record != null ? (
        <DeadLineModal
          document={record}
          openModal={open}
          setOpenModal={setOpen}
        >
           

        </DeadLineModal>
      ) : (
        ""
      )}
    </div>
  );
}
