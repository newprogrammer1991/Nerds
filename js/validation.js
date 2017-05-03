/**
 * Created by ALI on 4/29/2017.
 */
"use strict";
(function () {
    var formMessage = document.forms.message;
    var target;
    formMessage.addEventListener("submit", valid);

    function valid(event) {
        target = event;
        var userName = formMessage.elements["user"];
        var userEmail = formMessage.elements["email"];
        var userText = formMessage.elements["text"];
        var elemError = document.querySelectorAll(".message-error");
        for (var i = 0; i < elemError.length; i++) {
            if (elemError[i].style.display === "block") {
                elemError[i].style.display = "none";
            }
        }
        if (!userName.value) {
            error(userName);
        }

        if (!userEmail.value) {
            error(userEmail);
        }

        if (!userText.value) {
            error(userText);
        }


    }

    function error(elem) {
        elem.nextElementSibling.style.display = "block";
        target.preventDefault();
    }

})();

