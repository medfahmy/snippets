import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import snippetService from "../services/snippetService";

export default function EditSnippet() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState(false);
  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    if (id) {
      snippetService
        .getSnippet(id)
        .then((snippet) => {
          setTitle(snippet.data.title);
          setBody(snippet.data.body);
          setCategory(snippet.data.category);
        })
        .catch((err) => console.error(err));
    }
  }, [id]);

  const saveSnippet = (e) => {
    e.preventDefault();

    if (!title || !body) {
      setErrors(true);
      return;
    }

    const snippet = { id, title, body, category };
    if (!id) {
      snippetService
        .addSnippet(snippet)
        .then((res) => {
          console.log("success", res.data);
          history.push("/");
        })
        .catch((err) => console.error(err));
    } else {
      snippetService
        .updateSnippet(snippet)
        .then((res) => {
          console.log("success", res.data);
          history.push("/");
        })
        .catch((err) => console.error(err));
      // }
    }
  };

  return (
    <div>
      <div className="create">
        <div className="text-center">
          <h5>Edit note</h5>
          {errors && (
            <span style={{ color: "red", fontStyle: "italic" }}>
              Please enter the required fields{" "}
            </span>
          )}
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="title">
              Snippet title : <sup>*</sup>
            </label>
            <input
              id="title"
              className="form-control"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="body">
              Snippet content : <sup>*</sup>
            </label>
            <textarea
              id="body"
              className="form-control"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="category">
              Snippet category : <sup>*</sup>
            </label>
            <select
              id="category"
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value=""></option>
              <option value="Java">Java</option>
              <option value="Javascript">Javascript</option>
              <option value="Python">Python</option>
            </select>
          </div>
          <div className="text-center">
            <button className="btn btn-primary" onClick={(e) => saveSnippet(e)}>
              Edit snippet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
