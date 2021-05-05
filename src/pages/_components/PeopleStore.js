import { writable } from "svelte/store";

// this is an array of people with names and profile images
export const people = writable([]);

let api = "https://randomuser.me/api?noinfo&results=5&inc=name,picture";
let promise;

// this returns a promise to be used to fetch people. if we have
// already made a request, it will not create a second request.
export const getPeople = async () => {
  if (promise) {
    return promise;
  }
  promise = fetch(api)
    .then((response) => response.json())
    .then((data) => people.set(data.results));
  return promise;
};
