import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/BounceLoader";
import React from "react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -25px;
`;

export default function Spinner (props) {
    return  <ClimbingBoxLoader
        css={override}
        size={50}
        loading={true}
    />
}
