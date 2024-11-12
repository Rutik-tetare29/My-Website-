document.getElementById('query-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let query = document.getElementById('query').value;

    // Basic validation
    if (name === "" || email === "" || query === "") {
        alert("Please fill all fields.");
        return;
    }

    // Use fetch or AJAX to send the data to a backend service (e.g., Formspree, Firebase)
    fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, query })
    })
    .then(response => response.json())
    .then(data => {
        alert("Your query has been submitted successfully!");
    })
    .catch(error => {
        alert("There was an error submitting your query.");
    });
});
