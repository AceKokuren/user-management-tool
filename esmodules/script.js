Hooks.on("renderActorDirectory", function (app, html) {
    const existingManageButton = html.querySelector('button.manage-users');
    if (existingManageButton) return;
    const manageUserButton =
        `<button class="manage-users"><i class="fa-solid fa-users"></i> Manage Users<i class="fa-solid fa-users"></i></button>`;

    html.insertAdjacentHTML('beforeend', manageUserButton);
    html.querySelector(".manage-users").addEventListener("click", () => (new UserManagement()).render({force: true}));
})

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

class UserManagement extends HandlebarsApplicationMixin(ApplicationV2) {

    _replaceHTML(result, content, options) {
        const text = `<p>Hello World</p>`;
        content = text;
        super._replaceHTML(result, content, options);
        
    }
}