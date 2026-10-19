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
    answer.innerHTML = `
      <label for="dynamicPostId">Wybierz ID posta (1-10): </label>
      <select id="dynamicPostId">
        <option value="" disabled selected>-- Wybierz post --</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div id="postResult" style="margin-top: 15px;"></div>
    `;

    document
      .getElementById("dynamicPostId")
      .addEventListener("change", function () {
        const postId = this.value;
        const postResult = document.getElementById("postResult");

        postResult.innerHTML = "Ładowanie...";

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((post) => {
            console.log(post);
            postResult.innerHTML = `<div><strong>${post.title}</strong><p>${post.body}</p></div>`;
          })
          .catch((error) => {
            console.error("Błąd:", error);
            postResult.innerHTML = "Wystąpił błąd podczas pobierania posta.";
          });
      });
  });

  cw2.addEventListener("click", function () {
    //TODO
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
