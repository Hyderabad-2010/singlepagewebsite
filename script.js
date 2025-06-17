 var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    console.log(event)
    console.log("Hello")

    //  ✅ Works as expected

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

    var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0"
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
    } 

const scriptURL ='https://script.google.com/macros/s/AKfycbzsOeUJJp4Pqq-DFiCcH7bst-lAqFSowXOq92wrwV7d0zNGIR9OrP3OeMqhS-E9FoOe/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfull";
     setTimeout(function(){
        msg.innerHTML = "";
     },5000);
     form.reset();
    });
    msg.catch(error => console.error('Error!', error.message));
});
