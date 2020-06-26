import React, { Component, useState } from "react";
import HeaderComponent from "../components/Header";
import CardComponent from "../components/CardComponent";
import RowComponent from "../components/RowComponent";
import DropdownButton from "../components/DropdownButton";
import ButtonComponent from "../components/Button";
import Pagination from "pagination-react-hooks";
import "../style/MyPortfolio.css";
import "../style/DropDown.css";

const shares = [
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-2452",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1722",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-1539",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "834-1221",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-2432",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1222",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-1529",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "834-1111",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-2459",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1799",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-1234",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "834-1121",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-2112",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1712",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-3539",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "134-1221",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-3452",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1712",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-1449",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "834-1131",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-2452",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1722",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-1539",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "834-1221",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-2432",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1222",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-1529",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "834-1111",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-2459",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1799",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-1234",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "834-1121",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-2112",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1712",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-3539",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "134-1221",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-3452",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1712",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-1449",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "834-1131",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-2452",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1722",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-1539",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "834-1221",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-2432",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1222",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-1529",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "834-1111",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-2459",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1799",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-1234",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "834-1121",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-2112",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1712",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-3539",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "134-1221",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Volvo",
    sharesValue: "80000",
    sharesType: "B",
    sharesAmount: "500",
    sharesNumber: "530-3452",
    ownership: "0.02%",
    votevalue: "0.02%",
  },
  {
    company: "Saab",
    sharesValue: "40000",
    sharesType: "A",
    sharesAmount: "200",
    sharesNumber: "234-1712",
    ownership: "0.01%",
    votevalue: "0.01%",
  },
  {
    company: "Audi",
    sharesValue: "100000",
    sharesType: "D",
    sharesAmount: "1200",
    sharesNumber: "312-1449",
    ownership: "0.04%",
    votevalue: "0.04%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "834-1131",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
  {
    company: "Tesla",
    sharesValue: "70000",
    sharesType: "B",
    sharesAmount: "340",
    sharesNumber: "834-1131",
    ownership: "0.09%",
    votevalue: "0.09%",
  },
];

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

  const jump = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(maxPage);
  };

  const renderButtons = () => {
    let i = 1;
    let y = 0;
    return shares.map((item, index) => {
      if (y < itemsPerPage) {
        console.log("if");
        y++;
      } else {
        console.log("else");

        y = 0;
        i++;
        return (
          <ButtonComponent
            key={index}
            title={i}
            className="portfolioButtons"
            isClicked={() => jump(i)}
          />
        );
      }
    });
  };
  const itemsShown = () => {
    if (currentPage === maxPage || itemsPerPage > shares.length) {
      return shares.length + " ";
    } else return currentPage * itemsPerPage + " ";
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
          <ButtonComponent
            key={1}
            title={1}
            className="portfolioButtons"
            isClicked={() => jump(1)}
          />
          {renderButtons()}
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
