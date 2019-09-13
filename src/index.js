let errorMessages = {
    name: "",
    mail: "",
    pwd: "",
    pwdConf: "",
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


function getKeys() {
    let keys = Object.keys(errorMessages);

    keys.forEach((item)=>{
        errorMessages[item] = document.getElementById(item+"Error");
    });

    console.log(errorMessages);
}

function getInputs() {
    inputs.inputs = document.getElementsByTagName("input");
    inputs.select = document.getElementsByTagName("option");

    console.log(inputs);
}


function getInfo() {
    console.log("getInfo");
    getInputs();
    getKeys();
}

function checkInfo() {
    console.log("checkInfo");

    // console.log(inputs.inputs[0].value);

    // let keys = Object.keys(errorMessages);

    console.log(typeof inputs.inputs); 
    
    let values = Object.values(inputs.inputs);

    console.log(values);

    if (inputs.select[0].selected) {
        errorMessages.country.textContent = "Missing country";
    } else {
        errorMessages.country.textContent = "";
    }

    values.forEach((item)=>{
        if (!(item.id == "men" || item.id == "women")) {
            if (item.value == "") {
                errorMessages[item.id].textContent = "Missing " + item.id;  
            } else {
                errorMessages[item.id].textContent = "";  
            }
        } else {
            if (item.select) {
                genderSelected = true;
            }

            if (genderSelected) {
                errorMessages["sex"].textContent = ""; 
            } else {
                errorMessages["sex"].textContent = "Missing gender"; 
            }
        }
        console.log(item);
    });

    
}

let button = document.getElementById("submitButton");
button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("clicked");

    getInfo();
    checkInfo();

});

function watchForm() {
    let submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", (event) => {
        console.log("clicked");
        event.preventDefault();
        
    });
}

