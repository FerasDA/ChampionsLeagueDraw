import { ChampionsLeagueDrawPage } from './app.po';

describe('champions-league-draw App', () => {
  let page: ChampionsLeagueDrawPage;

  beforeEach(() => {
    page = new ChampionsLeagueDrawPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
