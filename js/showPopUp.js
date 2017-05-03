"use strict";

(function () {
    var closeElement = document.querySelector(".modal-content-close");
    var feedback = document.querySelector(".feedback");
    var popUp = document.querySelector(".modal-content");
    var cancelElement = document.querySelector(".message-cancel");


    feedback.addEventListener("click", show);
    closeElement.addEventListener("click", close);
    cancelElement.addEventListener("click", close);
    function show(event) {
        event.preventDefault()
        popUp.classList.add("modal-content-show");
    };
    function close() {
        popUp.classList.remove("modal-content-show");
    };
})();