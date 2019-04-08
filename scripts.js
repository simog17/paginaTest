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
				content.innerHTML = `<img src="https://media1.tenor.com/images/7e77e0a227b7270cf65601afd5e39339/tenor.gif?itemid=12901256" class="cr7" alt="Milan Juventus Ronaldo GIF - MilanJuventus Ronaldo Happy GIFs"/>`
      	setTimeout(function () {
      		content.innerHTML = htmlPages.shift().join('')
				}, 3200)
        
    	}
  	}
})
 .catch(console.error);








