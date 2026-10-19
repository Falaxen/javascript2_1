(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    answer.innerHTML = "Loading...";

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((array) => {
          let html = "<ul>";
          array.forEach((post) => {
            html += `<li><strong>${post.title}</strong><p>${post.body}</p></li>`;
          });
          html += "</ul>";
          answer.innerHTML = html;
        })
        .catch((error) => {
          console.error("Błąd:", error);
          answer.innerHTML = "Wystąpił błąd podczas pobierania danych.";
        });
    }, 1000);
  });

  cw2.addEventListener("click", function () {
    //TODO
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
