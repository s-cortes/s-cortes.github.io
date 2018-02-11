const view = "View";
let containerView = "#containerView";
let vistaActual = "homeView";

$(containerView).load(("html/".concat(vistaActual)).concat(".html"));

$(".nav-link, .dropdown-item").click(function (eventData) {
    var elementId = String(eventData.target.id);
    
    if ((elementId.indexOf(view) !== -1) && (vistaActual !== elementId)) {
        vistaActual = elementId;
        elementId = ("html/".concat(elementId)).concat(".html");
        $(containerView).empty();
        $(containerView).load(elementId);
    }
});
