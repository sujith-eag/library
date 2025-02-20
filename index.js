document.addEventListener('DOMContentLoaded', function() {
    // Get the buttons
    const pyButton = document.getElementById('PyButton');
    const jsButton = document.getElementById('JsButton');
    const JsdomButton = document.getElementById('JsdomButton');
    const CdsButton = document.getElementById('CdsButton');
    
    // Get the containers of topic cards
    const pythonContainer = document.getElementById('PythonContainer');
    const jsContainer = document.getElementById('JsContainer');
    const JsdomContainer = document.getElementById('JsdomContainer');
    
    const CdsContainer = document.getElementById('CdsContainer');    
    // Toggle the Python topic cards visibility when PyButton is clicked
    pyButton.addEventListener('click', function() {
        if (pythonContainer.classList.contains('active')) {
            pythonContainer.classList.remove('active');
        } else {
            pythonContainer.classList.add('active');
        }
    });

    // Toggle the JavaScript topic cards visibility when JsButton is clicked
    jsButton.addEventListener('click', function() {
        if (jsContainer.classList.contains('active')) {
            jsContainer.classList.remove('active');
        } else {
            jsContainer.classList.add('active');
        }
    });

    // Toggle the Jsdom topic cards visibility when JsdomButton is clicked
    JsdomButton.addEventListener('click', function() {
        if (JsdomContainer.classList.contains('active')) {
            JsdomContainer.classList.remove('active');
        } else {
            JsdomContainer.classList.add('active');
        }
    });  
    
    // Toggle the Cds topic cards visibility when CdsButton is clicked
    CdsButton.addEventListener('click', function() {
        if (CdsContainer.classList.contains('active')) {
            CdsContainer.classList.remove('active');
        } else {
            CdsContainer.classList.add('active');
        }
    });  
    
    
});






// To Add link to every card

const topicCards = document.querySelectorAll('.topicCard');

topicCards.forEach(topic => {
    topic.addEventListener('click', () => {
        // window.location.href = topic.getAttribute('data-url');  opens locally
        window.open(topic.getAttribute('data-url'), '_blank' );
    });
});