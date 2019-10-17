// jshint esversion: 9

// es9 brings rest and spread to objs as well

// rest is useful with objects since it gathers remaining(rest) of keys and vals in an obj and creates a new one out of them
const person = {
  first: "Rishabh",
  last: "Goel",
  job: "developer",
  numSiblings: 1
};

let { first, last, ...data } = person;

// spread spreads out keys and vals from one obj to another
// person2 will take in all keys and vals from person and then change first to Sparsh
// This a great way for creating objects starting with def values and is a more concise alternative to Object.assign from ES2015
const person2 = { ...person, first: "Sparsh" };
