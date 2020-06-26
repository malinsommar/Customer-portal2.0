import React, { useState } from "react";
import HeaderComponent from "../components/Header";
import CardComponent from "../components/CardComponent";
import RowComponent from "../components/RowComponent";
import DropdownButton from "../components/DropdownButton";
import ButtonComponent from "../components/Button";
import "../style/MyPortfolio.css";
import "../style/DropDown.css";

const shares = [
  ["Volvo", "40000", "B", "500", "530-2452", "0.5%", "0.5%"],
  ["Saab", "30000", "A", "1000", "350-2362", "0.6%", "0.6%"],
  ["Volvo", "40000", "B", "500", "530-2452", "0.5%", "0.5%"],
  ["Saab", "30000", "A", "1000", "350-2362", "0.6%", "0.6%"],
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
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

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
        <DropdownButton id="dropdownButton" title="10" />

        <p id="pagesShown">Visar 1-10 av {shares.length}</p>
      </div>
    </div>
  );
};

/*

const showDropDown = () => {
  document.getElementById("myDropdown").classList.toggle("show");

  <div className="dropdown">
              <button onclick={showDropDown} class="dropbtn">
                Dropdown
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="/home">Link 1</a>
                <a href="/home">Link 2</a>
                <a href="/home">Link 3</a>
              </div>
            </div>

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
*/

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
