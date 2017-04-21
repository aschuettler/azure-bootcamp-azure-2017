import { PrepPage } from './app.po';

describe('prep App', () => {
  let page: PrepPage;

  beforeEach(() => {
    page = new PrepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
