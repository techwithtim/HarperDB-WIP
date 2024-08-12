export const DB_URL = "/";
export const DB_USER = "";
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

export const getScores = async (snippet) => {
  const response = await fetch(DB_URL + `Score/?snippetId==${snippet.id}&sort(-cpm)`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: authorizationHeader,
    },
  });
  const result = await response.json();
  return result;
};


export const postScore = async (snippet, time, cpm) => {
  await fetch(DB_URL + "Score", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorizationHeader,
    },
    body: JSON.stringify({
      snippetId: snippet.id,
      time,
      cpm,
    }),
  });
};
