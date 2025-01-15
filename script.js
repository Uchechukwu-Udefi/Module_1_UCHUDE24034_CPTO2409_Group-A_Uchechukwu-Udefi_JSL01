function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    //let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters


       let result = ""
       if (result === "pet_" + result === "0-9" + result === "a-z") {
           result = "Valid Syntax";
       } else {
           result = "Invalid Syntax";
       }
            
            document.getElementById('result').innerText = result;
}


