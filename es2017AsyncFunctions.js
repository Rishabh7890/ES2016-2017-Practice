// jshint esversion: 8

// special kind of function that is created using keyword 'async'
// this simplifies writing async code specifically promises
async function first() {
  return "This is an async function";
}

first(); // returns a promise
first().then(valReturned => console.log(valReturned));

// 'await' is a reserved keyword that can only be used inside async functions
// await pauses execution of the async function and is followed by a promise
// await waits for the promise to resolve, and then resumes the asunc function's execution and returns resolved value
// similar to yield for generators which essentially pause the function
async function getMovieData() {
  console.log("Starting");
  // following does not run until promise is resolved
  let movieData = await $.getJSON("https://omdbapi.com?t=taken&apikey=thewdb");
  console.log("Done");
  console.log(movieData);
}

getMovieData(); // logs and object with data about movie

// can also use async and await inside of objects
const movieCollector = {
  data: "taken",
  async getMovie() {
    let response = await $.getJSON(
      `https://omdbapi.com?t=${this.data}&apikey=thewdb"`
    );
    console.log(response);
  }
};

movieCollector.getMovie();

// can also place async functions as instance methods with es6 class syntax
class MovieData {
  constructor(name) {
    this.name = name;
  }
  async getMovieNow() {
    let response = await $.getJSON(
      `https://omdbapi.com?t=${this.name}&apikey=thewdb`
    );
    console.log(response);
  }
}

const m = new MovieData("Shrek");
m.getMovieNow();

// if a promise is rejected using await, an error will be thrown so we can use try/catch statement to handle these errors
async function getUser(user) {
  try {
    let response = await $.getJSON(`https://api.github.com/users/${user}`);
    console.log(response.name);
  } catch (error) {
    console.log("User does not exist");
  }
}

// when making more than one http req we should do them in parallel and then await their resolved promise to not slow down app
async function getTwoMovies() {
  let takenPromise = $.getJSON("https://omdbapi.com?t=taken&apikey=thewdb");
  let shrekPromise = $.getJSON("https://omdbapi.com?t=shrek&apikey=thewdb");

  let takenData = await takenPromise;
  let shrekData = await shrekPromise;

  console.log(takenData);
  console.log(shrekData);
}

getTwoMovies();

// await with Promise.all
// we can use Promise.all to await multiple resolved promises
// much easier than using .thens and callbacks
async function getMoviePromiseAll(first, second) {
  let movieList = await Promise.all([
    $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
    $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`)
  ]);
  console.log(movieList[0].Year);
  console.log(movieList[1].Year);
}

getMoviePromiseAll("shrek", "blade");
