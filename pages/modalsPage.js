const { I } = inject();

module.exports = {

  fields: {
    name: {css: '#g1051-name'},
    email: {css: '#g1051-email'},
    message: {css: '#contact-form-comment-g1051-message'},
  },

  simpleModalButton: { css: '#simpleModal' },
  formModalButton: { css: '#formModal' },
  formModalSubmitButton: { css: '.pushbutton-wide'},

  openSimpleModal(){
    I.click(this.simpleModalButton)
  },

  openFormModal(){
    I.click(this.formModalButton)
  },

  fillFormModal(name, email, message){
    I.fillField(this.fields.name, name),
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.message, message)
  },
  submitFormModal(){
    I.click(this.formModalSubmitButton)
  }
};