import React from "react";
import "./LoadMore.scss";

const LoadMore = ({ getNextValues }) => {
  return (
    <div className="loadMore">
      {getNextValues && (
        <button
          className="button button-second loadMore"
          onClick={getNextValues}
        >
          Load Data
        </button>
      )}
    </div>
  );
};

export default LoadMore;
