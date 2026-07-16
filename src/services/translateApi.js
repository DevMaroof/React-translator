const url = "https://google-translate113.p.rapidapi.com/api/v1/translator/text";
const apiKey = import.meta.env.VITE_RAPID_API_KEY;

export async function fetchText(text, language) {
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "google-translate113.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "auto",
      to: language,
      text: text,
    }),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const result = await response.json();

    
    return result;
  } catch (error) {
    console.error(error);
  }
}
