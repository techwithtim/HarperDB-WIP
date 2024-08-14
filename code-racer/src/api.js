export const DB_URL = "http://localhost:9926/";
export const DB_USER = "tim";
export const DB_PASS = "";

const credentials = `${DB_USER}:${DB_PASS}`;
const encodedCredentials = btoa(credentials);
const authorizationHeader = `Basic ${encodedCredentials}`;

export const getSnippets = async () => {
  const response = await fetch(DB_URL + "Snippet/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: authorizationHeader,
    },
  });
  const result = await response.json();
  return result;
};

export const postScore = async (snippet, time, cpm) => {
  await fetch(DB_URL + "Scores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorizationHeader,
    },
    body: JSON.stringify(createScore(snippet, time, cpm)),
  });
};

export const createScore = (snippet, time, cpm) => {
  return {
    snippetId: snippet.id,
    time,
    cpm,
  };
};
