import { useState } from "react";
import { MainContainer } from "./InputBuscador.jsx";
import { ResultsSearch } from "./ResultsSearch.jsx";
import "./Results.css";
import Swal from "sweetalert2";

async function fetchURL(input) {
  const apiKey = "6556be045fda6ff151484671";
  const urlFetch = `https://api.serpdog.io/scholar?api_key=${apiKey}&q=${input}`;
  try {
    const response = await fetch(urlFetch, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(
        `Error en la solicitud: ${response.status} - ${response.statusText}`
      );
    }
    const data = await response.json();
    if (data) {
      const { scholar_results } = data;

      const results = data.scholar_results.map(
        ({ id, title, title_link, snippet }) => ({
          id: id,
          title: title,
          title_link: title_link,
          snippet: snippet,
        })
      );
      return results;
    } else {
      console.error("Error al obtener la data");
    }
  } catch (error) {
    console.error(error);
  }
}
function alertNoComplete(title, text) {
  const alertNoComplete = Swal.fire({
    title: title,
    text: text,
    icon: "error",
    confirmButtonText: "Aceptar",
  });
  return alertNoComplete;
}

export function Results() {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async (input) => {
    try {
      const urlResults = await fetchURL(input);
      setSearchResults(urlResults);
    } catch (error) {
      console.error(error);
      alertNoComplete(
        "Error de búsqueda",
        "Hubo un error al realizar la búsqueda"
      );
    }
  };
  return (
    <>
      <MainContainer onSearch={handleSearch} />
      <section id="resultados">
        {searchResults.map((results) => {
          const {id, title, title_link, snippet } = results;
          return (
            <ResultsSearch
              key={id}
              title={title}
              title_link={title_link}
              snippet={snippet}
            />
          );
        })}
      </section>
    </>
  );
}
