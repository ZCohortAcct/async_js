// use promised a lot with fetch fn, talk 2 api
// ex site: https://css-tricks.com/using-fetch/

// see the promise returned by fetch
// console.log (fetch('https://api.github.com/users/chriscoyier/repos'));

// copy code to see resp obj returned by fetch & github repos
// fetch('https://api.github.com/users/chriscoyier/repos')
// .then(resp => resp.json())
// .then(data => console.log(data)) 

fetch('https://api.github.com/users/chriscoyier/repos')
.then( resp => {
  // resp doesn't hv the data
  // contatin IMP info about the request, but doesn't give data
  // fetch retuns a resp obj
  // need to call .json 2 get data

  // test to see resp obj
  // debugger
	// console.log(resp.json())
  return resp.json()
  // other promise based api, axios will return data auto
  // use fetch b/c that't what you'll use in the React section
}).then(data => {
  // github repos as JSON
  console.log(data)
  
})
