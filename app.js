Parse.initialize("dr03VQl7j1K9OtXdXzbDsq0YLmtEAwxP2Ora4XUa", "WHuhCUUP5gFTbUxdSyv1itieaTDF7OSJBrF9ZY8w");

function sent(form) {

    var Guest = Parse.Object.extend("Guest");
    var guest = new Guest();

    var namePlusOne = "";
    var emailPlusOne = "";
    $(".morePersons").each(function() {
        namePlusOne += $(this)[0].value + ", ";
    });
    $(".moreEmails").each(function() {
        emailPlusOne += $(this)[0].value + ", ";
    });

    if (form.name.value == "" || form.email.value == "") {
        alert("Bitte gib Deine E-Mail und Deinen Namen an.");
        return;
    }

    if (form.comesToCeremony.checked == false && form.comesToParty.checked == false && form.doesNotCome.checked == false) {
        alert("Bitte sage uns, ob Du kommst oder nicht.");
        return
    }

    if (form.name.value == "" || form.email.value == "") {
        alert("Bitte gib Deine E-Mail und Deinen Namen an.");
        return;
    }

    if (form.comesToCeremony.checked == false && form.comesToParty.checked == false && form.doesNotCome.checked == false) {
        alert("Bitte sage uns, ob Du kommst oder nicht.");
        return
    }

    guest.save({
        name: form.name.value,
        email: form.email.value,
        namePlusOne: namePlusOne,
        emailPlusOne: emailPlusOne,
        comesToCeremony: form.comesToCeremony.checked,
        comesToParty: form.comesToParty.checked,
        doesNotCome: form.doesNotCome.checked,
        food: form.food.value
    }).then(function(object) {
        if (form.doesNotCome.checked) {
            window.location = "schade.html";
        } else {
            window.location = "danke.html";
        }
    });

    return true;
}

var numberOfMoreGuests = 0;

function addPerson(person) {

    $(person).before('<input class="moreEmails" placeholder="E-Mail" name="email' +
        numberOfMoreGuests + '" style="width: 80%;"><input class="morePersons" placeholder="Vorname Nachname" name="name' +
        numberOfMoreGuests + '" style="width: 80%;">');
    numberOfMoreGuests++;

    if (numberOfMoreGuests > 5) {
        $('#addPerson').addClass("disabled");
        $('#addPerson')[0].setAttribute("onclick", "");
    }
}
