import React, { Fragment } from "react";

export default ({ list = [], conjuction = "and", separator = "," }) => (
  <Fragment>
    {list.map((item, index) => (
      <span key={item}>
        {item}
        {list.length === 1
          ? "."
          : index + 2 === list.length
            ? ` ${conjuction} `
            : index + 1 === list.length
              ? "."
              : `${separator} `}
      </span>
    ))}
  </Fragment>
);
