function changeUpper(){
    let namee = document.getElementById('name');
    let lastName = document.getElementById('lastName');
    let desc = document.getElementById('desc');
    
    namee.value = namee.value.toUpperCase();
    lastName.value = lastName.value.toUpperCase();
    desc.value = desc.value.toUpperCase();
}