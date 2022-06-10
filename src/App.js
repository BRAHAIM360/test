import React from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";
import { useState } from "react/cjs/react.production.min";

const title = "Sorting Articles";

function App({ articles }) {
  const [filter, setFilter] = React.useState(articles);
  const MostUpVotes = () => {
    return articles.sort((a, b) => {
      if (a.upvotes < b.upvotes) {
        return 1;
      }
      if (a.upvotes > b.upvotes) {
        return -1;
      }
      return 0;
    });
  };

  React.useEffect(() => {
    console.log(filter);
  }, [filter]);

  const MostUpRecent = () => {
    return articles.sort((a, b) => {
      const aa = new Date(a.date);
      const bb = new Date(b.date);
      if (aa < bb) {
        return 1;
      }
      if (aa > bb) {
        return -1;
      }
      return 0;
    });
  };
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => {
            console.log(MostUpVotes());

            setFilter(MostUpVotes());
          }}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => {
            const filterd = MostUpRecent();
            console.log(filterd);
            setFilter(() => [filterd][0]);
          }}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={filter} />
    </div>
  );
}

export default App;
