//const input = document.querySelector('input');
// const log = document.getElementById('values');
//input.addEventListener('input', getMoviesBySearchTerm)
const baseurl= 'http://www.omdbapi.com'
const apikey = process.env.REACT_APP_OMDB_API_KEY;

export const getMoviesBySearchTerm = async (searchTerm) => {
    try {
        //console.log(searchTerm);
        let response = await fetch(`${baseurl}/?apikey=${apikey}&s=${searchTerm}`);
        let omdires  = await response.json();
        //console.log(omdires);
        const search = omdires.Search;

        console.log(111,search[0])
        let movie1 = getMovieDetailsById(search[0].imdbID);
        //console.log(222,movie1)

        return movie1;
        // console.log('This is the last line of code in this function');
      } catch(error) {
        console.log("ERROR:", error)
      }
}

export const getMovieDetailsById = async (searchTerm) => {
    try {
        //console.log(searchTerm);
        let response = await fetch(`${baseurl}/?apikey=${apikey}&i=${searchTerm}`);
        let omdires  = await response.json();
        //console.log(omdires);
        
        const search = omdires;
        return omdires;
      } catch(error) {
        console.log("ERROR:", error)
      }
}



// input.addEventListener('input', updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }

