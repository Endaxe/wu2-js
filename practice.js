export function setupPractice(element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM
  
  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)
  
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  // kod för att visa vad du lärt dig om variabler och typer
  let store = 'coop'
  let name = 'John'
  
  let message = (name + " går till " + store + " för att handla frukter!")
  console.log(message)
  //console.log(varsAndTypes, typeof(varsAndTypes))
}

function operators(element) {
  // kod för att visa vad du lärt dig om operatorer
  
  let banan = 12
  let melon = 32
  
  let total = melon + banan
  let message = ("john ska nu betala för melonen och bananen, vilket blev " + total + " kr.")
  let rabbat = total - 5
  let message2 = ("frukterna var på salu (5kr), slutgiltiga priset blev " + rabbat + " kr.")
  console.log(message, message2)
}

function controlStructures(element) {
  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar
  let controlStructures = 'controlStructures'
  console.log(controlStructures, controlStructures ? 'if' : 'loopar')
}

function arraysAndObjects(element) {
  // kod för att visa vad du lärt dig om arrays och objekt
  
  // const names = {carl, johan, thomas}
  console.log(['arrays', { and: 'objects' }])
}

function domAndEvents(element) {
  const imagespin = (wheelRandom) => {

  }
  let spinbutton = element.querySelector('#imagespin')
  const wheelieImage = element.querySelector('#wheelie-image')

  spinbutton.addEventListener('click', () => {
    const spinTime = 200
    const wheelRandom = Math.ceil(Math.random()*14)
  wheelieImage.classList.add('spin-it')
  
  
  
  
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  console.log(element, 'lyssna efter event för att ändra element')
})
}


function domManipulation(element) {
  let newtext = document.querySelector('#textid')
 // let button = document.querySelector('#button') skulle klicka här för att byta
  
  
  newtext.addEventListener('click', () => {
    newtext.textContent = 'hej'
    
  })
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  //element.innerHTML = 'dom manipulation, ändra och lägg till element'
}
