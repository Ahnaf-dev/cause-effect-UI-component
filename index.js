import users from "./data/data.js";

const state = {
  currentUserNumber: 0,
};

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
