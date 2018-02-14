/* global $ */ 
"use strict";
$.getJSON("json/projects.json", function (data) {
  $("#timelineProjects").append(data.map(function (obj) {
    var badge = $("<div>")
      .addClass("timeline-badge primary");
    var title = $("<h2>")
      .addClass("timeline-title")
      .text(obj.name);
    var subtitleOne = $("<h4>")
      .addClass("timeline-subtitle-one")
      .text(obj.year + ", " + obj.role);
    var description = $("<p>")
      .addClass("timeline-description")
      .text(obj.description);
    var subtitleTwo = $("<h4>")
      .addClass("timeline-subtitle-two")
      .text("Technologies");
    var technologies = $("<p>")
      .addClass("timeline-description-components")
      .text(obj.technologies);
    var subtitleThree = $("<h4>")
      .addClass("timeline-subtitle-two")
      .text("Languages");
    var languages = $("<p>")
      .addClass("timeline-description-components")
      .text(obj.languages);

    var objBody = $("<div>")
      .addClass("timeline-body")
      .append(subtitleOne)
      .append(description)
      .append($("<hr/>"))
      .append(subtitleTwo)
      .append(technologies)
      .append(subtitleThree)
      .append(languages);
    var heading = $("<div>")
      .addClass("timeline-heading")
      .append(title);
    var panel = $("<div>")
      .addClass("timeline-panel")
      .append(heading)
      .append(objBody);
    return $("<li>")
      .addClass(obj.display)
      .append(badge)
      .append(panel);
  }));
});
