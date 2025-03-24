import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { BaseActions } from '../actions/base.actions';
import { ProviderActions } from '../actions/provider.actions';

const providerActions = new ProviderActions();
const baseActions = new BaseActions();

Given(/^a user logged with Provider role$/, (role)=> {
    baseActions.generateTokenAndAuthentication(role);
});

When(/^the user is on the "(Dashboard|Practice Info|Telehealth|Settings|Security)" page$/, (page: string)=> {
    baseActions.goToThePage(page);
});

Then(/^the practice is automatically loaded$/, ()=> {
    providerActions.verifyPractice();
});
Then(/^the functionalities are enabled$/, (funcionality: string)=> {
    providerActions.verifyfuncionalityStatus(funcionality);
});