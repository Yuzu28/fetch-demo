
    const { log} = console;
    log("is this thing on");
    
    const makeBreakfast = (bacon) => {
    
        
        const pancakes = bacon.results[0].image;
        localStorage.setItem('grit', pancakes);
    }
    const cookTheBacon = () => {
        const oatMeal = localStorage.getItem('grit');
        document.body.style.backgroundImage = `url('${oatMeal}')`
    
    }
    
    //fetch something
    // 3 step process
    // go to a url
    //get that promise
    //JSON object
    const userInput = `character`
    const URL = `https://rickandmortyapi.com/api/${userInput}`;
    // const fetch = fetch(URL)
    fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((eggs) => {
            makeBreakfast(eggs);
            cookTheBacon();
        })

















//         const { log} = console;
// log("is this thing on");

// const makeBreakfast = (bacon) => {

    
//     const pancakes = bacon.results[0].name;
//     localStorage.setItem('grit', pancakes);
//     const oatMeal = localStorage.getItem('grit');
//     log(oatMeal);
//     const URL = bacon.results[0].image;
//     document.body.style.backgroundImage = `url('${URL}')`


// }

// //fetch something
// // 3 step process
// // go to a url
// //get that promise
// //JSON object
// const userInput = `character`
// const URL = `https://rickandmortyapi.com/api/${userInput}`;
// // const fetch = fetch(URL)
// fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((eggs) => {
//         makeBreakfast(eggs);
//     })