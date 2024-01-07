const { I } = inject();

module.exports = {

  alertPopupButton: { css: '#alert' },
  confirmPopupButton: { css: '#confirm' },
  promptPopupButton: { css: '#prompt'},

  openAlertPopup(){
    I.click(this.alertPopupButton)
  },

  openConfirmPopup(){
    I.click(this.confirmPopupButton)
  },

  openPromptPopup(){
    I.click(this.promptPopupButton)
  }
};