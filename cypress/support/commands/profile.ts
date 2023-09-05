export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'sdfsdf' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 22,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'testuser',
            // eslint-disable-next-line max-len
            avatar: 'https://avatars.dzeninfra.ru/get-zen_doc/169683/pub_5c556d27f3e87e00ad2163db_5c556df7d7871900ae834f41/scale_1200',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;

            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
