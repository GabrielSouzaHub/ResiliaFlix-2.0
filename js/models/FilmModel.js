class FilmModel{
    constructor(){
       this._title;
       this._year;
       this._released;
       this._runtime;
       this._genre;
       this._director;
       this._writer;
       this._actors;
       this._plot;
       this._language;
       this._country;
       this._awards;
       this._posterUrl;
       this._ratings; 
       this._boxOffice;
       this._production; 
    }
    get title(){
        return this._title;
    }
    get poster(){
        return this._posterUrl;
    }
    fazRequest(filme,callback){  
        let request = new XMLHttpRequest;   
        request.open("GET",`http://www.omdbapi.com/?t=${filme}&apikey=e943e54`);
    
        request.addEventListener("load",() =>{
                if(request.status == 200){
                    let response = JSON.parse(request.responseText);
                    this._title = response.Title;
                    this._year = response.Year;
                    this._released = response.Released;
                    this._runtime = response.Runtime;
                    this._genre = response.Genre;
                    this._director = response.Director;
                    this._writer = response.Writer;
                    this._actors = response.Actors;
                    this._plot = response.Plot;
                    this._language = response.Language;
                    this._country = response.Country;
                    this._awards = response.Awards;
                    this._posterUrl = response.Poster;
                    this._ratings = response.Ratings; 
                    this._boxOffice = response.BoxOffice;
                    this._production = response.Production; 
                    callback();
                }
                else{
                    console.log(request.status +" "+ request.statusText);
                }
        });
    
        request.send();
    }



}