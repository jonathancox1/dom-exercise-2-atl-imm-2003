const sites = [
  {
    address: "https://apple.com",
    logo:
      "https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg",
  },
  {
    address: "https://google.com",
    logo:
      "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
  },
  {
    address: "https://microsoft.com",
    logo:
      "https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg",
  },
];

const container = document.getElementById("container");
container.style.display = "flex-box";
container.style.marginLeft = "40vw";
container.style.marginTop = "10vh";
container.style.width = "300px";
container.style.justifyContent = "center";
container.style.alignItems = "center";

function createLink(site) {
  const link = document.createElement("a");
  const img = document.createElement("img");
  link.setAttribute("href", site.address);
  img.setAttribute("src", site.logo);
  img.setAttribute("width", "200px");
  link.appendChild(img);
  container.appendChild(link);
}

sites.forEach(createLink);
