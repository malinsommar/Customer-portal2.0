import React from "react";
import "../style/MyPortfolio.css";

const RowComponent = ({
  company,
  totalWorth,
  sharesType,
  sharesAmount,
  sharesId,
  ownership,
  votevalue,
}) => {
  return (
    <tr className="bordered">
      <th className="firstCell">{company}</th>
      <th className="cell">{totalWorth} SEK</th>
      <th className="cell">{sharesType}</th>
      <th className="cell">{sharesAmount}</th>
      <th className="cell">{sharesId}</th>
      <th className="cell">{ownership}</th>
      <th className="cell">{votevalue}</th>
      <th>
        <img
          className="icon"
          src="data:image/png;base64,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"
          alt="icon"
        ></img>
      </th>
    </tr>
  );
};
export default RowComponent;
