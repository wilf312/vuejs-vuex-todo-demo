/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  describe('基本動作', () => {
    it('初期描画', () => {
      cy.contains('Todo list')
      cy.contains('リスト')
      cy.contains('first')
      cy.contains('todo 追加')
    })
    it('todoの追加が動くこと', () => {
      const text = '新しいtodo'
      cy.get('input[name="add_todo"]')
        .type(text)
        .type('{enter}')
      cy.contains(text)
      cy.get('input[name="add_todo"]').should('have.value', '')
    })
    it('チェックのつけ外しが動くこと', () => {
      const text = 'チェックのつけ外しが動くこと'
      cy.get('input[name="add_todo"]')
        .type(text)
        .type('{enter}')
      cy.contains(text)
        .click()

      cy.contains(text)
        .click()


      debugger
    })
  })
})
