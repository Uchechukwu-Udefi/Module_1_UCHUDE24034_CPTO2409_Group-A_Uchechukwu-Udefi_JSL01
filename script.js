function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    //let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters


        let result = ""
        let regex = /^pet_\d{4}[a-zA-Z]{1,30}$/;

       
        document.getElementById('result').innerText = result;
}


