/* global $ */
"use strict";
$.getJSON("json/skills.json", function (data) {
  $("#skillsList").append(data.map(function (obj) {
    var titulo = $("<h3>")
      .addClass("SkillTitle")
      .text(obj.name);
    var barra = $("<div>")
      .addClass("progress-bar")
      .attr("id", obj.name)
      .attr("role", "progressbar")
      .attr("aria-valuemin", "0")
      .attr("aria-valuemax", "100")
      .attr("aria-valuenow", obj.skillLevel)
      .text(obj.skillLevel + "%")
      .css("width", obj.skillLevel + "%");
    var progress = $("<div>")
      .addClass("progress")
      .append(barra);
    return $("<div>")
      .append(titulo)
      .append(progress);
  }));
});
