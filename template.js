const source = $("#first-template").html();
const template = Handlebars.compile(source); /* Compile a template */

Handlebars.registerHelper("emailLink", function(text, url) {
  text = Handlebars.Utils.escapeExpression(text);
  url = Handlebars.Utils.escapeExpression(url);

  const result = '<a href="' + url + '">' + text + "</a>";

  return new Handlebars.SafeString(result);
});

const context = {};

const templateData = template(context); /* executing template with context */

$("#data").html(templateData);
//document.getElementById("data").innerHTML += templateData;
