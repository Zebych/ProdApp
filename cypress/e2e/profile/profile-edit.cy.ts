import { getByTestId } from '../../support/commands/common';

let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('И профиль успешно загружается', () => {
        getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('И редактирует его', () => {
        const newName = 'new';
        const newLastname = 'lastname';

        cy.updateProfile(
            newName,
            newLastname,
        );
        getByTestId('ProfileCard.firstname').should('have.value', newName);
        getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
