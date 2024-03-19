let first_name = document.getElementById("firstname");
let last_name = document.getElementById("lastname");
let Country = document.getElementById("country");
let Phoneno = document.getElementById("phonenumber");
let State = document.getElementById("state");
let City = document.getElementById("city");
let Village = document.getElementById("village");

function validateForm() {
   let firstName = localStorage.getItem('firstName') || prompt( "Please enter your First Name: ");
   localStorage.setItem( 'firstName', firstName );
   let  LastName = localStorage.getItem('lastName') || prompt( "Please enter your Last Name: ");
   localStorage.setItem( 'lastName', LastName );
   let country =  localStorage.getItem('country') || prompt( "Please enter your country ");
   localStorage.setItem( 'country', country );
   let phoneNumber = localStorage.getItem('phonenumber') || prompt( "Please enter your Phone Number: ");
   localStorage.setItem( 'phonenumber', phoneNumber );
   let state = localStorage.getItem('state') || prompt( "Please enter your state ");
   localStorage.setItem( 'state', state );
   let city = localStorage.getItem('city') || prompt( "Please enter your city ");
   localStorage.setItem( 'city', city );
   let village = localStorage.getItem('village') || prompt("Please enter your village");
   localStorage.setItem("village", village);
   showData(firstName,LastName,country,phoneNumber,state,city,village);
}
validateForm();

function showData(fistname,lastname,country,phonenumber,state,city,village){
    first_name.innerText = fistname;
    last_name.innerText = lastname;
    Country.innerText =  country;
    Phoneno.innerText = phonenumber;
    State.innerText = state;
    City.innerText = city;
    Village.innerText = village;
}