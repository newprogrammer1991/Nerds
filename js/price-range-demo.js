(function () {
var elementMin = document.getElementsByClassName("thumb-start")[0];
var elementMax = document.getElementsByClassName("thumb-end")[0];
var unvisible = document.getElementsByClassName("price-range-helper")[0];
var scale = document.getElementsByClassName("price-range-scale")[0];
var shiftX;
var aimCoords;
var isTrue;
var lineCoords;
var element;
document.ondragstart = function () {
    return false;
};
document.addEventListener("mousedown", function (event) {
    var target = event.target;
     if(target.className==elementMin.className||target.className==elementMax.className) {
         element = target;
         aimCoords = getCoords(element);
         shiftX = event.pageX - aimCoords.left;
         var line = document.getElementsByClassName("price-range")[0];
         lineCoords = getCoords(line);
         isTrue = true;
     }
});

document.addEventListener("mouseup", function () {
    isTrue = false;
});

document.addEventListener("mousemove", function (e) {
    if (isTrue) {

        var newCoords = e.pageX - shiftX - lineCoords.left;
        if (!check(newCoords)) {
            element.style.left = newCoords + "px";
            changeLine(newCoords);
        }
    }
});
function changeLine(coords) {
    if (element.className == "thumb-end") {
        scale.style.width = coords + "px";
        return;
    }
    unvisible.style.width = coords + "px";
    console.log(getComputedStyle(element).width);
};
function check(coords) {
    if (coords < 0 || coords > lineCoords.right - lineCoords.left - parseInt(getComputedStyle(element).width)) {
        return true;
    }
};

function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
        right: box.right
    }
};
})();