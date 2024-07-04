// buat change name awal
function replaceName() {
    let name = prompt("whats ur name ?","")
    document.getElementById("name").innerHTML = name;
}
replaceName();
document.getElementById('tombol').addEventListener("click", function(){
    replaceName();
});


// buat button submit kalau nama diisi dan tidak
let nameInput = document.getElementById("name-input");

document.getElementById("submit").addEventListener("click", function(){
    const nama = nameInput.value

    if (nama == ""){
        document.getElementById("error-name").innerHTML = "Form tidak boleh kosong"
    }else {
        document.getElementById('name-input').innerHTML = nama
        document.getElementById("error-name").innerHTML = "";
    }

})

document.getElementById('message-form').addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name-input").value;
    var birthDate = document.getElementById("tanggal").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var message = document.getElementById("pesan").value;

    if(gender) {
        gender = gender.value;
    }else{
        gender = '';
    }

    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = birthDate;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-message").innerText = message;


    document.getElementById("name-input").value = "";
    document.getElementById("tanggal").value = "";
    if(document.getElementById("male").checked) {
        document.getElementById("male").checked = false;
    }
    if(document.getElementById("female").checked) {
        document.getElementById("female").checked = false;
    }
    document.getElementById("pesan").value = "";
});