// document.getElementById("btn").addEventListener("click", function () {
//   fetch(" https://rickandmortyapi.com/api/character/ ")
//     .then((resp) => resp.json())
//     .then((resp) => {
//       var element = document.getElementById("generate");
//       var x = 0;
//       while (x <= 20) {
//         console.log(resp);
//         element.innerHTML += `
//         <img src="${resp.results[x].image}" alt="" />
//         <p>Nombre: ${resp.results[x].name}</p>
//         `;
//         x += 1;
//       }
//     });
// });

fetch(" https://rickandmortyapi.com/api/character/ ")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    var x = 0;
    document.getElementById("btn").addEventListener("click", function (e) {
      console.log(e);
      console.log(x);
      var element = document.getElementById("generate");
      element.innerHTML = `
      <div class="conteiner-img">
          <img src="${response.results[x].image}" alt="" />
        </div>

        <div class="conteiner-info">
          <p class="text">Nombre: ${response.results[x].name}</p>
          <p class="text">Status: ${response.results[x].status}</p>
          <p class="text">Location: ${response.results[x].location.name}</p>
        </div>
      `;
      x += 1;
      if (x == 20) {
        x = 0;
      }
    });
  });
