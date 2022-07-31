interface TeamMatch {
  enemy: string;
  shot: number;
  gotten: number;
  hasPlayed: boolean;
}

class Match {
  private pattern: RegExp = /([\d-]*?):([\d-]*?) (.*) - (.*)$/g;
  private hasPlayed: boolean = false;
  teams: [string, string];
  score: [number, number];

  constructor(matchResults: string, pattern?: RegExp) {
    this.pattern = pattern || this.pattern;

    const stringMatch = this.pattern.exec(matchResults);

    if (stringMatch === null || stringMatch.length !== 5) {
      throw new Error(
        "Please adjust your Match string or replace default pattern"
      );
    }

    this.hasPlayed = stringMatch[1] !== "-" && stringMatch[2] !== "-";
    this.score = [+stringMatch[1] || 0, +stringMatch[2] || 0];
    this.teams = [stringMatch[3], stringMatch[4]];
  }

  getTeams() {
    return this.teams;
  }

  getTeamMatch(teamName: string): TeamMatch | null {
    const teamIndex = this.teams.indexOf(teamName);

    if (teamIndex === -1) return null;

    return {
      hasPlayed: this.hasPlayed,
      enemy: teamIndex === 0 ? this.teams[1] : this.teams[0],
      shot: teamIndex === 0 ? this.score[0] : this.score[1],
      gotten: teamIndex === 0 ? this.score[1] : this.score[0]
    };
  }
}

export default Match;
export { Match, TeamMatch };
