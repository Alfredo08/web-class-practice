let errorMessages = {
    fullName: "",
    mail: "",
    password: "",
    passwordConf: "",
    country: "",
    sex: ""
}

let inputs = {
    inputs: "",
    select: "",
};

let genderSelected = {
    men: false,
    women: false,
    total: false
};


// function getKeys() {
//     let keys = Object.keys(errorMessages);

//     keys.forEach((item)=>{
//         errorMessages[item] = document.getElementById(item+"Error");
//     });

//     console.log(errorMessages);
// }

// function getInputs() {
//     inputs.inputs = document.getElementsByTagName("input");
//     inputs.select = document.getElementsByTagName("option");

//     console.log(inputs);
// }


// function getInfo() {
//     console.log("getInfo");
//     getInputs();
//     getKeys();
// }

// function checkInfo() {
//     console.log("checkInfo");

//     // console.log(inputs.inputs[0].value);

//     // let keys = Object.keys(errorMessages);

//     console.log(typeof inputs.inputs); 

//     let values = Object.values(inputs.inputs);

//     console.log(values);

//     if (inputs.select[0].selected) {
//         errorMessages.country.textContent = "Missing country";
//     } else {
//         errorMessages.country.textContent = "";
//     }

//     values.forEach((item)=>{
//         if (!(item.id == "men" || item.id == "women")) {
//             if (item.value == "") {
//                 errorMessages[item.id].textContent = "Missing " + item.id;  
//             } else {
//                 errorMessages[item.id].textContent = "";  
//             }
//         } else {
//             if (item.select) {
//                 genderSelected = true;
//             }

//             if (genderSelected) {
//                 errorMessages["sex"].textContent = ""; 
//             } else {
//                 errorMessages["sex"].textContent = "Missing gender"; 
//             }
//         }
//         console.log(item);
//     });


// }

// let button = document.getElementById("submitButton");
// button.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log("clicked");

//     getInfo();
//     checkInfo();

// });

// function watchForm() {
//     let submitButton = document.getElementById("submitButton");

//     submitButton.addEventListener("click", (event) => {
//         console.log("clicked");
//         event.preventDefault();

//         // Validate the fullName input

//         let fullName = document.getElementById("fullName");
//         let fullNameErrorMessage = document.getElementById("fullNameError");

//         if (fullName.value === "") {
//             fullNameErrorMessage.textContent = "Please give your name";
//         } else {
//             fullNameErrorMessage.textContent = "";
//         }

//         // Validate the email input

//         let email = document.getElementById("email");
//         let emailError = document.getElementById("emailError");

//         if (email.value === "") {
//             // emailError.textContent = "Please provide your email";
//             emailError.hidden = false;
//         } else {
//             // emailError.textContent = "";
//             emailError.hidden = true;
//         }

//         // Validate dropdown menu for country

//         let country = document.getElementById("country");
//         let countryError = document.getElementById("countryError");

//         if (country.value === "0") {
//             countryError.hidden = false;
//         } else {
//             countryError.hidden = true;
//         }

//         // Validate gender

//         let gender = document.getElementsByName("gender");
//         let genderError = document.getElementById("genderError");

//         if (!(gender[0].checked || gender[1].checked)) {
//             genderError.hidden = false;
//         } else {
//             genderError.hidden = true;
//         }

//     });

//     let menuItems = document.getElementsByTagName("li");

//     for (let i = 0; i < menuItems.length; i++) {
//         menuItems[i].addEventListener("click", (event) => {
//             event.preventDefault();
//             let selected = document.getElementsByClassName("selected");
//             let section = document.getElementById(selected[0].id + "Section")    
//             section.hidden = true;
//             section.className = "";
//             selected[0].className = "";
//             section = document.getElementById(event.target.id + "Section");
//             section.hidden = false;
//             section.className = "currentSelected";
//             event.target.className = "selected";
//         });
//     }
// }

// watchForm();


// jQuery

// let elem = '<h1> Title </h1>'

// let div = '<div> ${elem} </div>';

// let id = $("#id"); // jQuery(".class")

// let divs = $("div");

// let input = $("input[name='gender']")

// let menu = $("#menu");

// $(menu).attr("class", "newClass");
// $(menu).addClass("newClass");
// $(menu).removeClass("oldClass");

// $(menu).text("text");
// $(menu).html('<div> ... </div>');

// $(menu).append();
// $(menu).parent();
// $(menu).hide();
// $(menu).show();
// $(menu).next();

// $(menu).find(".selected", function(elem) {
//     $(this).removeClass("selected");
// });

// $(input).val();

// $("li").on("click", function(event) {
//     event.preventDefault();
//     console.log($(this).text());
//     console.log($(event.target).text());
// });

function watchForm() {
    let navBar = $("#navMenu");

    // console.log(navBar);

    $("li").on("click", function(event) {
        event.preventDefault();
        let selected = $(".selected");
        let section = $("#" + $(selected).attr('id') + "Section");
        $(section).hide();
        $(section).removeClass("currentSelected");
        $(selected).removeClass("selected");
        $(event.target).addClass("selected");
        section = $("#" + $(event.target).attr('id') + "Section");
        $(section).show();
        $(section).addClass("currentSelected");
    })

    $("#submitButton").on("click", function(event) {
        event.preventDefault();

        let fullName = $("#fullName");
        let email = $("#email");
        let password = $("#password");
        let passwordConf = $("#passwordConf");
        let country = $("#country");
        let gender = $("input[name='gender']");

        if (fullName.val() === "") {
            $("#fullNameError").show();
        } else {
            $("#fullNameError").hide();
        }

        if (email.val() === "") {
            $("#emailError").show();
        } else {
            $("#emailError").hide();
        }

        if (password.val() === "") {
            $("#passwordError").show();
        } else {
            $("#passwordError").hide();
        }

        if (passwordConf.val() === "") {
            $("#passwordConfError").show();
        } else {
            $("#passwordConfError").hide();
        }

        if (country.val() === "0") {
            $("#countryError").show();
        } else {
            $("#countryError").hide();
        }
        
        console.log(gender);

        if (gender.checked()) {
            $("#genderError").show();
        } else {
            $("#genderError").hide();
        }

    })
}

watchForm();