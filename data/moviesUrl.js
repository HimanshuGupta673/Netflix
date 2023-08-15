const API_KEY = "6fbdeb3f3b45738d512e46489f117748";

export default [
    {
        id:"0",
        name:"Top Rated",
        url:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    {
        id:"1",
        name:"Action Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,

    },
    {
        id:"10",
        name:"Hindi Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=hi`
    },
    {
        id:"2",
        name:"Comedy Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    {
        id:"3",
        name:"Horror Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    {
        id:"4",
        name:"Kannada Block Busters",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=kn&year=2022`
    },
    {
        id:"4",
        name:"Romance Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    {
        id:"5",
        name:"Netflix Orginals",
        url:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US`
    }
]