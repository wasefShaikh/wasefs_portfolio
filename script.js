// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = this.elements['name'].value;
    const email = this.elements['email'].value;
    const message = this.elements['message'].value;

    // Normally you would send this data to a server using fetch or XMLHttpRequest
    // For this example, let's just log the values to console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, clear the form fields after submission
    this.reset();

    // Display a confirmation message (you can customize this)
    alert('Your message has been sent! Thank you.');
});


document.addEventListener('DOMContentLoaded', function() {
    const skills = [
        "Programming in C ",
        "Programming in C++",
        "Web designer",
        "Python (NumPy, Pandas, Matplotlib, Seaborn)",
        "SQL(Structure Query Language)",
        "Advance Excel",
        "Google Looker Studio",
        "Google Sheets",
        "PowerBI",
        "Tableau",
        "Tally ERP9 with GST"
    ];

    let index = 0;
    let charIndex = 0;
    const speed = 50; // Typing speed in milliseconds
    const pauseDuration = 1000; // Pause between skills
    const container = document.getElementById('typewriter');

    function typeWriter() {
        if (index < skills.length) {
            const currentSkill = skills[index];
            
            if (charIndex < currentSkill.length) {
                container.textContent += currentSkill.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, speed);
            } else {
                // After typing the current skill, pause and then clear the text in reverse
                setTimeout(() => {
                    function clearTextReverse() {
                        if (charIndex > 0) {
                            container.textContent = container.textContent.slice(0, -1);
                            charIndex--;
                            setTimeout(clearTextReverse, speed);
                        } else {
                            // Reset and move to the next skill
                            index = (index + 1) % skills.length; // Loop back to the first skill
                            charIndex = 0; // Reset charIndex for the next skill
                            typeWriter(); // Call function recursively
                        }
                    }
                    clearTextReverse(); // Start clearing text in reverse
                }, pauseDuration);
            }
        }
    }

    typeWriter();
});




// document.addEventListener('DOMContentLoaded', function() {
//     const skills = [
//         "Python (NumPy, Pandas, Matplotlib, Seaborn)",
//         "SQL",
//         "Advanced Excel",
//         "Google Looker Studio",
//         "Google Sheets",
//         "PowerBI",
//         "Tableau"
//     ];

//     let index = 0;
//     let charIndex = 0;
//     const speed = 50; // Typing speed in milliseconds
//     const pauseDuration = 1000; // Pause between skills
//     const container = document.getElementById('typewriter');

//     function typeWriter() {
//         if (index < skills.length) {
//             if (charIndex < skills[index].length) {
//                 container.textContent += skills[index].charAt(charIndex);
//                 charIndex++;
//                 setTimeout(typeWriter, speed);
//             } else {
//                 // After typing the current skill, pause and then clear the text
//                 setTimeout(() => {
//                     container.textContent = ''; // Clear text
//                     charIndex = 0;
//                     index = (index + 1) % skills.length; // Loop back to the first skill
//                     typeWriter(); // Call function recursively
//                 }, pauseDuration);
//             }
//         }
//     }

//     typeWriter();
// });
// ------------------------------------------------------------------------------------------------------------------------



// Save an item to local storage
function savePortfolioItem(itemName, itemDetails) {
    const portfolio = JSON.parse(localStorage.getItem('portfolio')) || {};
    portfolio[itemName] = itemDetails;
    localStorage.setItem('portfolio', JSON.stringify(portfolio));
}

// Retrieve all portfolio items from local storage
function getPortfolioItems() {
    return JSON.parse(localStorage.getItem('portfolio')) || {};
}

// Display portfolio items
function displayPortfolio() {
    const portfolio = getPortfolioItems();
    const container = document.getElementById('portfolio-container');
    container.innerHTML = '';

    for (const [name, details] of Object.entries(portfolio)) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'portfolio-item';
        itemDiv.innerHTML = `<h3>${name}</h3><p>${details}</p>`;
        container.appendChild(itemDiv);
    }
}

// Example usage
savePortfolioItem('Project A', 'Details about Project A');
displayPortfolio();
