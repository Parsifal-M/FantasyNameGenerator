//Male Names
function maleNames() {

  //First Name + Last Name Generation
  var firstname = ["Hagan", "Jedrek", "Adrien", "Mann", "Magnar", "Helmer", "Cayden", "Karamat", "Isiah", "Indivar", "Lorcan", "Valdus", "Hamza", "Evander", "Cadman", "Tor", "Ivar", "Aeneas", "Beorn", "Sio", "Jek", "Toht"];
  var lastname = ["Adara", "Cruz", "Reeves", "Goddard", "Ibara", "Kubiak", "Koch", "Mudd", "Estes", "Celeborn", "Durin", "-3", "-5", "Hurin", "Cowan", "Krause", "Cadan", "Ern", "Lago", "Sailburn","Amira","Ammar","Amour","Amouroux","Amrani","Amraoui","Cabrera","Flores","Campos","Vega","Diez","Fuentes","Carrasco","Caballero","Nieto","Reyes"];
  var rand_first = firstname[Math.floor(Math.random() * firstname.length)];
  var rand_last = lastname[Math.floor(Math.random() * lastname.length)];

  //Final Result
  let textData = `${rand_first} ${rand_last}`

  return textData;
}

//Female Names
function femaleNames() {

  //First Name + Last Name Generation
  var firstname = ["Athena", "Artemis", "Domino", "Ember", "Freya", "Juno", "Nova", "Tempest", "Manon", "Asterin", "Quinn", "Valentina", "Zona", "Virginia", "Rey", "Mara", "Jade", "Jaina", "Aayla", "Sella", "Hera", "Bastilla"];
  var lastname = ["Adara", "Cruz", "Reeves", "Goddard", "Ibara", "Kubiak", "Koch", "Mudd", "Estes", "Celeborn", "Durin", "-3", "-5", "Hurin", "Cowan", "Krause", "Cadan", "Ern", "Lago", "Sailburn","Amira","Ammar","Amour","Amouroux","Amrani","Amraoui","Cabrera","Flores","Campos","Vega","Diez","Fuentes","Carrasco","Caballero","Nieto","Reyes"];
  var rand_first = firstname[Math.floor(Math.random() * firstname.length)];
  var rand_last = lastname[Math.floor(Math.random() * lastname.length)];

  //Final Result
  let femaleTextData = `${rand_first} ${rand_last}`

  return femaleTextData;
}

//Create the Data on screen
function onScreenData() {

  if(document.getElementById('genderRadioMale').checked) {
    document.getElementById("datalog").innerHTML = maleNames();
    document.getElementById("lastdata").innerHTML += document.getElementById("datalog").innerHTML + "<br />";
  }else if(document.getElementById('genderRadioFemale').checked) {
    document.getElementById("datalog").innerHTML = femaleNames();
    document.getElementById("lastdata").innerHTML += document.getElementById("datalog").innerHTML + "<br />";
  }

}

//Clear the Data
function clearScreenData() {
  document.getElementById("lastdata").innerHTML = "";
}