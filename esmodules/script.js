Hooks.on("renderActorDirectory", function (app, html) {
    const existingManageButton = html.querySelector('button.manage-users');
    if (existingManageButton) return;
    const manageUserButton =
        `<button class="manage-users"><i class="fa-solid fa-users"></i> Manage Users<i class="fa-solid fa-users"></i></button>`;

    html.querySelector('footer').insertAdjacentHTML('beforeend', manageUserButton);
    html.querySelector(".manage-users").addEventListener("click", () => (new UserManagement()).render({force: true}));
})

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

class UserManagement extends HandlebarsApplicationMixin(ApplicationV2) {
    static DEFAULT_OPTIONS = {
        id: 'user-management-tool',
        classes: [],
        tag: "form",
        window: {
            frame: true,
            positioned: true,
            title: "User Management Tool",
            icon: "",
            controls: [],
            minimizable: true,
            resizable: false,
            contentTag: "section",
            contentClasses: []
        },
        actions: {},
        form: {
            handler: undefined,
            submitOnChange: false,
            closeOnSubmit: false
        },
        position: {
            width: "auto",
            height: "auto"
        }
    };

    static PARTS = {
        'management-window': {template: '/modules/user-management-tool/templates/user-management-window.hbs'},
    }



    // _replaceHTML(result, content, options) {
    //     const text = `<p>Hello World</p>`;
    //     content = text;
    //     super._replaceHTML(result, content, options);
    // }
}