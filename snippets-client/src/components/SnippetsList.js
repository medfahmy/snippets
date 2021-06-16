import { useState, useEffect } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import snippetService from "../services/snippetService";

export default function SnippetsList() {
  const [snippets, setSnippets] = useState([
    //{ title: "my first note", body: "some code", category: "java" },
    //{ title: "my second note", body: "some code", category: "javascript" },
  ]);

  useEffect(() => {
    snippetService
      .getAllSnippets()
      .then((res) => setSnippets(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h4>Snippets list</h4>
      <div className="snippets-list mt-4">
        {snippets &&
          snippets.map((snippet) => (
            <div key={snippet.id} className="snippets-preview mt-3">
              <Link to={`/snippet/${snippet.id}`}>
                <h5 className="primary-color text-capitalize">
                  {snippet.title}
                </h5>
                <Moment fromNow className="text-italic">
                  {snippet.updatedAt}
                </Moment>
                <p>{snippet.category}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
