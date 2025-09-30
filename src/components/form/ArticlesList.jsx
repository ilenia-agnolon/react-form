import { useState } from "react";
import titles from "../titles";

function ArticlesList() {
  const [articles, setArticles] = useState();

  // lista titoli articoli
  return (
    <>
      <div>
        <ul>
          {titles.map((title, i) => (
            <li key={i}>{title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ArticlesList;
