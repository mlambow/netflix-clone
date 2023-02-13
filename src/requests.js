const API_KEY = '2f75fe31cb481c497c355f5573ee6393';

const requests = {
    fetchTrending : `/trending/all/day?api_key=${API_KEY}`,
    fetchTopRated : `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNowPlaying : `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming : `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`, 
    fetchPopular : `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
}

export default requests