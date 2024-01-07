// steps_file.js
const { I } = inject();
const Modals = require('./pages/modalsPage.js');

module.exports = function() {
  return actor({

    goToModals(){
      this.amOnPage('https://practice-automation.com/modals/');
    },

    goToPopups(){
      this.amOnPage('https://practice-automation.com/popups/');
    }

  });
};
