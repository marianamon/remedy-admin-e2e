import { BasePage } from "../../pages/base.page"
import { AppPagesEnum } from "../../src/shared/app-pages.enum";
import { LoginApi } from "../../services/api-login";

const loginApi = new LoginApi();

export class BaseActions extends BasePage{
   generateTokenAndAuthentication(role: string){
    loginApi.visitAuthenticated(Cypress.env('AUTH_BASE_URL'))  
    }
    
    goToThePage(page: string){
        cy.wait(1000);
        switch (page){
            case AppPagesEnum.DASHBOARD:
                cy.visit(this.dashboardPageUrl);
                break;
            case AppPagesEnum.PRACTICE_INFO:
                cy.visit(this.providersPageUrl);
                break;
            case AppPagesEnum.TELEHEALTH:
                cy.visit(this.telehealthDashboardPageUrl);
                break;
            case AppPagesEnum.SETTINGS:
                    cy.visit(this.settingsPageUrl);
                    break;
            case AppPagesEnum.SECURITY:
                        cy.visit(this.securityPageUrl);
                        break;
            default:
                throw Error(`Wrong page option: ${page}`);

        }
    }
    
}