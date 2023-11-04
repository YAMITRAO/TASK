// GET REQUEST
function getTodos() {
  // axios({
  //   method:'get',
  //   url: "https://jsonplaceholder.typicode.com/todos",
  //   params: {
  //     _limit:10
  //   }
  // })

  axios
  .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
  .then( res => showOutput(res))
  .catch(err => console.log(err))
}

// POST REQUEST
function addTodo() {
  axios
  .post("https://jsonplaceholder.typicode.com/todos", { title:'this is a title', "completed": false})
  .then( res => showOutput(res))
  .catch(err => console.log(err))
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios
  .patch("https://jsonplaceholder.typicode.com/todos/1", { title:'this is a title', "completed": false})
  .then( res => showOutput(res))
  .catch(err => console.log(err))
}


// DELETE REQUEST
function removeTodo() {
  axios
  .delete("https://jsonplaceholder.typicode.com/todos/1")
  .then( res => showOutput(res))
  .catch(err => console.log(err))
}

// SIMULTANEOUS DATA
function getData() {
  axios.all( [
    axios.get('https://jsonplaceholder.typicode.com/albums'),
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
  ])
  .then( res => {
    console.log(res[0]);
    console.log(res[1]);
    showOutput(res[0]);
  })
  .cathc(err => console.log(err));
}

axios.interceptors.request.use( config => {
  console.log(`${config.method.toUpperCase()} request send to ${config.url} at ${new Date()}`);
  return config;
},
error => {
  return Promise.reject(error);
}
)
// CUSTOM HEADERS
function customHeaders() {
  const config = {
    header: {
      'content-Type' : 'application/json',
      Authorization : "sometoken"
    }
  }
  axios
  .post("https://jsonplaceholder.typicode.com/todos", { title:'this is a title', "completed": false}, config)
  .then( res => showOutput(res))
  .catch(err => console.log(err))
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  axios
  .get("https://jsonplaceholder.typicode.com/todos?_limit=10ss")
  .then( res => showOutput(res))
  .catch(err => {
    if(err.response){
      console.log("Page not found")
    }
    
  });
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
