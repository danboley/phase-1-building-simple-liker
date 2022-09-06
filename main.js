// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//document.getElementById('modal').appendClassName("hidden");

//function heartClick() {}

//const heartClick = document.getElementsByClassName('like-glyph').addEventListener('click', mimicServerCall());


//

// const hearts = document.getElementsByClassName("like-glyph");

// function heartCallback(e) {
//   const heart = e.target;
//   mimicServerCall() {}
//   .then(function() {
//       if (heart.textContent === EMPTY_HEART) {
//           heart.textContent = FULL_HEART;
//           heart.className = "activated-heart";
//       }
//       else {
//           heart.textContent = EMPTY_HEART;
//           heart.className = "";
//       }
//     })
//     .catch(function(error) {
//       const modal = document.getElementById("modal");
//       modal.className = "";
//       modal.textContent = error;
//       setTimeout(() => modal.className = "hidden", 3000);
//     });
// }

// for (const glyph of hearts) {
//   glyph.addEventListener("click", heartCallback);
// }


//const hearts = document.querySelectorAll('.like-glyph');

// function heartCallback() {
//   hearts.forEach(heart => {
//     mimicServerCall()
//     .then(() => {
//       heart.addEventListener('click', () => {
//         if (heart.textContent === EMPTY_HEART) {
//           heart.textContent = FULL_HEART;
//           heart.className = "activated-heart";
//         }
//         else {
//           heart.textContent = EMPTY_HEART;
//           heart.className = "";
//         }
//       })
//     .catch(function(error) {
//       const modal = document.getElementByIdByID("modal");
//       modal.className = "";
//       modal.textContent = error;
//       appendClassName("hidden");
//       setTimeout(() => modal.className = "hidden", 3000);
//     });
//   })
// }

const hearts = document.querySelectorAll('.like-glyph');

function handleLikes() {
  hearts.forEach(heart => {
    mimicServerCall()
    .then(() => {
      heart.addEventListener('click', (e)=> {
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.className = "activated-heart";
        }
        else {
          heart.textContent = EMPTY_HEART;
          heart.className = "";
        }
      })
    })
    .catch(function(error) {
      const modal = document.querySelector('#modal');
      modal.className = '';
      modal.textContent = error;
      setTimeout(()=> modal.className = "hidden", 3000);
      console.log(error);
    });
  })
}
handleLikes();


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
