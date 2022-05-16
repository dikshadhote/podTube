import React from "react";
import { useParams } from "react-router-dom";
export default function SingleVideo() {
  let { videoid } = useParams();
  return (
    <div className="grid-layout-singlev">
      <div></div>
      <div></div>
    </div>
  );
}
