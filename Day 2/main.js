const cointainer = document.getElementById("cointainer");
const cointainerPosts = document.getElementById("containerPost");
const btn = document.getElementById("getUsers");

// btn.addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       cointainer.innerHTML = "";
//       data.forEach((element) => {
//         cointainer.innerHTML += `<button onclick = "clickMe(${element.id})">${element.name}</button>`;
//       });
//     })
//     .catch((Error) => console.log(Error));
// });

// function clickMe(id) {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => {
//       cointainerPosts.innerHTML = "";
//       data.forEach((element) => {
//         if (element.userId == id) {
//           cointainerPosts.innerHTML += `<p><button>User ID: ${element.userId}</button><br>[Title]:  ${element.title}<br>[Post]:  ${element.body}</p>`;
//         }
//       });
//     })
//     .catch((error) => console.log(error));
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

async function Excute() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let userData = await response.json();
    cointainer.innerHTML = "";
    userData.forEach((element) => {
      cointainer.innerHTML += `<button onclick = "clickMe(${element.id})">${element.name}</button>`;
    });
  } catch (error) {
    console.log(error);
  }
}

async function getPosts(id) {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let postsData = await response.json();
    cointainerPosts.innerHTML = "";
    postsData.forEach((element) => {
      if (element.userId == id) {
        cointainerPosts.innerHTML += `<p><button>User ID: ${element.userId}</button><br>[Title]:  ${element.title}<br>[Post]:  ${element.body}</p>`;
      }
    });
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", () => {
  Excute();
});

function clickMe(id) {
  getPosts(id);
}
