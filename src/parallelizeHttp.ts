import axios from 'axios'

// Parallelize HTTP requests
// If http request took 10ms and you have 10 requests to make,
// Make total run time of program less than 100ms

//assume
//Server can GET(:id) response

//case
const requests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resArr = []
requests.forEach(async request => {
  const response = await axios.get(`https://localhost/?id=${request}`);
  resArr.push(response.data);
})

//solution
const response = Promise.all(
  requests.map(async request => axios.get(`https://localhost/?id=${request}`))
)
const resArrSolution = response
console.log(resArrSolution)
