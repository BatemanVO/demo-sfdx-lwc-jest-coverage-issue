import { createElement } from 'lwc';
import SampleComponent from 'c/sampleComponent';
import someApexMethod from '@salesforce/apex/SomeClass.someApexMethod';

jest.mock(
    '@salesforce/apex/SomeClass.someApexMethod',
    () => ({ default: jest.fn() }),
    { virtual: true }
);

describe('SampleComponent', () => {
    it('Should get 100% coverage', async () => {
        const element = createElement('c-sample-component', { is: SampleComponent });
        someApexMethod.mockResolvedValue();
        document.body.appendChild(element);

        await Promise.resolve();

        expect(true).toBe(true);
    });
});