Parse.initialize("dr03VQl7j1K9OtXdXzbDsq0YLmtEAwxP2Ora4XUa", "WHuhCUUP5gFTbUxdSyv1itieaTDF7OSJBrF9ZY8w");

function sent(form) {

    var Guest = Parse.Object.extend("Guest");
    var guest = new Guest();
    guest.save({
        names: form.names.value,
        comesToCeremony: form.comesToCeremony.checked,
        comesToParty: form.comesToParty.checked,
        food: form.food.value
    }).then(function(object) {
        alert('Vielen Dank. Wir freuen uns.');
        form.reset();
    });
}
