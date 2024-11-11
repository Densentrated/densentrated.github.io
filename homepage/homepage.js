// loads the title bar in
function loadTemplate(templateUrl, containerId, templateId, cssUrl) {
  // Fetch the HTML template
  fetch(templateUrl)
    .then((response) => response.text())
    .then((text) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = text;
      const template = tempDiv.querySelector(`#${templateId}`).content;

      // Append the template content to the specified container
      document
        .getElementById(containerId)
        .appendChild(template.cloneNode(true));

      // If a CSS URL is provided, dynamically load the CSS file
      if (cssUrl) {
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", cssUrl);
        document.head.appendChild(linkElem); // Append the CSS to the <head> of the document
      }
    })
    .catch((error) => console.error("Error loading template:", error));
}

// Load the template and associated CSS when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  loadTemplate(
    "../modules/headermenu/headermenu.html", // Template URL
    "headermenucontainer", // Container ID where template will be inserted
    "headermenu", // Template ID inside the HTML file
    "../modules/headermenu/headermenu.css" // CSS URL for associated styles
  );
});
