// тесты выполняются на примере сервиса https://practice-automation.com/
// Проверка модальных окон на странице https://practice-automation.com/modals/

const {test, expect} = require('@playwright/test');
const Modals = require('../pages/modals.js');
const Popups = require('../pages/popups.js')

test ('Modals: click & Simple Modal', async ({page}) => {
    const modals = new Modals(page);
    await modals.modalsPageOpen();

    await modals.clickSimpleModalButton();
    await modals.seeSimpleModal();
    const simplePopupText = await modals.getSimpleModalText();
    expect(simplePopupText).toContain('Simple Modal');
})

test ('Modals: click & Form Modal submit', async ({page}) => {
    const modals = new Modals(page);
    await modals.modalsPageOpen();

    await modals.clickFormModalButton();
    await modals.seeFormModal();

    await modals.fillLoginFormName('test');
    await modals.fillLoginFormEmail('test@email.com');
    await modals.fillLoginFormMessage('test message');

    await modals.submitFormModal();
    await expect(page).toHaveURL(/contact-form-id=1051/);
})

// Проверка попапов на странице https://practice-automation.com/popups/

test ('Popups: Alert Popup', async ({page}) => {
    const popups = new Popups(page);
    await popups.popupsPageOpen();

    await popups.popupsAlertPopup();
    const alertText = await popups.popupsGetAlertText();
    expect(alertText).toContain('Hi there, pal!')
})

test ('Popups: Confirm Popup', async ({page}) => {
    const popups = new Popups(page);
    await popups.popupsPageOpen();

    await popups.popupsConfirmPopup();
    const confirmText = await popups.popupTextConfirmPopup()
    expect(confirmText).toContain('OK it is!')
})

test ('Popups: Prompt Popup', async ({page}) => {
    const popups = new Popups(page);
    await popups.popupsPageOpen();

    await popups.popupsPromptPopup('Johnny Doe');
    const confirmText = await popups.popupTextPromptPopup()
    expect(confirmText).toContain('Nice to meet you, Johnny Doe!')
})