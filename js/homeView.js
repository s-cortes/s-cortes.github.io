/* global $ */
"use strict";
$.getJSON("json/aboutImages.json", function (data) {
  $("#aboutMeCarousel").append(data.map(function (obj) {
    var imagen = $("<img>")
      .addClass("d-block w-70")
      .attr("src", obj.src)
      .attr("alt", obj.alt);
    
    return $("<div>")
      .addClass("carousel-item " + obj.active)
      .append(imagen);
  }));
});
