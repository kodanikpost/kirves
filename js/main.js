const curriculum = document.getElementById('curriculum')

function toggleCv () {
    curriculum.classList.toggle('active')
    document.body.classList.toggle('active')
}

const textElement = document.getElementById('text')
const words = textElement.dataset.words.split(',')
const typingSpeed = 100
const pauseTime = 2000
let count = 0

function typeWord(word) {
   let typeCount = 0

   const typeInterval = setInterval(() => {
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
