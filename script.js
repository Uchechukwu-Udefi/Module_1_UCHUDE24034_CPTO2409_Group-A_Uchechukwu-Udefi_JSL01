function validateSyntax() {
    // Get the input value and remove whitespace
    let input = document.getElementById('petInput').value.trim(); 

    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    // Check if input starts with 'pet_' and followed by alphanumeric characters

    // Define the regular expression pattern
    let regex = /^pet_[0-9]{4}[A-Za-z]{1,20}$/; 

    // Check if the input matches the regex
        if (regex.test(input)) {
            result = "Valid Syntax \u{1F7E2}"; 
        } else {
            result = "Invalid Syntax \u{1F534}";
        }

    // Display the result
    document.getElementById('result').innerText = result;
}


