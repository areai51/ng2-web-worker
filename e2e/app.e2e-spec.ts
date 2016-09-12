import { Ng2WwPage } from './app.po';

describe('ng2-ww App', function() {
  let page: Ng2WwPage;

  beforeEach(() => {
    page = new Ng2WwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
