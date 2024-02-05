describe('cy.handsOn("Audio Testing")', () => {
  beforeEach(() => cy.visit('./src/index.html'))

  it('ensures audio plays and pauses', () => {
    cy.contains('button', 'Play').click()

    cy.get('#joker-remix', { log: false })
      .as('jokerRemix')
      .should(audioElements => {
        let audible = false

        if (
          audioElements[0].duration > 0 &&
          audioElements[0].played.length &&
          !audioElements[0].paused &&
          !audioElements[0].muted
        ) {
          audible = true
        }

        expect(audible).to.be.equal(true)
      })

    cy.contains('button', 'Pause')
      .click()
      .blur()

    cy.get('@jokerRemix', { log: false })
      .should(audioElements => {
        let audible = true

        if (
          audioElements[0].paused ||
          audioElements[0].muted)
        {
          audible = false
        }
    
        expect(audible).to.be.equal(false)
      })
  })
})
