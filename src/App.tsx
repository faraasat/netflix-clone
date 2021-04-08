import "./App.css";
import Row from "./row";
import requests from "./request";

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
