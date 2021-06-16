import httpClient from "../http-common";

const getAllSnippets = () => {
  return httpClient.get("/snippet/all");
};

const addSnippet = (data) => {
  return httpClient.post("/snippet", data);
};

const getSnippet = (id) => {
  return httpClient.get(`/snippet/${id}`);
};

const removeSnippet = (id) => {
  return httpClient.delete(`/snippet/${id}`);
};

const updateSnippet = (data) => {
  return httpClient.put("/snippet", data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSnippet,
  getAllSnippets,
  addSnippet,
  updateSnippet,
  removeSnippet,
};
