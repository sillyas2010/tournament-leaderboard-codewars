import { Leaderboard } from "./Leaderboard";
import { Match } from "./Match";
import { Team } from "./Team";

class Tournament {
  teams: Map<Team["name"], Team> = new Map();
  matchPlayed(matchResults: string) {
    const match = new Match(matchResults);
    const matchTeams = match.getTeams();

    matchTeams.forEach((team) => {
      let tournamentTeam = this.teams.get(team) || new Team(team);

      tournamentTeam.addMatch(match);

      if (!this.teams.has(team)) {
        this.teams.set(team, tournamentTeam);
      }
    });
  }
  getLeaderboard() {
    const leaderboard = new Leaderboard(Array.from(this.teams.values()));

    return leaderboard.show();
  }
}

export default Tournament;
export { Tournament };
