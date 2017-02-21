import { IPLocatorPage } from './app.po';

describe('iplocator App', function() {
  let page: IPLocatorPage;

  beforeEach(() => {
    page = new IPLocatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
