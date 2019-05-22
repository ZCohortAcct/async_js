// handle async call in more synchroniness mannor
// promies are a promise for data at some point in the future

function apiPromiseAdd(num1, num2) {
  // need 2 create a new promise obj
  // res == result, rej == reject
  return new Promise((res, rej) => {
    setTimeout(function(){
      const result = num1 + num2
      res(result)
     }, 2000)
  })
}

// handing is diff
apiPromiseAdd(5,10)
//how do you handle a promise, what do you chain on 2 end of fn call
.then((sum) => { 
  // utilizes the res(), result is passed 2 .then fn
  // sum == result
  console.log(sum)
 return apiPromiseAdd(sum, 20)
})
// when promise gets resolves will get handed to .then
.then((sum2) => {
  console.log(sum2)
  return apiPromiseAdd(sum2, 30)
}).then(function(sum3){
  console.log(sum3)

})

  
    // b/c returning inside a fn that w/in a .then, will return another promise
    // 2 handle promise chain another .then
 

  //looks more sync b/c handling operations line by line
  // top 2 bottom

// use promised a lot with fetch fn, talk 2 api
// ex site: https://css-tricks.com/using-fetch/
// fetch('https://api.github.com/users/chriscoyier/repos');