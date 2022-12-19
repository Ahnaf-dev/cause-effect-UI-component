import users from "./data/data.js";
let sidebar = $(".sidebar");
let details = $(".details");
let hamburger = $(".hamburger");
let hamburgerIcon = $("span")[0];

const state = {
  currentUserNumber: 0,
};

// hamburger menu for mobile to toggle sidebar

hamburger.on("click", () => {
  sidebar.toggleClass("open");

  if (hamburgerIcon.innerText === "menu") {
    hamburgerIcon.innerText = "close";
  } else {
    hamburgerIcon.innerText = "menu";
  }
});

// generating sidebar and display HTML
$("body").ready(() => {
  let userHtml = users
    .map((user, index) => {
      return `
    <div class="sidebar__content">
      <p>${user.name}</p>
    </div>
    `;
    })
    .join("");

  let currentUser = users[state.currentUserNumber];

  let detailHtml = `
  <h1><b>Name:</b> ${currentUser.name}</h1>
  <p>${currentUser.address}</p>
  <p>${currentUser.about}</p>
  
  `;

  sidebar.html(userHtml);
  details.html(detailHtml);
});
