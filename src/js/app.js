// Variables
var courses = document.querySelector('#online__courses'),
    shoppingCartContent = document.querySelector('#pull-up-id'),
    clearCartBtn = document.querySelector('#clear-btn');


// Listeners
loadEventListener();

function loadEventListener() {
    // when a new course is added
    courses.addEventListener('click', buyCourse);

    // when the remove button is clicked
    shoppingCartContent.addEventListener('click', removerCourse);

    // clear cart Btn
    clearCartBtn.addEventListener('click', clearcart)
}



// Functions 
function buyCourse(e) {
    e.preventDefault();
    // console.log(e.target)

    // use delegaton to find course that was added
    if(e.target.classList.contains('btn')) {
        // console.log('Added')
        
        // read the course value
        var course = e.target.parentElement.parentElement;

        // read the value
        getCoureInfo(course);
    }
}


// read the HTML information of the selected course
function getCoureInfo(course) {
    // create an object with course data
    var courseInfo = {
        Image: course.querySelector('.add__menu--cart img').src,
        title: course.querySelector('h1').textContent,
        price: course.querySelector('.add__cart--dorlla span').textContent,
        id: course.querySelector('h1 a').getAttribute('data-id')
    }
    // Insert into the shooping cart
    addIntoCart(courseInfo);
}


// Display the selected course into the shoopin cart
function addIntoCart(course ) {
    //    create a <ul>
    var row = document.createElement('cart__content');

    // Build the template
    row.innerHTML = `
      <ul>
           <li>
                <img src="${course.Image}" width=130>
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

// remove course from the DOM
function removerCourse(e) {

    if(e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
    }
}


// clear course btn 
function clearcart() {
    // shoppingCartContent.innerHTML = '';

    while(shoppingCartContent.firstChild) {
        shoppingCartContent.removeChild(shoppingCartContent.firstChild)
    }
}
























































