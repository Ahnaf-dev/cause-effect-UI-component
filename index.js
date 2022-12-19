import users from "./data/data.js";
let sidebar = $(".sidebar");
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
  let html = users
    .map((user, index) => {
      return `
    <div class="sidebar__content">
      <p>${user.name}</p>
    </div>
    `;
    })
    .join("");

  $(".sidebar").html(html);
});
