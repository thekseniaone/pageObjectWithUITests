const { I } = inject();
const Popups = require('../pages/popupsPage.js');

Feature('Popups');

Scenario('Alert Popup', ({I}) => {
    I.goToPopups()
    Popups.openAlertPopup()
    I.seeInPopup('Hi there, pal!')
})

Scenario('Confirm Popup', ({I}) => {
    I.goToPopups()
    Popups.openConfirmPopup()
    I.acceptPopup()
    I.see('OK it is!')
})

Scenario('Prompt Popup', ({I}) => {
    I.goToPopups()
    Popups.openPromptPopup()
    I.seeInPopup(`Hi there, what's your name?`)
    I.acceptPopup()
    I.see('Fine, be that way...')
})