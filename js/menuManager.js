/* global $ */
"use strict";

const view = "View";
let containerView = "#containerView";
let vistaActual = "homeView";

"use strict";
$(containerView).load(("html/".concat(vistaActual)).concat(".html"),function () {
  $.getScript(("js/".concat(vistaActual)).concat(".js"));
});


"use strict";
$(".item-displayer").click(function (eventData) {
  var elementId = String(eventData.target.id);
    
  if ((elementId.indexOf(view) !== -1) && (vistaActual !== elementId)) {
    vistaActual = elementId;
    
    "use strict";
    $(containerView).empty();
    $(containerView).load(("html/".concat(elementId)).concat(".html"));
    
    "use strict";
    $.getScript(("js/".concat(elementId)).concat(".js"), function ( ) {
      console.log("script [" + elementId + "] ha sido cargado");
    });
  }
});

