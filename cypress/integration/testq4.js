describe('File upload and download tests', () => {

    beforeEach(() => {
        cy.visit('https://filebin.net/')
    })

    it('Upload file and download it in Zip format', () => {
        cy.get('#fileField').attachFile('space.jpg')
        cy.contains('It contains 1 uploaded file',).should('be.visible')
        cy.contains('Download files').click()
        cy.contains('Zip').invoke('attr', 'href').then(downloadLink => {
            cy.log(downloadLink)
            cy.downloadFile('https://filebin.net/', 'Téléchargements', 'downloadedFromCypress.zip')
            cy.readFile('Téléchargements/downloadedFromCypress.zip')
        })
    })

    it('Upload file and download it in Tar format', () => {
        cy.get('#fileField').attachFile('space.jpg')
        cy.contains('It contains 1 uploaded file',).should('be.visible')
        cy.contains('Download files').click()
        cy.contains('Tar').invoke('attr', 'href').then(downloadLink => {
            cy.log(downloadLink)
            cy.downloadFile('https://filebin.net/', 'Téléchargements', 'downloadedFromCypress.tar')
            cy.readFile('Téléchargements/downloadedFromCypress.tar')
        })
    })

})