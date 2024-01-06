class Popups{

    constructor(page) {
        this.page = page

        this._buttonAlertPopup = this.page.locator('[id="alert"]')
        this._buttonConfirmPopup = this.page.locator('[id="confirm"]')
        this._buttonPromptPopup = this.page.locator('[id="prompt"]')

        this._dialogText = null
        this._confirmText = null
        this._promptText = null
    }

    async popupsPageOpen(){
        await this.page.goto('/popups')
    }

    async popupsAlertPopup(){
        await this.page.on('dialog', (dialog) => {
            this._dialogText = dialog.message();
            dialog.accept();
        })

        await this._buttonAlertPopup.click()
    }

    async popupsGetAlertText(){
        return this._dialogText
    }

    async popupsConfirmPopup(){
        this.page.on('dialog', (dialog) => {
            dialog.accept();
        })

        await this._buttonConfirmPopup.click()
        this._confirmText = await this.page.locator('[id=confirmResult]')
        await this._confirmText.waitFor({state: 'visible'})
    }

    async popupTextConfirmPopup(){
        return this._confirmText.innerText()
    }

    async popupsPromptPopup(name){
        this.page.on('dialog', (dialog) => {
            dialog.accept(name);
        })

        await this._buttonPromptPopup.click()
        this._promptText = await this.page.locator('[id=promptResult]')
        await this._promptText.waitFor({state: 'visible'})
    }

    async popupTextPromptPopup(){
        return this._promptText.innerText()
    }
}

module.exports = Popups