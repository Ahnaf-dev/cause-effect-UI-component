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
  generateUserDisplay();
  generateUserList();

  $(".sidebar__content").each((val, content) => {
    content.addEventListener("click", () => {
      state.currentUserNumber = val;
      generateUserDisplay();

      // styles for clicked users
      $(".active").removeClass("active");
      content.classList.add("active");
    });
  });
});

function generateUserDisplay() {
  let currentUser = users[state.currentUserNumber];

  let detailHtml = `
  <h1><b>Name:</b> ${currentUser.name}</h1>
  <p>${currentUser.address}</p>
  <p>${currentUser.about}</p>
  
  `;

  details.html(detailHtml);
}

function generateUserList() {
  let userHtml = users
    .map((user, index) => {
      return `
  <div  class="sidebar__content ${
    index === state.currentUserNumber ? "active" : ""
  }">
    <p>${user.name}</p>
  </div>
  `;
    })
    .join("");

  sidebar.html(userHtml);
}
