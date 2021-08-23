var isPopupVideoOpened = false;

function togglePopupVideo(state) {
    document.getElementById('openvid').classList.toggle('active', state);
    document.body.classList.toggle('active', state);
    isPopupVideoOpened = state;
}

function openPopupVideo() {
    togglePopupVideo(true)
}

function closePopupVideo() {
    togglePopupVideo(false)
}

window.onload = function(e) {

    document.addEventListener('click', function(e) {
        var target = e.target;

        if (target.id == 'open-popup-video') {
            openPopupVideo();
        } else if (isPopupVideoOpened) {
            closePopupVideo();
        }
    })
}

function toggleCv () {
    curriculum.classList.toggle('active')
    document.body.classList.toggle('active')
}

var textElement = document.getElementById('text')
var words = textElement.dataset.words.split(',')
var typingSpeed = 100
var pauseTime = 2000
var count = 0

function typeWord(word) {
   var typeCount = 0

   var typeInterval = setInterval(() => {
       if (typeCount <= word.length) {
           textElement.innerHTML = word.slice(0, typeCount) + '<span class="cursor">|</span>'
           typeCount ++
       } else {
           clearInterval(typeInterval)
           setTimeout(() => {
               typeWord(nextWord())
           }, pauseTime)
       }
   }, typingSpeed)
}

function nextWord() {
   count ++
   return words[count % words.length]
}

typeWord(nextWord())
