const API_Key = "ce4aa7c72ed4d3888bf278c0499ab9c2"
const URL = "https://api.themoviedb.org/3/movie/550?api_key=ce4aa7c72ed4d3888bf278c0499ab9c2"
const IMG_URL= "https://image.tmdb.org/t/p/w500/"
 
const generateURL = (endpoint) =>{
return `https://api.themoviedb.org/3/${endpoint}?api_key=ce4aa7c72ed4d3888bf278c0499ab9c2`
}

const fetchMovies = async (url)=>{
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const root =document.getElementById("root")

const mostPopularButton =document.getElementById("most_popular")
const topRatedButton = document.getElementById("top_rated")


mostPopularButton.addEventListener("click",()=>{

    fetchMovies(generateURL("movie/popular"))
    .then(({results})=>
    results.forEach(movie=>{
        const movieCard=createCard(movie)
        root.appendChild(movieCard)
    })
    )
})

topRatedButton.addEventListener("click",()=>{

    fetchMovies(generateURL("movie/top_rated"))
    .then(({results})=>
    results.forEach(movie=>{
        const movieCard=createCard(movie)
        root.appendChild(movieCard)
    })
    )
})


const createCard=(movie)=>{
    const movieDiv=document.createElement("div")
        movieDiv.innerHTML=`<div class="card" style="width: 18rem;">
        <img src=${IMG_URL}${movie.poster_path} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${movie.original_title} </h5>
          <p class="card-text">${movie.overview}</p>
          <a href=${movie.homepage} class="btn btn-primary" target = "blank">Go somewhere</a>
        </div>
      </div>`

      return movieDiv
}






/*
fetch(URL)
    .then(res => res.json())
    .then(movie =>{
        console.log(movie)
        const movieDiv=document.createElement("div")
        movieDiv.innerHTML=`<div class="card" style="width: 18rem;">
        <img src=${IMG_URL}${movie.poster_path} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${movie.original_title} </h5>
          <p class="card-text">${movie.overview}</p>
          <a href=${movie.homepage} class="btn btn-primary" target = "blank">Go somewhere</a>
        </div>
      </div>`
        
        
        root.appendChild(movieDiv)
        
        })

        */