import React from "react";

const Money = ({ value }) => (
  <span>
    <span style={{ marginRight: 6 }}>R$</span>
    {value}
  </span>
);

export default Money;
