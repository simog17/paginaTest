
const k = 10;
let x = 0;
let fullList = []

const updateList = () =>{
  const content = document.getElementById('content')
  content.innerHTML = fullList.slice(x*k, k*(x+1)).reduce((acc, e) => {
  acc += `<article><h2><span> ${e.Title} </span></h2><p> ${e.Description} </p> </article>`
  return acc
}, "")
}


fetch("https://fakerestapi.azurewebsites.net/api/Books")
.then(res => res.json())
.then(data => {
  fullList = data
  updateList()
})
.catch(err=> {
  console.error(err)
})
const next = () => {
  x++
  updateList()
}


content.innerHTML = "<h1>Refresh</h1>" 
