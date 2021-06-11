var datum = new Date();
        var tag = datum.getDate();
        var monat = datum.getMonth() + 1;
        var year = datum.getFullYear();
        document.getElementById("datum").innerHTML = tag + "." + monat + "." + year + "!" ;  

        
        function austauschen(id, quelle) {
            document.getElementById(id).src=quelle;
        };

        function senden() {
            var nachname = document.getElementById("nachname");
            var email = document.getElementById("email");
            if(nachname.value == "") {
                alert(" Bitte geben Sie Ihren Nachnamen an!");
                nachname.focus();
                return false;
            }
            if(email.value == "") {
alert("Bitte geben Sie Ihre E-Mail");
email.focus();
return false;
            }
        };

        document.querySelector(".heuteData").style.background = "rgb(123, 209, 123)";
        document.querySelector("#datum").style.fontWeight="bold";
        ;