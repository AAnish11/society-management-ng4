import { SpPage } from './app.po';

describe('sp App', () => {
  let page: SpPage;

  beforeEach(() => {
    page = new SpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
