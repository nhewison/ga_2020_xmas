// Ensures the DOM is loaded before the JS is run
window.addEventListener('DOMContentLoaded', () => {

  console.log('Made by Nat. 2020')

  // An array of the doors
  const doorsObject = [
    { number: '2', img: './Images/SP.png', text: '"Ahoy there everyone! A highlight for me was FL Appreciation Week and obviously being Ned for a day!"', name: '- Somerset' },
    { number: '5', img: './Images/JF.png', text: '“Im a survivor, Im not gonna give up, Im not gonna stop, Im gonna work harder, Im a survivor, Im gonna make it, I will survive, keep on surviving”', name: '- John'},
    { number: '1', img: './Images/MB.png', text: ' "Calm is a superpower"', name: '- Michelle' },
    { number: '7', img: './Images/EM.png', text: '"Dont forget to believe in a little magic!"', name:'- Ellen' },
    { number: '17', img: './Images/CS.png', text: 'text', name:'name' },
    { number: '8', img: './Images/FW.png', text: '"Vintage is just overpriced retro" - Somerset Prew (in reference to how to refer to Brexit) ', name:'- Fi' },
    { number: '13', img: './Images/MIN.png', text: '"What do you see? Glass is either half full or half empty.. Either way Im still gonna have another round.".. Merry Christmas and Happy New Year.. see you in 2021!', name:'- Mina' },
    { number: '10', img: './Images/NH.png', text: '"The secret of change is to focus all of your energy, not on fighting the old, but on building the new." - Socrates', name:'- Nat' },
    { number: '3', img: './Images/DC.png', text: '"Does work always have to be serious? Neigh. These two amazing people surprised me, yelled "haaaaaaay" and it made my day. As they say, you can take a horse to water, but you cant make it call you on Zoom."', name: '- Callum ' },
    { number: '11', img: './Images/AI.png', text: '"Shout out to Antonios MO!"', name:'- Chip' },
    { number: '22', img: './Images/AK.png', text: 'I love that GA is full of "do-ers" who arent afraid to take risk. Ive learned a lot from this team because I know they are all trying too, instead of sitting at the sidelines. Quote by Brene Brown', name:'- Anna' },
    { number: '9', img: './Images/ELF.png', text: '"Be ready to face any challenge that may be foolish enough to face you." ', name:'- Dwight' },
    { number: '12', img: './Images/MIKES.png', text: '"When Triplet Mike kept crashing our Zoom meeting"', name:'- Kremmy' },
    { number: '19', img: './Images/SOM.png', text: '"Who wore it best?"', name:'- you decide' },
    { number: '14', img: './Images/ECS.png', text: 'If 2020 has taught me anything its that "The problem is not the problem. The problem is your attitude about the problem." - Jack Sparrow (Pirates of the Caribbean)', name:'- Edward' },
    { number: '24', img: './Images/JDBS.png', text: '"If the 21st century was a TV show, 2020 would likely be the worst (and most over-the-top) episode. And yet - look at the cast! STELLAR. Thank you everyone for making 2020 a little less crazy and a lot more positive than it could have been. So very grateful for each and every one of you, for your empathy, care, support and friendship. Big virtual hug!"', name:'- JDB' },
    { number: '15', img: './Images/GH.png', text: '“When you want to hide until 2020 is over” (or the teacher comes around and you are shy.) Happy Holidays to all Mums work friends!', name:'- Gabe (and Gayle)' },
    { number: '4', img: './Images/CAL.png', text: '"The debut of the Caltato"', name: '- Kremmy' },
    { number: '16', img: './Images/CHED.jpg', text: '"Have yourself a Meow-y little Christmas!"', name:'- Cheddar' },
    { number: '20', img: './Images/BT.png', text: '"Again...Who wore it best though?"', name:'- you must decide' },
    { number: '18', img: './Images/CS.png', text: 'text', name:'name' },
    { number: '6', img: './Images/YA.png', text: '"Business as usual!"', name:'- Antonio' },
    { number: '21', img: './Images/GREY.png', text: '"Cmon now...Who REALLY wore it best?"', name:'- too hard to decide' },
    { number: '23', img: './Images/JDB.png', text: '"Who likes to party?"', name:'- This guy' },
  ]

  // Loops through the array and creates a door for the length of the array
  doorsObject.forEach(door => createDoor(door))

  const doorContainers = document.querySelectorAll('.door-container')

  const doorContainersInfo = []
  doorContainers.forEach(container => {
    const data = {
      number: Number(container.children[1].textContent),
      element: container,
      isContentShown: false,
    }
    return doorContainersInfo.push(data)
  })

  doorContainersInfo.forEach(obj => {
    // Click function for fade in and out
    obj.element.addEventListener('click', () => handleDoorChange(obj, true))
  })

  function handleDoorChange(obj, onClick = false) {
    const container = obj.element
    const doorBackground = container.children[1]
    const doorPresentContent = container.children[0]
    const doorImageContainer = doorPresentContent.children[0]
    const doorTextContent = doorImageContainer.children[1]
    const doorName = doorPresentContent.children[1]
    
    if (!obj.isContentShown || onClick) {
      if (onClick) {
        unmakeAsPolaroidOnAll()
        makeAsPolaroid(container, doorPresentContent, doorImageContainer, doorName)
        showText(doorTextContent, doorName)
      }
      showContent(doorBackground, doorPresentContent)
    }

    else {
      if (onClick) {
        unmakeAsPolaroid(container, doorPresentContent, doorImageContainer, doorName)
        removeText(doorTextContent, doorName)
      }
      unshowContent(doorBackground, doorPresentContent)
    }

    obj.isContentShown = !obj.isContentShown
  }

  function showContent(doorBackground, doorPresentContent) {
    doorBackground.classList.remove('animate__fadeIn')
    doorBackground.classList.add('animate__fadeOut')
    doorPresentContent.classList.remove('hidden')
    doorPresentContent.classList.remove('animate__fadeOut')
    doorPresentContent.classList.add('animate__fadeIn')
  }

  function unshowContent(doorBackground, doorPresentContent) {
    doorPresentContent.classList.remove('animate__fadeIn')
    doorPresentContent.classList.add('animate__fadeOut')
    doorBackground.classList.remove('animate__fadeOut')
    doorBackground.classList.add('animate__fadeIn')
  }

  function makeAsPolaroid(container, doorPresentContent, doorImageContainer, doorName) {
    container.classList.add('polaroid')
    doorPresentContent.classList.add('polaroid-content')
    doorImageContainer.classList.add('polaroid-image-container')
    doorName.classList.add('polaroid-name')
  }

  function unmakeAsPolaroid(container, doorPresentContent, doorImageContainer, doorName) {
    container.classList.remove('polaroid')
    doorPresentContent.classList.remove('polaroid-content')
    doorImageContainer.classList.remove('polaroid-image-container')
    doorName.classList.remove('polaroid-name')
  }

  function removeText (doorTextContent, doorName) {
    doorTextContent.classList.add('hidden')
    doorName.classList.add('hidden')
  }

  function showText (doorTextContent, doorName) {  
    doorTextContent.classList.remove('hidden')
    doorName.classList.remove('hidden')
  }

  function unmakeAsPolaroidOnAll() {
    doorContainersInfo.forEach(obj => {
      const container = obj.element
      const doorPresentContent = container.children[0]
      const doorImageContainer = doorPresentContent.children[0]
      const doorName = doorPresentContent.children[1]
      const doorTextContent = doorImageContainer.children[1]
      removeText(doorTextContent, doorName)
      unmakeAsPolaroid(container, doorPresentContent, doorImageContainer, doorName)
    })
  }

  // Show boxes of dates already passed
  function openPastDoors() {
    const date = new Date()
    const previousDay = date.getDate() - 1

    if (previousDay) {
      const previousDays = Array.from(new Array(previousDay), (x, i) => i + 1)
      
      doorContainersInfo.forEach(obj => {
        if (previousDays.includes(obj.number)) {
          handleDoorChange(obj)
        }
      })
    }
  }
  openPastDoors()

  // Creates the door container element
  function doorContainerElement() {
    // Creates the door container div
    const doorContainerElement = document.createElement('div')
    // Adds the class `door-container`
    doorContainerElement.classList.add('door-container')
    // Returns the door container
    return doorContainerElement
  }

  // Creates the present element, with it's child elements
  function doorPresentContentElement(doorInfo) {
    // Create present element
    const doorPresentContentElement = document.createElement('div')
    // Add classes
    doorPresentContentElement.classList.add('door-present-content')
    doorPresentContentElement.classList.add('animate__animated')
    doorPresentContentElement.classList.add('hidden')

    const imgContainerElement = document.createElement('div')

    // Create image tag and attributes
    const imgTag = document.createElement('img')
    imgTag.src = doorInfo.img

    // Create p tag and text content
    const pTag = document.createElement('p')
    pTag.textContent = doorInfo.text
    pTag.classList.add('hidden')

    const nameTag= document.createElement('h2')
    nameTag.textContent = doorInfo.name
    nameTag.classList.add('hidden')

    // Append the image and p tag to the present element
    imgContainerElement.appendChild(imgTag)
    imgContainerElement.appendChild(pTag)
    doorPresentContentElement.appendChild(imgContainerElement)
    doorPresentContentElement.appendChild(nameTag)

    // Return the present element
    return doorPresentContentElement
  }

  // Creates the door cover that you click
  function doorBackgroundElement(number = "?") {
    // Creates the main door background element
    const doorBackgroundElement = document.createElement('div')
    // Add classes to the door background element
    doorBackgroundElement.classList.add('door-background')
    doorBackgroundElement.classList.add('animate__animated')

    // Creates the door number div, adds class, and attributes
    const doorNumberElement = document.createElement('div')
    doorNumberElement.classList.add('door-number')
    doorNumberElement.textContent = number

    // Appends the door number div to the background div as a child
    doorBackgroundElement.appendChild(doorNumberElement)

    // Returns the door background element
    return doorBackgroundElement
  }

  // Creates a door container, appends child elements and puts it into the DOM
  function createDoor(doorInfo) {
    // Find the main container div `doors-container`
    const doorsContainer = document.querySelector('.doors-container')
    // Creating door container
    const doorContainer = doorContainerElement()

    // Adding door present content and background to the door container
    doorContainer.appendChild(doorPresentContentElement(doorInfo))
    doorContainer.appendChild(doorBackgroundElement(doorInfo.number))

    // Adding the new door container to the parent container (Adding it to the DOM)
    return doorsContainer.appendChild(doorContainer)
  }
  const ga = `
  _____          
 / ____|   /\\    
| |  __   /  \\   
| | |_ | / /\\ \\  
| |__| |/ ____ \\ 
 \\_____/_/    \\_\\  
  `
  console.log(ga)
})
