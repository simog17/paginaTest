const content = document.getElementById('content')
const pagination = document.getElementById('pagination');
const itemForPage = 10;

fetch('https://fakerestapi.azurewebsites.net/api/Books')
  .then(res => res.json())
  .then(data => {
    const htmlPages = data.reduce((acc, {Title, Description}, index) => {
      if(index % itemForPage === 0) {
        acc.push([])
      }
      acc[acc.length - 1].push(`<article><h2><span> ${Title} </span></h2><p> ${Description} </p></article>`);
      return acc;
    }, []);
    console.log(htmlPages)
    content.innerHTML = htmlPages.shift().join('');
    pagination.onclick = () => {
      if(htmlPages.length > 0) {
        content.innerHTML += htmlPages.shift().join('');
      }
    }
  })
  .catch(console.error);





content.innerHTML = "<h1>Refresh</h1>"



