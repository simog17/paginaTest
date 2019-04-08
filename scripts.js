const content = document.getElementById('content')
fetch("https://fakerestapi.azurewebsites.net/api/Books")
.then(res => res.json())
.then(data => content.innerHTML = data.slice(0 , 10).reduce((acc, e) => {
  acc += `<article><h2><span> ${e.Title} </span></h2><p> ${e.Description} </p> </article>`
  return acc
}, "")
)
.then()
.catch(err => {console.error(err)})


const paginator = () => {

}

























content.innerHTML = "<h1>Refresh</h1>" 
