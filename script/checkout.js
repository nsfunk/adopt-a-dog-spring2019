/*Assignment 08 Dynamic Forms
function submitForm() {

  alert('Thank you! Your adoption form has been submitted!');
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let street = document.getElementById('street');
  let city = document.getElementById('city');
  let state = document.getElementById('state');
  let zip = document.getElementById('zip');
  let adoptStatus = document.getElementById('adopt-status');
  let pickupLocation = document.getElementById('pickup-location');

  const formInfo = [];

  formInfo.push(name.value);
  formInfo.push(email.value);
  formInfo.push(street.value);
  formInfo.push(city.value);
  formInfo.push(state.value);
  formInfo.push(zip.value);
  formInfo.push(pickupLocation.value);

  console.log(formInfo);
}
Assignment 09 form submission with jQuery*/
function submitForm() {

  alert('Thank you! Your adoption form has been submitted!');
  let name = $('#name');
  let email = $('#email');
  let street = $('#street');
  let city = $('#city');
  let state = $('#state');
  let zip = $('#zip');
  let adoptStatus = $('#adopt-status');
  let pickupLocation = $('#pickup-location');

  const formInfo = [];

  formInfo.push(name.value);
  formInfo.push(email.value);
  formInfo.push(street.value);
  formInfo.push(city.value);
  formInfo.push(state.value);
  formInfo.push(zip.value);
  formInfo.push(pickupLocation.value);

  console.log(formInfo);
}
