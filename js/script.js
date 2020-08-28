const appendToLinks = () => {
  //append "index" to home links
  home = document.querySelectorAll(".homeLink");
  for (var i = 0; i < home.length; i++) home[i].href += "index";

  //append ".html" to all internal links
  l = document.querySelectorAll(
    ".nav-link, .dropdown-item, .navbar-brand, .internal"
  );
  for (var i = 0; i < l.length; i++) l[i].href += ".html";
};

window.onload = () => {
  console.log(window.location);
  //append relevant text to links to ensure functionality
  if (window.location.protocol == "file:") appendToLinks();
};
