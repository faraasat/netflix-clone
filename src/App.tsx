import "./App.css";
import Row from "./Row";
import requests from "./request";

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
