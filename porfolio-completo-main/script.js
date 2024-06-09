//Applies the style to the selected option and quits the previously selected
function select(link) {
    var options = document.querySelectorAll('#links  a');
    options[0].className = "";
    options[1].className = "";
    options[2].className = "";
    options[3].className = "";
    options[4].className = "";
    link.className = "selected";

    //Makes the menu dissappear when an option is selected in responsive mode
    var x = document.getElementById("nav");
    x.className = "";
}

//Shows responsive menu
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//Form validation


function validateForm() {
    
    var name = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("mensaje").value.trim();
  
    
  
    if (name === "" || email === "" || message === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    }
  
    for (var i = 0; i < name.length; i++) {
      var charCode = nombre.charCodeAt(i);
      if (
        !(
          (charCode >= 65 && charCode <= 90) ||
          (charCode >= 97 && charCode <= 122) ||
          charCode === 32
        )
      ) {
        alert("El campo 'nombre' solo puede contener letras y espacios.");
        return false;
      }
    }
  
    var emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (!email.match(emailRegEx)) {
      alert("La dirección de email es incorrecta");
      return false;
    }
  
    if (message.length > 500) {
      alert("El campo 'descripción' no debe superar los 500 caracteres.");
      return false;
    } 
    
  
    alert("Formulario enviado correctamente.");
    return true;
  }


//ScrollReveal

window.sr = ScrollReveal();

sr.reveal("h1", {
  duration:2000,
  delay: 600,
  scale:"0.2",
  distance:"10px",
  origin:"top",
  reset:true,
 
})

sr.reveal("h2", {
  duration:2000,
  delay:1200,
  scale:"0.2",
  distance: "10px",
  origin:"bottom",
  reset:true,
 
})

sr.reveal(".welcome", {
  duration:2000,
  scale:"0.5",
  distance: "20px",
  reset:true,
 
})

sr.reveal(".container-photo", {
  duration:4000,
  scale:"0.3",
  origin: "left",
  reset:true
})

sr.reveal(".sr-aboutme", {
  duration:4000,
  origin: "right",
  distance: "120px",
  reset:true
})

sr.reveal(".sr-services", {
  duration:4000,
  origin: "bottom",
  distance: "50px", 
  reset:true,
  easing: 'cubic-bezier(0.3, 0.4, 0.3, 1.3)',
  scale:0.7,
  opacity:0
})

sr.reveal(".list", {
  duration:4000,
  origin: "right",
  distance: "50px",
  reset:true,
  rotate: {
    y:60,
}
})

sr.reveal(".sr-contact", {
  duration:4000,
  scale:"0.5",
  distance: "20px",
  reset:true
});

//Multilanguage script

//const flagsElement = document.getElementById("flags");

//const textsToChange = document.querySelectorAll("[data-section]");

//const changeLanguage = async (language) => {
 // const reqestJson = await fetch(`./languages/${language}.json`);
 // const texts = await requestJson.json();

//for ( const textToChange of textsToChange) {
  //const section = textToChange.dataset.section;
  //const value = textToChange.dataset.value;

 // textToChange.innerHTML = texts[section][value];
//}};

//flagsElement.addEventListener("click", (e) => {
//changeLanguage(e.target.parentElement.dataset.language);
//console.log(e.target);
//});

var changeLang = async (language) => {
  const request = await fetch(`./languages/${language}.json`);
  const response = await request.json();

  console.log(response);
}

const select = document.getElementById("flags");
addEventListener('change', function() { 
  changeLang(this.value); 
}   
);
