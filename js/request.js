import Display from "./display.js";

export default class Request{
    constructor(){
        this.template = document.querySelector(".card-template").content;
    }

    getMultipleInfo(moviesName){
        const moviesInfo = [[],[]]
        const result = moviesName.map((item) => {
            return new Promise(async (resolve) => {
                try{
                    const url = `http://www.omdbapi.com/?t=${item}&apikey=9142b0fd`
                    const response = await fetch(url)
                    const json = await response.json();

                    moviesInfo[0].push(json.Poster);
                    moviesInfo[1].push(json.Title);

                    resolve();
                }catch (error){
                    console.log(error);
                }
            });
        });

        Promise.all(result),then(() => {
            const display =  new Display()

            display.displayDefaultCards();
        });
    }
}