export function ResultsSearch({ title, title_link, snippet }) {
  return (
    <div>
      <h2>
        <a
          href={title_link}
          target="_blank"
          className="resultsSearch"
          id="resultsSearch"
        >
          {title}
        </a>
      </h2>
      <p className="descriptionResult" id="descriptionResult">
        {snippet}
      </p>
    </div>
  );
}
//{`${title_link}`}