Parse.initialize("dr03VQl7j1K9OtXdXzbDsq0YLmtEAwxP2Ora4XUa", "WHuhCUUP5gFTbUxdSyv1itieaTDF7OSJBrF9ZY8w");

function sent(form) {

    var Guest = Parse.Object.extend("Guest");
    var guest = new Guest();
    guest.save({
        names: form.names.value,
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
