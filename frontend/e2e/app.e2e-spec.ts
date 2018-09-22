import { Angular5DockerPage } from './app.po';

describe('angular5-docker App', function() {
  let page: Angular5DockerPage;

  beforeEach(() => {
    page = new Angular5DockerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
