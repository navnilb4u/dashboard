import { IternaryModule } from './iternary.module';

describe('IternaryModule', () => {
    let blankPageModule: IternaryModule;

    beforeEach(() => {
        blankPageModule = new IternaryModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
