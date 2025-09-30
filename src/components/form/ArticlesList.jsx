import { useState } from "react";
import titles from "../titles";

function ArticlesList() {
  const [articles, setArticles] = useState(titles);
  const [newArticle, setNewarticle] = useState("");

  const addArticle = (e) => {
    e.preventDefault();
    // pulisco input user
    const cleanArticle = newArticle.trim();
    //creo nuovo array per lo state
    const updatedArticles = [...articles, cleanArticle];
    setArticles(updatedArticles);
    setNewarticle("");
  };

  return (
    <>
      <div className="main-container">
        {/* titolo */}
        <h1>Articoli popolari</h1>
        <hr />
        <div className="input-btn-container">
          <form onSubmit={addArticle}>
            <input
              type="text"
              placeholder="Inserisci un nuovo articolo"
              value={newArticle}
              onChange={(e) => {
                setNewarticle(e.target.value);
              }}
            />
            <button type="submit">Aggiungi</button>
          </form>
        </div>

        {/* lista titoli articoli */}
        <div>
          <ol>
            {articles.map((title, i) => (
              <li key={i}>{title}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default ArticlesList;
