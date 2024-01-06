class Modals {

    constructor(page) {
        this.page = page
        this._buttonSimpleModal = this.page.locator('[id=simpleModal]')
        this._buttonFormModal = this.page.locator('[id=formModal]')
        this._modalSimpleModal = null
        this._textSimpleModal = null

        this._submitFormModal = null
        this._modalFormModal = null
        this._nameInputFormModal = null
        this._emailInputFormModal = null
        this._messageInputFormModal = null
    }

    async modalsPageOpen(){
        await this.page.goto('/modals')
    }
    async clickSimpleModalButton(){
        await this._buttonSimpleModal.click()
        this._modalSimpleModal = await this.page.locator('[id=popmake-1318]')
    }

    async seeSimpleModal(){
        await this._modalSimpleModal.waitFor({state:'visible'})
    }

    async getSimpleModalText(){
        this._textSimpleModal = await this.page.locator('[id=pum_popup_title_1318]')
        await this._textSimpleModal.waitFor({state: 'visible'})
        return this._textSimpleModal.innerText()
    }

    async clickFormModalButton(){
        await this._buttonFormModal.click()

        this._modalFormModal = await this.page.locator('[id="popmake-674"]')

        this._nameInputFormModal = await this.page.locator('[id=g1051-name]')
        this._emailInputFormModal = await this.page.locator('[id=g1051-email]')
        this._messageInputFormModal = await this.page.locator('[id=contact-form-comment-g1051-message]')
        this._submitFormModal = await this.page.locator('//*[@class=\'contact-submit\']/button')
    }

    async seeFormModal(){
        await this._modalFormModal.waitFor({state:'visible'})
    }
    async fillLoginFormName(name){
        await this._nameInputFormModal.fill(name)
    }

    async fillLoginFormEmail(email){
        await this._emailInputFormModal.fill(email)
    }

    async fillLoginFormMessage(message){
        await this._messageInputFormModal.fill(message)
    }

    async submitFormModal() {
        await this._submitFormModal.click()
    }

}

module.exports = Modals