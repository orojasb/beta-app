import React, { useState } from "react";
import { Form, Modal, DatePicker } from "antd";

import dayjs from "dayjs";
import { postData } from "../services/PostData";
import { errorModal } from "./CustomAlertModal";

export default function DeadLineModal({
  document,
  deadLine,
  openModal,
  setOpenModal,
}) {
  const [form] = Form.useForm();
  let dateD = null;

  const [confirmLoading, setConfirmLoading] = useState(false);

  const onChange = (date, dateString) => {
    dateD = dayjs(dateString).add(1, "day").format("YYYY-MM-DD");
  };

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const handleOk = () => {
    setConfirmLoading(true);
    console.log(dateD);
    if (dateD == null || dateD == "") {
      errorModal("","Ingrese una fecha");
      setConfirmLoading(false);
      return;
    }
    let data = deadLine
      ? {
          ...deadLine,
          deadLineDate: dateD,
          activeRecord: true,
        }
      : {
          doc: document,
          deadLineDate: dateD,
          isComplete: false,
          activeRecord: true,
        };
    postData("http://localhost:8080/deadline/", data).then((response) => {
      console.log(JSON.stringify(response));
    });

    setOpenModal(false);
    setConfirmLoading(false);
    form.resetFields();
  };

  const handleCancel = () => {
    setOpenModal(false);
    form.resetFields();
  };

  console.log(JSON.stringify(document));
  return (
    <Form
      form={form}
      name="advanced_assessment_form"
      className="ant-advanced-search-form"
      initialValues={{ field: deadLine ? dayjs(deadLine.deadLineDate) : "" }}
    >
      <Form.Item
        name="field"
        rules={[
          {
            required: true,
            message: "Input something!",
          },
        ]}
      >
        <Modal
          title="Title"
          open={openModal}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>
            {" "}
            Elija la fecha limite de plazo para dar respuesta a este registro
          </p>
          <DatePicker
            format="YYYY-MM-DD"
            disabledDate={disabledDate}
            onChange={onChange}
            required
          />
        </Modal>
      </Form.Item>
    </Form>
  );
}
