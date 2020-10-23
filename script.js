function validateForm() {

    var validateFirstNum = validateFirstName();
    var validateLastNum = validateLastName();
    var validatePNumber = validatePhoneNumber();
    var validateMail = validateEmail();
    var validateAdd = validateAddress();
    var validateCountryVar = validateCountry();
    var validateStateVar = validateState();
    var validateCityVar = validateCity();
    
    if(validateFirstNum && validateLastNum && validatePNumber && validateMail && validateAdd && validateCountryVar && validateStateVar && validateCityVar)	{
        return true; 
    }
    else{
        return false;
    }	
}
function validateFirstName(){
    //validating first name
    var firstNameLabel = document.getElementById("first-name-label");
    var firstName = document.getElementById("first-name");
    var firstNameError = document.getElementById("first-name-error");
    var validateFName = validateName(firstNameLabel, firstName, firstNameError);
    return validateFName;
}
function validateLastName(){
      // validating last name
      var lastNameLabel = document.getElementById("last-name-label");
      var lastName = document.getElementById("last-name");
      var lastNameError = document.getElementById("last-name-error");
      var validateLName = validateName(lastNameLabel, lastName, lastNameError);
      return validateLName;
}
function validateName(nameLabel, name, nameError){
    // having only characters and of length 2 to 20
    var nameRegex = /^[a-zA-Z ]{2,20}$/;
    if (!(name.value.match(nameRegex))) {
        nameLabel.style.color = "red";
        name.style.border = "2px solid red";
        nameError.style.visibility = "visible";
        return false;
    }
    else{
        nameLabel.style.color = "grey";
        name.style.borderColor = "grey";
        nameError.style.visibility = "hidden";
        return true;
    }
}
function validatePhoneNumber(){
    var phoneNumberLabel = document.getElementById("phone-number-label");
    var phoneNumber = document.getElementById("phone-number");
    var phoneNumberError = document.getElementById("phone-number-error");
    // regex for validating 10 digit phone number
    var numType = /^\d{10}$/;

    if(!(phoneNumber.value.match(numType))){
        phoneNumberLabel.style.color = "red";
        phoneNumber.style.borderColor = "red";
        phoneNumberError.style.visibility = "visible";
        return false;
    }
    else{
        phoneNumberLabel.style.color = "grey";
        phoneNumber.style.borderColor = "grey";
        phoneNumberError.style.visibility = "hidden";
        return true;
    }
}
function validateEmail(){
    var emailLabel = document.getElementById("email-label");
    var email = document.getElementById("email");
    var emailError = document.getElementById("email-error");
    // regex for validating email having '@companyname.com' as suffix
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([a-zA-Z])+\.(com)$/;

    if(!(email.value.match(mailformat))){
        emailLabel.style.color = "red";
        email.style.borderColor = "red";
        emailError.style.visibility = "visible";
        return false;
    }
    else{
        emailLabel.style.color = "grey";
        email.style.borderColor = "grey";
        emailError.style.visibility = "hidden";
        return true;
    }
}
function validateAddress(){
    var addressLabel = document.getElementById("address-label");
    var address = document.getElementById("address");
    var addressError = document.getElementById("address-error");
    // checking if address has atleast 3 characters
    if(address.value.length < 3){
        addressLabel.style.color = "red";
        address.style.borderColor = "red";
        addressError.style.visibility = "visible";
        return false;
    }
    else{
        addressLabel.style.color = "grey";
        address.style.borderColor = "grey";
        addressError.style.visibility = "hidden";
        return true;
    }
}
function validateCountry(){
    var countryLabel = document.getElementById("country-label");
    var country = document.getElementById("country");
    var countryError = document.getElementById("country-error");

    if (country.value == "default") {
        countryLabel.style.color = "red";
        country.style.borderColor = "red";
        countryError.style.visibility = "visible";
        return false;
    }
    else{
        countryLabel.style.color = "grey";
        country.style.borderColor = "grey";
        countryError.style.visibility = "hidden";
        return true;
    }
}
function validateState(){
    var stateLabel = document.getElementById("state-label");
    var state = document.getElementById("state");
    var stateError = document.getElementById("state-error");

    if (state.value == "default") {
        stateLabel.style.color = "red";
        state.style.borderColor = "red";
        stateError.style.visibility = "visible";
        return false;
    }
    else{
        stateLabel.style.color = "grey";
        state.style.borderColor = "grey";
        stateError.style.visibility = "hidden";
        return true;
    }
}
function validateCity(){
    var cityLabel = document.getElementById("city-label");
    var city = document.getElementById("city");
    var cityError = document.getElementById("city-error");

    if (city.value == "" || city.value == null) {
        cityLabel.style.color = "red";
        city.style.borderColor = "red";
        cityError.style.visibility = "visible";
        return false;
    }
    else{
        cityLabel.style.color = "grey";
        city.style.borderColor = "grey";
        cityError.style.visibility = "hidden";
        return true;
    }
}
