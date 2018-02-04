
let containerView = "#containerView";
let vistaActual = "homeView";

$(".navOption").click(function (eventData) {
    var elementId = String(eventData.target.id);
    if (vistaActual !== elementId) {
        vistaActual = elementId;
        elementId = ("html/".concat(elementId)).concat(".html");
        $(containerView).empty();
        $(containerView).load(elementId);
    }
});

window.onload = function ( ) {
    var initialView = ("html/".concat(vistaActual)).concat(".html");
    $(containerView).load(initialView);
}