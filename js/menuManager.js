const view = "View";
let containerView = "#containerView";
let vistaActual = "homeView";

$(containerView).load(("html/".concat(vistaActual)).concat(".html"),function () {
  $.getScript(("js/".concat(vistaActual)).concat(".js"));
});


$(".item-displayer").click(function (eventData) {
  var elementId = String(eventData.target.id);
    
  if ((elementId.indexOf(view) !== -1) && (vistaActual !== elementId)) {
    vistaActual = elementId;
        
    $(containerView).empty();
    $(containerView).load(("html/".concat(elementId)).concat(".html"));
        
    $.getScript(("js/".concat(elementId)).concat(".js"), function ( ) {
      console.log("script [" + elementId + "] ha sido cargado");
    });
  }
});

