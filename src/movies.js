// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(arr => {
        return arr.director;
    });

    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const movies = moviesArray.filter(arr => {
        return (arr.director === 'Steven Spielberg' && arr.genre.includes('Drama'));
    }).length;

    return movies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }

    const scoreAvg = moviesArray.map(arr => arr.score || 0).reduce((acc, cur) => acc + cur, 0)
    let avg = scoreAvg / moviesArray.length;
    return +avg.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(arr => arr.genre.includes('Drama'));

    if(dramaMovies.length === 0){
        return 0;
    }

    const totalScore = dramaMovies.reduce((acc, cur) => acc + cur.score, 0) / dramaMovies.length;

    return +totalScore.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderMovies = [... moviesArray].sort ((acc, cur)=>{
    if (acc.year === cur.year){
       return acc.title.localeCompare(cur.title);
    }else{
       return acc.year - cur.year;
    }  
    });

    return orderMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderAlpha = moviesArray.map(arr => arr.title).sort((acc, cur) => {
        return acc.localeCompare(cur)
    }).slice(0,20);

    return orderAlpha;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
