import { NGRXDEMOPage } from './app.po';

describe('ngrx-demo App', function() {
  let page: NGRXDEMOPage;

  beforeEach(() => {
    page = new NGRXDEMOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
