const view = "View";
const scripts = "#customScripts";
let containerView = "#containerView";
let vistaActual = "homeView";

$(containerView).load(("html/".concat(vistaActual)).concat(".html"));

$(".item-displayer").click(function (eventData) {
    var elementId = String(eventData.target.id);
    
    if ((elementId.indexOf(view) !== -1) && (vistaActual !== elementId)) {
        vistaActual = elementId;
        
        $(containerView).empty();
        $(containerView).load(("html/".concat(elementId)).concat(".html"));
        
        $.getScript(("js/".concat(elementId)).concat(".js"), function (params) {
            console.log("script [" + elementId + "] ha sido cargado");
        })
    }
});

