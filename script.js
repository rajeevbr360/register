$(document).ready(function() {
    $("#registrationForm").on("submit", function(e) {
        e.preventDefault();  // Prevent default form submission

        let name = $("#name").val();
        let email = $("#email").val();
        let age = $("#age").val();
        let address = $("#address").val();

        // Display success message with the form data
        $("#successMessage").show();
        $("#displayName").text("Full Name: " + name);
        $("#displayEmail").text("Email: " + email);
        $("#displayAge").text("Age: " + age);
        $("#displayAddress").text("Address: " + address);

        // Optionally, send data to the server using AJAX
        $.post("submit.php", { name: name, email: email, age: age, address: address }, function(response) {
            console.log(response);  // Handle server response (optional)
        });
    });
});
