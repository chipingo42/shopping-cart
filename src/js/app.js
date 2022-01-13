// Variables
var courses = document.querySelector('#online__courses'),
    shoppingCartContent = document.querySelector('#pull-up-id')


// Listeners
loadEventListener();

function loadEventListener() {
    courses.addEventListener('click', buyCourse);
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
        Image: course.querySelector('img').src,
        title: course.querySelector('h1').textContent,
        price: course.querySelector(['h2','h3']).textContent,
        id: course.querySelector('button').getAttribute('btn-id')
    }
    // Insert into the shooping cart
    addIntoCart(courseInfo);
}
// Display the selected course into the shoopin cart
function addIntoCart(course ) {
    //    create a <ul>
    var row = document.createElement('ul');

    // Build the template
    row.innerHTML = `
      <ul>
           <li>
                <img src="${course.Image}">
           </li>
           <li>${course.title}</li>
           <li>${course.price}</li>
           <li>
                <a href="#" class="btn__clear" id="clear-btn"${course.price}">X</a>
           </li>
      </ul>

    `;
    // Add into the shopping cart
    shoppingCartContent.appendChild(row);
    console.log('added')
}

























































