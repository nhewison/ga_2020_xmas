// // show door content 

// $(".door-background").click(function(){
//     $(".door-present-content").show();
//     $(".door-background").hide();
//   });


//   $(".door-present-content").click(function(){
//     $(".door-background").show();
//     $(".door-present-content").hide();
//   });



// $(".door-container").click(function(){
//   console.log(this)
//   $(this).hide(".door-background");
// });


// Ensures the DOM is loaded before the JS is run
window.addEventListener('DOMContentLoaded', () => {

  // An array of the doors
  const doorsObject = [
    { number: '1', img: './Images/MB.png', text: ' "Calm is a superpower"', name: '- Michelle' },
    { number: '2', img: './Images/SP.png', text: '"Ahoy there everyone! A highlight for me was FL Appreciation Week and obviously being Ned for a day!"', name: '- Somerset' },
    { number: '3', img: './Images/DC.png', text: '"Does work always have to be serious? Neigh. These two amazing people surprised me, yelled "haaaaaaay" and it made my day. As they say, you can take a horse to water, but you cant make it call you on Zoom."', name: '- Callum ' },
    { number: '4', img: './Images/CAL.png', text: '"The debut of the Caltato"', name: '- Kremmy' },
    { number: '5', img: './Images/JF.png', text: '“Im a survivor, Im not gonna give up, Im not gonna stop, Im gonna work harder, Im a survivor, Im gonna make it, I will survive, keep on surviving”', name: '- John'},
    { number: '6', img: './Images/YA.png', text: '"Business as usual!"', name:'- Antonio' },
    { number: '7', img: './Images/EM.png', text: '"Dont forget to believe in a little magic!"', name:'- Ellen' },
    { number: '8', img: './Images/FW.png', text: '"Vintage is just overpriced retro" - Somerset Prew (in reference to how to refer to Brexit) ', name:'- Fi' },
    { number: '9', img: './Images/ELF.png', text: '"Be ready to face any challenge that may be foolish enough to face you." ', name:'- Dwight' },
    { number: '10', img: './Images/NH.png', text: '"The secret of change is to focus all of your energy, not on fighting the old, but on building the new." - Socrates', name:'- Nat' },
    { number: '11', img: './Images/AI.png', text: '"Shout out to Antonios MO!"', name:'- Chip' },
    { number: '12', img: './Images/MIKES.png', text: '"When Triplet Mike kept crashing our Zoom meeting"', name:'- Kremmy' },
    { number: '13', img: './Images/CS.png', text: 'text', name:'name' },
    { number: '14', img: './Images/CS.png', text: 'text', name:'name' },
    { number: '15', img: './Images/CS.png', text: 'text', name:'name' },
    { number: '16', img: './Images/CS.png', text: 'text', name:'name' },
    { number: '17', img: './Images/CS.png', text: 'text', name:'name' },
    { number: '18', img: './Images/CS.png', text: 'text', name:'name' },
    { number: '19', img: './Images/SOM.png', text: '"Who wore it best?"', name:'- you decide' },
    { number: '20', img: './Images/BT.png', text: '"Again...Who wore it best though?"', name:'- you must decide' },
    { number: '21', img: './Images/GREY.png', text: '"Cmon now...Who REALLY wore it best?"', name:'- too hard to decide' },
    { number: '22', img: './Images/AK.jpg', text: 'I love that GA is full of "do-ers" who arent afraid to take risk. Ive learned a lot from this team because I know they are all trying too, instead of sitting at the sidelines. Quote by Brene Brown', name:'- Anna' },
    { number: '23', img: './Images/JDB.png', text: '"Who likes to party?"', name:'- This guy' },
    { number: '24', img: './Images/JDBS.png', text: '"If the 21st century was a TV show, 2020 would likely be the worst (and most over-the-top) episode. And yet - look at the cast! STELLAR. Thank you everyone for making 2020 a little less crazy and a lot more positive than it could have been. So very grateful for each and every one of you, for your empathy, care, support and friendship. Big virtual hug!"', name:'- JDB' },
  ]

  // Loops through the array and creates a door for the length of the array
  doorsObject.forEach(door => createDoor(door))

  const doorContainers = document.querySelectorAll('.door-container')


// Cick function for fade in and out

  doorContainers.forEach(container => {
    let isContentShown = false

    container.addEventListener('click', () => {
      const doorBackground = container.children[1]
      const doorPresentContent = container.children[0]
      const doorImageContainer = doorPresentContent.children[0]
      const doorName = doorPresentContent.children[1]

      if (!isContentShown) {
        container.classList.add('polaroid')
        doorBackground.classList.remove('animate__fadeIn')
        doorBackground.classList.add('animate__fadeOut')
        doorPresentContent.classList.remove('hidden')
        doorPresentContent.classList.remove('animate__fadeOut')
        doorPresentContent.classList.add('animate__fadeIn')
        doorPresentContent.classList.add('polaroid-content')
        doorImageContainer.classList.add('polaroid-image-container')
        doorName.classList.add('polaroid-name')
      }

      else {
        container.classList.remove('polaroid')
        doorPresentContent.classList.remove('animate__fadeIn')
        doorPresentContent.classList.add('animate__fadeOut')
        doorBackground.classList.remove('animate__fadeOut')
        doorBackground.classList.add('animate__fadeIn')
        doorPresentContent.classList.remove('polaroid-content')
        doorImageContainer.classList.remove('polaroid-image-container')
        doorName.classList.remove('polaroid-name')
      }

      isContentShown = !isContentShown

    })
  })

  // Create an array of DOM Elements with the class `door-background`
  // const doorBackgrounds = document.querySelectorAll('.door-background')

  // // Loop through all the elements and add an event listener for click
  // doorBackgrounds.forEach(element => {
  //   // The event listener is looking for you to click the element then executes the below
  //   element.addEventListener('click', () => {
  //     // Adds the fade to the element you clicked
  //     element.classList.add('animate__fadeOut')
  //     // **may need to add hidden after a timer so element is removed from DOM

  //     // Gets `door-present-content` (it's sibling element) and gives it a fade in
  //     const presentContent = element.parentElement.children[0]
  //     presentContent.classList.remove('hidden')
  //     presentContent.classList.add('animate__fadeIn')
  //   })
  // })

  // const doorClick = document.querySelectorAll('.door-present-content')
  // doorClick.forEach(element => {
  //   element.addEventListener('click', () => {
  // // fades out the image and quote
  //   element.classList.add('animate__fadeOut')
  // // fades in the door again ? 
  //   const doorChange = element.parentElement.children[1]
  //   doorChange.classList.remove('animate__fadeOut')
  //   doorChange.classList.add('animate__fadeIn')
        
  //   })
  // })


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

    const nameTag= document.createElement('h2')
    nameTag.textContent = doorInfo.name

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
})
