import React from "react";
import Pagination from "pagination-react-hooks";

const PaginationList = (itemPerPage) => {
  const posts = [
    { id: "1", name: "Berat 1" },
    { id: "2", name: "Berat 2" },
    { id: "3", name: "Berat 3" },
    { id: "4", name: "Berat 4" },
    { id: "5", name: "Berat 5" },
    { id: "6", name: "Berat 6" },
    { id: "7", name: "Berat 7" },
    { id: "8", name: "Berat 8" },
    { id: "9", name: "Berat 9" },
    { id: "10", name: "Berat 10" },
    { id: "11", name: "Berat 11" },
    { id: "12", name: "Berat 12" },
  ];

  const show = (value) => (
    <li key={value.id} className="card">
      <span>{value.name}</span>
    </li>
  );
  return (
    <Pagination
      data={posts}
      Show={show}
      displayNumber={itemPerPage}
      previousText="Previous"
      nextText="Next"
    />
  );
};
export default PaginationList;
