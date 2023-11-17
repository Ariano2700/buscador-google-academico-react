import "./inputBuscador.css";

export function MainContainer({ onSearch }) {
  const handleSearch = () => {
    const inputSearch = document.getElementById("buscadorID");
    if (inputSearch && inputSearch.value) {
      onSearch(inputSearch.value);
    } else {
      console.error("Ingresa un valor de búsqueda válido");
    }
  };
  return (
    <section className="mainContainer">
      <label htmlFor="buscadorID">¡Buscador!</label>
      <div className="continerInputBtN">
        <input type="text" id="buscadorID" />
        <button className="comic-button" id="btn" onClick={handleSearch}>
          ¡Buscar!
        </button>
      </div>
    </section>
  );
}
