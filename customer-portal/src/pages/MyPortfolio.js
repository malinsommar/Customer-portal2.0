import React, { useState } from "react";
import HeaderComponent from "../components/Header";
import CardComponent from "../components/CardComponent";
import RowComponent from "../components/RowComponent";
import DropdownButton from "../components/DropdownButton";
import ButtonComponent from "../components/Button";
import "../style/MyPortfolio.css";
import "../style/DropDown.css";
import shares from "../shares";

const MyPortfolioChild = () => {
  const [itemsPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [dropDownTitle, setdropDownTitle] = useState(10);

  const maxPage = Math.ceil(shares.length / itemsPerPage);

  const setPageCount10 = () => {
    setItemPerPage(10);
    setdropDownTitle(10);
    setCurrentPage(1);
  };

  const setPageCount30 = () => {
    setItemPerPage(30);
    setdropDownTitle(30);
    setCurrentPage(1);
  };

  const setPageCount50 = () => {
    setItemPerPage(50);
    setdropDownTitle(50);
    setCurrentPage(1);
  };

  const setPageCount100 = () => {
    setItemPerPage(100);
    setdropDownTitle(100);
    setCurrentPage(1);
  };

  const setPageCountAll = () => {
    setItemPerPage(shares.length);
    setdropDownTitle("All");
    setCurrentPage(1);
  };

  const renderShares = () => {
    return shares.map((item, index) => {
      if (
        index > currentPage * itemsPerPage - itemsPerPage - 1 &&
        index < currentPage * itemsPerPage
      ) {
        return (
          <RowComponent
            key={index}
            company={item.company}
            totalWorth={item.sharesValue}
            sharesType={item.sharesType}
            sharesAmount={item.sharesAmount}
            sharesId={item.sharesNumber}
            ownership={item.ownership}
            votevalue={item.votevalue}
          />
        );
      }
    });
  };

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(maxPage);
  };

  const itemsShown = () => {
    if (currentPage === maxPage || itemsPerPage > shares.length) {
      return shares.length + " ";
    } else return currentPage * itemsPerPage + " ";
  };

  const pagesShown = () => {
    return "  " + currentPage + " av " + maxPage + "  ";
  };

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
            {renderShares()}
          </tbody>
        </table>
      </div>

      <div id="pageInfo">
        <div id="choosePage">
          <ButtonComponent
            title="<<"
            className="portfolioButtons"
            isClicked={firstPage}
          />
          <ButtonComponent
            title="<"
            className="portfolioButtons"
            isClicked={prev}
          />
          {pagesShown()}
          <ButtonComponent
            title=">"
            className="portfolioButtons"
            isClicked={next}
          />
          <ButtonComponent
            title=">>"
            className="portfolioButtons"
            isClicked={lastPage}
          />
        </div>{" "}
        <DropdownButton
          id="dropdownButton"
          title={dropDownTitle}
          on10={setPageCount10}
          on30={setPageCount30}
          on50={setPageCount50}
          on100={setPageCount100}
          onAll={setPageCountAll}
        />
        <p id="pagesShown">
          Visar {currentPage * itemsPerPage - itemsPerPage + 1}-{itemsShown()}
          av {shares.length}
        </p>
      </div>
    </div>
  );
};

const MyPortfolio = () => {
  return (
    <div className="page">
      <p className="myPortfolioTag">Min portfölj</p>
      <p id="lastUpdatedTag">| Senast uppdaterat 2020-05-23</p>
      <div className="myPortfolioCard">
        <CardComponent children={MyPortfolioChild()} />
      </div>
    </div>
  );
};

export default MyPortfolio;
