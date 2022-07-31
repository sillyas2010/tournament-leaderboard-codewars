import { Match, TeamMatch } from "./Match";

class Team {
  private _name: string;
  private _stats = {
    played: 0,
    won: 0,
    tie: 0,
    lost: 0,
    shot: 0,
    gotten: 0
  };
  get stats() {
    return this._stats;
  }
  get name(): string {
    return this._name;
  }
  get points(): number {
    return this._stats.won * 3 + this._stats.tie;
  }
  get goalsDifference(): number {
    return this._stats.shot - this._stats.gotten;
  }
  get goals(): number {
    return this._stats.shot;
  }
  private matches: TeamMatch[] = [];

  constructor(name: string, match?: Match) {
    this._name = name;

    if (match) {
      this.addMatch(match);
    }
  }

  addMatch(match: Match) {
    const teamMatch = match.getTeamMatch(this._name);

    if (!teamMatch) throw new Error("Current team haven't played this match");

    this.matches.push(teamMatch);
    this.updateStats(teamMatch);
  }

  updateStats(teamMatch: TeamMatch) {
    this._stats.played += teamMatch.hasPlayed ? 1 : 0;
    this._stats.shot += teamMatch.shot;
    this._stats.gotten += teamMatch.gotten;

    switch (true) {
      case !teamMatch.hasPlayed: {
        return;
      }
      case teamMatch.shot > teamMatch.gotten: {
        this._stats.won += 1;
        break;
      }
      case teamMatch.shot === teamMatch.gotten: {
        this._stats.tie += 1;
        break;
      }
      case teamMatch.shot < teamMatch.gotten: {
        this._stats.lost += 1;
        break;
      }
    }
  }

  compareStatsWith(enemy: Team, notCountName?: boolean): number {
    const pointsCompare = this.points - enemy.points;

    if (pointsCompare !== 0) {
      return pointsCompare;
    }

    const goalsDifferenceCompare = this.goalsDifference - enemy.goalsDifference;

    if (goalsDifferenceCompare !== 0) {
      return goalsDifferenceCompare;
    }

    const goalsDifference = this.goals - enemy.goals;

    if (goalsDifference !== 0) {
      return goalsDifference;
    }

    const namesCompare = +(this.name.toLowerCase() < enemy.name.toLowerCase());

    if (!notCountName && this.name !== enemy.name) {
      return namesCompare ? 1 : -1;
    } else {
      return 0;
    }
  }
}

export default Team;
export { Team };
