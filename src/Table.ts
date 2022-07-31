import { Tournament } from "./Tournament";

class Table {
  tournament: Tournament;
  constructor(results: string[]) {
    this.tournament = new Tournament();

    results.forEach((matchResults) => {
      this.tournament.matchPlayed(matchResults);
    });
  }

  show() {
    return this.tournament.getLeaderboard();
  }
}

export default Table;
export { Table };
