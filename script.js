const trBox = document.querySelector('.trBox')
const arBox = document.querySelector('.arBox')
const showBtn = document.querySelector('.showBtn')
const wordsBtn = document.querySelector('.wordsBtn')

wordsBtn.addEventListener('click', meaning)


function meaning() {
    arBox.style.display = "none"

    let random= Math.floor(Math.random()* wordsTable.length)
    trBox.innerText = wordsTable[random][1]
    arBox.innerText = wordsTable[random][2]
    console.log(wordsTable[random][1])
    wordsTable.splice(random,1)
    console.log(wordsTable)

    }
  
    
    showBtn.addEventListener('click', (()=> {
        arBox.style.display = "block"
    }))