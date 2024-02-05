import Button from "antd-button-color";
import { Table, Tooltip } from "antd";
import { useState, useEffect } from "react";
import { getData } from "../services/GetData";
import DeadLineState from "./DeadLineState";
import {
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

import "antd-button-color/dist/css/style.css";
import { postData } from "../services/PostData";
import { questionModal, successModal } from "./CustomAlertModal";
import DeadLineModal from "./DeadLineModal";

export default function Deadline() {
  const [deadLines, setDeadLines] = useState([]);

  const syncData = () => {
    getData("http://localhost:8080/deadline/").then((data) => {
      setDeadLines(data);
    });
  };

  const deleteDeadLine = (deadLine) => {
    questionModal("Desea eliminar el registro?", "", "Eliminar", () => {
      postData(
        "http://localhost:8080/deadline/delete?id=" + deadLine.id,
        {}
      ).then((response) => {
        if(response){
        successModal("Registro Eliminado", "Se ha eliminado el registro");
        syncData();
        }else{
          errorModal("Registro No Eliminado", "Se no ha eliminado el registro");
        }
      });
    });
  };

  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState();
 

  const editDeadLine = (deadLine) => {
    setOpen(true);
    setRecord(deadLine);
  };

  const completeDeadLine = (deadLine) => {};

  const columns = [
    {
      title: "ID",
      //    width: 100,
      dataIndex: "key",
      key: "key",
      // fixed: "left",
    },
    {
      title: "Radicado",
      //    width: 100,
      dataIndex: "doc",
      render: (doc) => <p>{doc.docRadicado}</p>,
      key: "doc",
      //  fixed: "left",
    },
    {
      title: "Nombre",
      //    width: 100,
      dataIndex: "doc",
      render: (doc) => <p>{doc.docNombre}</p>,
      key: "doc.nombre",
      //  fixed: "left",
    },
    {
      title: "Date",
      dataIndex: "deadLineDate",
      //    width: 100,
      key: "deadLineDate",
    },

    {
      title: "Estado",
      key: "deadLineDate",
      dataIndex: "deadLineDate",
      // fixed: "right",
      //    width: 100,
      render: (deadLineDate) => <DeadLineState deadLineDate={deadLineDate} />,
    },
    {
      title: "Actions",
      key: "actions",
      // fixed: "right",
      //    width: 100,
      render: (deadLine) => {
        return (
          <>
            <Tooltip placement="top" title="Completar">
              <Button
                type="success"
                onClick={() => {
                  completeDeadLine(deadLine);
                }}
              >
                <CheckCircleOutlined />
              </Button>
            </Tooltip>
            &nbsp;
            <Tooltip placement="top" title="Editar">
              <Button
                type="warning"
                onClick={() => {
                  editDeadLine(deadLine);
                }}
              >
                <EditOutlined />
              </Button>
            </Tooltip>
            &nbsp;
            <Tooltip placement="top" title="Eliminar">
              <Button
                onClick={() => {
                  deleteDeadLine(deadLine);
                }}
                style={{ backgroundColor: "#dc3545", borderColor: "#dc3545" }}
                type="primary"
              >
                <DeleteOutlined />
              </Button>
            </Tooltip>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    syncData();
  }, []);

  return (
    <div>
     
      <Table columns={columns} dataSource={deadLines} />
      <DeadLineModal
          deadLine={record}
          openModal={open}
          setOpenModal={setOpen}
        >
        </DeadLineModal>
    </div>
  );
}
