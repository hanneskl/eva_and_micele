Parse.initialize("dr03VQl7j1K9OtXdXzbDsq0YLmtEAwxP2Ora4XUa", "WHuhCUUP5gFTbUxdSyv1itieaTDF7OSJBrF9ZY8w");

function sent(form) {

    var Guest = Parse.Object.extend("Guest");
    var guest = new Guest();

    var namePlusOne = "";
    $(".morePersons").each(function() {
        namePlusOne += $(this)[0].value + ", ";
    });

    guest.save({
        name: form.name.value,
        namePlusOne: namePlusOne,
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

    $(person).before('<input class="morePersons" placeholder="Vorname Nachname" name="name' + numberOfMoreGuests + '" style="width: 80%;">');
    numberOfMoreGuests++;

    if (numberOfMoreGuests > 5) {
        $('#addPerson').addClass("disabled");
        $('#addPerson')[0].setAttribute("onclick", "");
    }
}
