// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
modal.className = 'hidden'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#modal')
  const heartIcons = document.getElementsByClassName("like-glyph")
  // console.log(heartIcons)
for (const heart of heartIcons){
  heart.addEventListener('click', (e) => {
    mimicServerCall()
    .then(() => {
      if (heartIcons.innerHTML === EMPTY_HEART){
      heart.innerHTML  = FULL_HEART
      heart.className = "like-glyph"
    } else {
      heart.innerHTML = EMPTY_HEART
      heart.className = "activated-heart"
  }
})
.catch(error => {
  modal.hidden = false
  const modalMessage = document.querySelector('#modal-message')
  modalMessage.innerHTML = error
  setTimeout(() => {
    modal.hidden = true
  }, 3000)
})
})
}
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