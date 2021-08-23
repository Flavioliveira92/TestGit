import { LightningElement,wire,track } from 'lwc';

import findContact from '@salesforce/apex/ContactController.findContacts';

const delay = 300;

export default class LWCSearchandShow extends LightningElement {

    @track searchKey ='';

    @wire(findContact, {searchKey: '$searchKey'}) 
    contacts;

    handleNameChange(event){
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;

        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        },delay);
    }

    handleContactView(event) {
        // Navigate to contact record page
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.target.value,
                objectApiName: 'Contact',
                actionName: 'view',
            },
        });
    }
}