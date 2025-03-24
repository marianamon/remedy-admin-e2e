import cypress from "cypress";
import { ProviderPage } from "../../pages/provider.page";
import { Status } from "../../src/shared/status.enum";


export class ProviderActions extends ProviderPage {
    verifyPractice(){
        cy.wait(1000);
        
    }

    verifyfuncionalityStatus(funcionality: string){
        cy.wait(1000);
        switch (funcionality){
            case Status.ENABLED:
                cy.get('input').should('be.enabled');
                break;
            case Status.DISABLED:
                cy.get('input').should('be.disabled');
                break;
            default:
                throw Error(`Wrong status option: ${funcionality}`);
        }
    }

}