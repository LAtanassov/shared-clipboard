import { SharedClipboardPage } from './app.po';

describe('shared-clipboard App', () => {
  let page: SharedClipboardPage;

  beforeEach(() => {
    page = new SharedClipboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
