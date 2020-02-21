/*global window */
var document = window.document;

var qualifications = ["Bachelor of Architecture", "Bachelor of Arts", "Bachelor of Commerce", "Bachelor of Architecture"];
var experience = ["Fresher", "1-3 years", "4-5 years", "6 years or above"];
var i;
var option;
var q, e1;

function AddLanguage(languageName, isChecked) {
    'use strict';
    this.LanguageName = languageName;
    this.IsChecked = isChecked;
}

var LanguageArray = [new AddLanguage("c/c++", false), new AddLanguage("Java", true), new AddLanguage("C#", true), new AddLanguage("PHP",                             false), new AddLanguage("Python", false)];

window.onload = function () {
    'use strict';
    q = document.getElementById("qualification");
    for (i = 0; i < 4; i = i + 1) {
        option = document.createElement("option");
        option.value = qualifications[i];
        option.text = qualifications[i];
        q.appendChild(option);
    }
    
    q = document.getElementById("experience");
    for (i = 0; i < 4; i = i + 1) {
        option = document.createElement("option");
        option.value = experience[i];
        option.text = experience[i];
        q.appendChild(option);
    }
    
    for (i = 0; i < 5; i = i + 1) {
        q = document.getElementById("code" + (i + 1));
        q.checked = LanguageArray[i].IsChecked;
        q.label = LanguageArray[i].LanguageName;
    }
};

function Employee(fname, lname, email, number, address, uname, pass, gender, Qual, exp, codeL) {
    'use strict';
    this.FirstNAme = fname;
    this.LastName = lname;
    this.Email = email;
    this.Number = number;
    this.Address = address;
    this.Username = uname;
    this.Password = pass;
    this.Gender = gender;
    this.Qualification = Qual;
    this.Experience = exp;
    this.CodingLanguage = codeL;
}


function saveData() {
    'use strict';
    var first = document.getElementById("fname").value, last = document.getElementById("lname").value, eml = document.getElementById("email").value, num = document.getElementById("contact").value, add = document.getElementById("Address").value, un = document.getElementById("username").value, ps = document.getElementById("password").value, gen = document.getElementById("male"), qul = document.getElementById("qualification"), ex = document.getElementById("experience"), cl;
    
    if (gen.checked) {
        gen = "male";
    } else {
        gen = "female";
    }
    qul = qul.option[qul.selectedIndex].value;
    ex = ex.option[ex.selectedIndex].value;
    
    for (i = 0; i < 5; i = i + 1) {
        q = document.getElementById("code" + (i + 1));
        if (q.checked) {
            cl = cl + LanguageArray[i].LanguageName;
        }
    }
    
    e1 = new Employee(first, last, eml, num, add, un, ps, gen, qul, ex, cl);
    window.console.log(e1);
}




