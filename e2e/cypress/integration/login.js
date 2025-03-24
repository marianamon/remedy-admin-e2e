describe('Authenticated Visit', () => {
    it('should visit the page with an authenticated session', () => {
      cy.login().then(() => {
        cy.visitAuthenticated('https://admin-portal-staging.remedyoncall.com/#/login');
        cy.window().then((win) => {
          const tokenData = JSON.parse(win.localStorage.getItem('auth_token'));
          expect(tokenData).to.have.property('body');
          expect(tokenData.body).to.have.property('access_token');
          cy.log('Access token exists in local storage:', tokenData.body.access_token);
         
          
        
        });
      });
    });
  });