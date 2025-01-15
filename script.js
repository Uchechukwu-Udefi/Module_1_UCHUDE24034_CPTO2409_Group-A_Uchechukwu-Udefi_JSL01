function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    //let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

        let result = "";
        let regex = /^pet_\d{4}[A-Za-z]{1,30}$/;

    // Check if the input matches the regex
        if (regex.test(input)) {
            result = "Valid Syntax";
        } else {
            result = "Invalid Syntax";
        }

    // Display the result
        document.getElementById('result').innerText = result;
}


