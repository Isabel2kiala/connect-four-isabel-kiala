const API_URL = `${process.env.REACT_APP_API_URL || "http://localhost:5000"}/history`;

export async function getHistory() {
  const response = await fetch(API_URL);

  return response.json();
}

export async function saveGame(result) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      result,
      date: new Date(),
    }),
  });

  return response.json();
}