// This is a comment that will cause the coverage tool to report this line uncovered
import { LightningElement } from 'lwc';
import someApexMethod from '@salesforce/apex/SomeClass.someApexMethod';

export default class SampleComponent extends LightningElement {
    result;

    connectedCallback() {
        someApexMethod()
            .then(result => this.result = result);
    }
}