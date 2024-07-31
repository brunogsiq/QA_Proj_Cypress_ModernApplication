const locators = {
    Login : {
        user: '[data-test=email]',
        password: '[data-test=passwd]',
        btn_login: '.btn'
    },
    Menu : {
        setting: '[data-test=menu-settings]',
        contas: '[href="/contas"]'
    }
}

export default locators;