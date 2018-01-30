window.onload = function(){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             obj = JSON.parse(this.responseText);
        }
    };
    req.open("GET", "pokemons.json", true);
    req.send();

    document.forms['submitForm'].onsubmit = function () {
        var screen = document.querySelector('#screenRight');
        var imageLink = document.querySelector('#imageLink');
        var errors = document.querySelector('#errors');
        var pokeName = document.querySelector('#pokedexName').value;
        screen.innerHTML ='';

        var formValid = false;

        for (var i in obj) {
            if (pokeName == i || pokeName == obj[i].name.toLowerCase()) {
                screen.innerHTML = 'Name:' + obj[i].name + '<br/> <br/>' + 'Type:' + obj[i].type;
                imageLink.src = 'http://img.pokemondb.net/artwork/' + obj[i].name.toLowerCase() + '.jpg';
                formValid = true;
            }
        }
            if (formValid === false) {
                errors.innerHTML = "Pokemon not found";
                if (isNaN(pokeName)) {
                    errors.innerHTML = pokeName + " not found";
                } else {
                    errors.innerHTML = "Pokemon number " + pokeName + " not found";
                }
            }
            return false;
        };
    };
