import { NEWPROJECTPage } from './app.po';

describe('newproject App', function() {
  let page: NEWPROJECTPage;

  beforeEach(() => {
    page = new NEWPROJECTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
