import { Cuestionario4Page } from './app.po';

describe('cuestionario4 App', () => {
  let page: Cuestionario4Page;

  beforeEach(() => {
    page = new Cuestionario4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
