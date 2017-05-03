/**
 * Created by ALI on 5/2/2017.
 */
"use strict";
(function () {
    document.addEventListener("mousedown", mousedown);
    document.addEventListener("mouseup", mouseup);

    document.ondragstart = function () {
        return false;
    };
    document.addEventListener("mousemove", move);

    var rangeWidthStart,
        element,
        elementCoords,
        wrapperCoords,
        shiftX,
        range,
        startX,
        wrapper, elementLeftStart;
    var elementRight = document.querySelector(".thumb-max");
    var elementLeft = document.querySelector(".thumb-min");

    function mousedown(event) {
        wrapper = document.querySelector(".price-range");
        range = document.querySelector(".price-range-scale");
        wrapperCoords = getCoords(wrapper);
        element = event.target;
        elementCoords = getCoords(element);
        shiftX = event.pageX - elementCoords.left;
        startX = event.pageX;
        rangeWidthStart = getComputedStyle(range).width;
        elementLeftStart = getComputedStyle(element).left;
    };
    function mouseup() {
        element = null;
    };
    function move(e) {
        var moveX = e.pageX - startX;
        if (element && Math.abs(moveX) > 4) {

            var newCoords = e.pageX - shiftX - wrapperCoords.left;
            if (newCoords < 0) {
                newCoords = 0;
            }
            if (newCoords > wrapper.offsetWidth) {
                newCoords = wrapper.offsetWidth;
            }
            var delta = newCoords - parseInt(elementLeftStart);
            element.style.left = newCoords + "px";
            if (element.className == "thumb-max") {
                range.style.width = parseInt(rangeWidthStart) + delta + "px";
            }
            else {
                range.style.left = newCoords + "px";
                range.style.width = parseInt(rangeWidthStart) - delta + "px";
            }


        }
    };
    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            left: box.left + pageXOffset,
            right: box.right
        }

    };
})();