import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { BaseActions } from '../actions/base.actions';

const baseActions = new BaseActions();

Given(/^a user logged with "(.*)" role$/, (role: string)=> {
    baseActions.generateTokenAndAuthentication(role);
});

When(/^the user is on the "(Dashboard|Practice Info|Telehealth|Settings|Security)" page$/, (page: string)=> {
    baseActions.goToThePage(page);
});