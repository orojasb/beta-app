import React from 'react'
import dayjs from "dayjs";
import { Tag } from 'antd';

export default function DeadLineState({deadLineDate}) {
    const date1 = dayjs(deadLineDate);

    let color = "green";
    let text = "A Tiempo";
    let diff = date1.diff(dayjs(), "day");
    if (diff < 3 && diff > 0) {
      text = "Por Vencer";
      color = "geekblue";
    } else if (diff <= 0 || isNaN(diff)) {
      text = "Vencido";
      color = "red";
    }
    return (
      <Tag color={color} key={text}>
        {text.toUpperCase()}
      </Tag>
    );
}

