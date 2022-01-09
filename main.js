// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const glyph = document.querySelectorAll(".like-glyph")
  let error = document.querySelector("#modal")
  let errorMessage = document.querySelector("#modal-message")
  glyph.forEach(function(glyph) {
    glyph.addEventListener('click', function(){
      mimicServerCall()
      .then(() => {
        error.classList.add('hidden');
        console.log("yes")
        if(glyph.textContent === FULL_HEART){
          glyph.textContent = EMPTY_HEART
          glyph.classList.remove("activated-heart")
        }
        else {
          glyph.textContent = FULL_HEART
          glyph.classList.add("activated-heart")
        }
      })
      .catch(() => {
        errorMessage.textContent = "Random server error. Try again."
        console.log("NO")
        error.classList.remove('hidden')
        setTimeout(function(){
          error.classList.add('hidden')
        }, 3000)
      })
    })
  })
})


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
