import './App.css';
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Row from './Row.jsx';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Now Playing' fetchUrl={requests.fetchNowPlaying} />
      <Row title='Trending' fetchUrl={requests.fetchTrending} />
      <Row title='Upcoming' fetchUrl={requests.fetchUpcoming} />
      <Row title='Popular' fetchUrl={requests.fetchPopular} />
    </div>
  );
}

export default App;
