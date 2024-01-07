const { I } = inject();
const Modals = require('../pages/modalsPage.js');


Feature('Modals');

Scenario('Click & Simple Modal', ({I}) => {
    I.goToModals()
    Modals.openSimpleModal()
    I.see('Hi, I’m a simple modal.')
})

Scenario('Click & Form Modal submit', ({I}) => {
    I.goToModals()
    Modals.openFormModal()
    Modals.fillFormModal('Jason', 'sss@mail.com', 'sdsdsd')
    Modals.submitFormModal()
    I.seeInCurrentUrl('contact-form-id');
})