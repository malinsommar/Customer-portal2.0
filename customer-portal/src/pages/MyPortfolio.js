import React from "react";
import HeaderComponent from "../components/Header";
import CardComponent from "../components/CardComponent";
import RowComponent from "../components/RowComponent";
import ButtonComponent from "../components/Button";
import "../style/MyPortfolio.css";

const shares = [
  ["Volvo", "40000", "B", "500", "530-2452", "0.5%", "0.5%"],
  ["Saab", "30000", "A", "1000", "350-2362", "0.6%", "0.6%"],
];

const getAllShares = () => {
  return shares.map((item) => {
    return (
      <RowComponent
        company={item[0]}
        totalWorth={item[1]}
        sharesType={item[2]}
        sharesAmount={item[3]}
        sharesId={item[4]}
        ownership={item[5]}
        votevalue={item[6]}
      />
    );
  });
};

const MyPortfolioChild = () => {
  return (
    <div>
      <HeaderComponent />
      <br />
      <div id="tableDiv">
        <table>
          <tbody>
            <tr className="bordered">
              <th className="firstTopCell">Företag</th>
              <th className="topCell">Inehav</th>
              <th className="topCell">Aktetyp</th>
              <th className="topCell">Antal Aktier</th>
              <th className="topCell">Aktienummer</th>
              <th className="topCell">Ägaredel</th>
              <th className="topCell">Röstvärde</th>
            </tr>
            {getAllShares()}
          </tbody>
        </table>
      </div>
      <div id="pageInfo">
        <div id="choosePage">
          <ButtonComponent title="<<" className="portfolioButtons" />
          <ButtonComponent title="<" className="portfolioButtons" />
          <ButtonComponent title="1" className="portfolioButtons" />
          <ButtonComponent title="2" className="portfolioButtons" />
          <ButtonComponent title="3" className="portfolioButtons" />
          <ButtonComponent title="4" className="portfolioButtons" />
          <ButtonComponent title="5" className="portfolioButtons" />
          <ButtonComponent title=".." className="portfolioButtons" />
          <ButtonComponent title=">" className="portfolioButtons" />
          <ButtonComponent title=">>" className="portfolioButtons" />
        </div>
      </div>
    </div>
  );
};

const MyPortfolio = () => {
  return (
    <div className="page">
      <p className="myPortfolioTag">Min portfölj</p>
      <p id="lastUpdatedTag">| Senast uppdaterat 2020-02-26</p>
      <div className="myPortfolioCard">
        <CardComponent children={MyPortfolioChild()} />
      </div>
    </div>
  );
};

export default MyPortfolio;
