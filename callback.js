// building an API that other clinest can all

function apiAdd(num1, num2, cb) {
  //take time to add the numbs
  // 1st arg fn & 2nd amount of time 2 wait in millseconds
  //once 2sec has completed then inner fn will run
 setTimeout(function(){
  const result = num1 + num2
  cb(result)
 }, 2000)
}

// excute the fn
apiAdd(5,10, 
  (sum) => {
    console.log(sum)
    apiAdd(sum, 20, function(sum2) {
      console.log(sum2)
      apiAdd(sum2, 20, function(sum3) {
        console.log(sum3)
      })
    })
  }
)

// this is cb hell || cb xmas tree, b/c continously indenting as set into new fns
// where concept of promises

//jquery uses cb a LOT
$.get('url', function(data){
//   // handle response
})

// jquery fn looks like
function get (url, cb) {
//   // makes a request to url & gets data

//   //excutes the callback fn passed in as 2nd parameter, and sends API response once the request is complete 
}