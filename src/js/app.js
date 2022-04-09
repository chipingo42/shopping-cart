// // Variables
var courses = document.querySelector('#online__courses'),
    shoppingCartContent = document.querySelector('#shoppingCartResult'),
    clearCartBtn = document.querySelector('#clear-btn'),
    shoppingImg = document.querySelector('.shopping__logo'),
    shoppingCloseImg = document.querySelector('.shopping__logo2'),
    shoppingPullUp = document.querySelector('.menubox'),
    submitBtn = document.querySelector('#submitBtn'),
    countingNumber = document.querySelector('.counting-number')
;

// console.log(countingNumber)

// Listeners
loadEventListener();


function loadEventListener() {
    //  when to Open The Shopping Menu By Clicking The Image
    shoppingImg.addEventListener('click', openMenu);


    // By closing the ShoppingCart Menu
    shoppingCloseImg.addEventListener('click', closeMenu);


    // when a new course is added
    courses.addEventListener('click', buyCourse);

    //  when the remove button is clicked
    // shoppingCartContent.addEventListener('click', removerCourse);

    // clear cart Btn
    clearCartBtn.addEventListener('click', clearcart)
}


function openMenu() {
    shoppingPullUp.style.display = 'block'

    shoppingCloseImg.style.display = 'block'

    shoppingImg.style.display = 'none'

}


function closeMenu() {
    shoppingPullUp.style.display = 'none'

    shoppingCloseImg.style.display = 'none'

    shoppingImg.style.display = 'block'
}



function handle(e) {
    e.preventDefault()
    console.log(submitBtn.value)
}


// Functions 
function buyCourse(e) {
    e.preventDefault();

    // use delegaton to find course that was added
    if(e.target.classList.contains('btn')) {

        // making the counting number to display first
        countingNumber.style.display = 'block'
        // console.log('Added')
        
        // read the course value
        var course = e.target.parentElement.parentElement;

        // read the value
        getCoureInfo(course);
    }
}


//  read the HTML information of the selected course
function getCoureInfo(course) {
    // create an object with course data
    var courseInfo = {
        Image: course.querySelector('img').src,
        title: course.querySelector('h1').textContent,
        // example: courses.querySelector('p').textContent,
        price: course.querySelector('span span').textContent,
        id: course.querySelector('.btn').getAttribute('data-id')
    }
    // Insert into the shooping cart
    addIntoCart(courseInfo);
    // console.log(courseInfo)
}


//  Display the selected course into the shopping cart
function addIntoCart(course) {
    //    create a <ul>
    var row = document.createElement('centerBlock');

    // Build the template
    row.innerHTML = `
        <ul>
           <li>
                <img src="${course.Image}" width=100>
           </li>
           <li>${course.title}</li>
           <li>${course.price}</li>
           <li>
                <a href="#" class="remove" data-id="${course.id}">X</a>
           </li>
        </ul>
    `;
    // Add into the shopping cart
    shoppingCartContent.appendChild(row);
    console.log('added')
}

//  remove course from the DOM
// function removerCourse(e) {

//     if(e.target.classList.contains('remove')) {
//         e.target.parentElement.parentElement.remove();
//     }
// }


//  clear course btn 
function clearcart() {
    // shoppingCartContent.innerHTML = '';

    // making the counting number to display none when you clear shopping cart itmes
    countingNumber.style.display = 'none'

    while(shoppingCartContent.firstChild) {
        shoppingCartContent.removeChild(shoppingCartContent.firstChild)
    }
}
