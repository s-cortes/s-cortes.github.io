$.getJSON("json/education.json", function (data) {
  $("#contentList").append(data.map(function (obj) {
    var titulo = $("<h5>")
      .addClass("card-title")
      .text(obj.institution.name);
    var subtitulo = $("<h6>")
      .addClass("card-subtitle mb-2")
      .text((obj.institution.faculty.name + " " + obj.location + ". "
        + obj.startingYear + " - " + obj.finishingYear));
    var texto = $("<p>")
      .addClass("card-text")
      .text(obj.description);
    var vinculo = $("<a>")
      .addClass("btn btn-primary w-50 float-right education-button")
      .attr("href", obj.institution.url)
      .attr("target", "_blank")
      .text("Visit institution");
    var img = $("<img>")
      .addClass("card-img-top mx-auto d-block")
      .attr("src", obj.institution.image)
      .attr("alt", "Logo of the " + obj.institution.name);
    var colTwo = $("<div>")
      .addClass("col-sm-10")
      .append(titulo)
      .append(subtitulo)
      .append(texto)
      .append(vinculo);
    var colOne = $("<div>")
      .addClass("col-sm-2")
      .append(img);
    var row = $("<div>")
      .addClass("row")
      .append(colOne)
      .append(colTwo);
    return $("<div>")
      .addClass("card education-element")
      .append(row);
  }));
});
$(".card-img").css("width", "");