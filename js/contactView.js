
"use strict";
$.getJSON("json/contactImages.json", function (data) {
  $("#contactlist").append(data.map(function (obj) {
    var imagen = $("<img>")
      .addClass("d-block mx-auto")
      .attr("src", obj.src)
      .attr("alt", obj.alt)
      .css("width","auto");

    var vinculo = $("<a>")
      .attr("href", obj.href)
      .attr("target", "_blank")
      .append(imagen);
    
    return $("<div>")
      .addClass("col-sm")
      .append(vinculo);
  }));
});

"use strict";
$("#contactSubmit").click(function( ) {
  setTimeout(() => {
    $(".contact-form").each(function () {
      $(this).val("");
    });
  }, 3000);
});
