import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import snippetService from "../services/snippetService";
import Moment from "react-moment";

export default function SnippetDetails() {
  const [currentSnippet, setCurrentSnippet] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    snippetService
      .getSnippet(id)
      .then((res) => {
        setCurrentSnippet(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleEdit = () => {
    history.push(`/snippet/edit/${id}`);
  };

  const handleRemove = () => {
    snippetService
      .removeSnippet(id)
      .then(() => history.push("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="snippet-details main-content ml-5">
      <div>
        <article>
          <h5 className="text-capitalize primary-color">
            {currentSnippet.title}
          </h5>
          <div className="mb-3 font-italic metadata">
            <Moment fromNow>{currentSnippet.updatedAt}</Moment>
            <p className="text-capitalize">{currentSnippet.category}</p>
          </div>

          <div className="mb-3">{currentSnippet.body}</div>
        </article>

        <button className="btn btn-warning" onClick={handleEdit}>
          Edit snippet
        </button>

        <button className="btn btn-danger ml-3" onClick={handleRemove}>
          Remove snippet
        </button>
      </div>
    </div>
  );
}
