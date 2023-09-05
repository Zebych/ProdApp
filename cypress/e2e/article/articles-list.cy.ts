describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });
    it('и статьи успешно подгружаются', () => {
        cy.visit('ArticleList').should('exist');
        cy.visit('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
