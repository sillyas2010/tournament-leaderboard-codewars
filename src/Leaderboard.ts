import { Team } from "./Team";

interface LeaderboardEntry {
  team: Team;
  place: number;
}

class Leaderboard {
  entries: LeaderboardEntry[] = [];
  teamsToEntries = (
    prevEntries: LeaderboardEntry[] = [],
    team: Team,
    index: number
  ) => {
    const lastEntry = prevEntries[prevEntries.length - 1] || { team, place: 1 };
    const place =
      team.compareStatsWith(lastEntry.team, true) === 0
        ? lastEntry.place
        : index + 1;

    return [...prevEntries, { team, place }];
  };
  printEntry = ({
    team: {
      name,
      points,
      stats: { played, won, tie, lost, shot, gotten }
    },
    place
  }: LeaderboardEntry) =>
    `${place >= 10 ? "" : " "}${place}. ${name.substring(0, 30)}${Array.from({
      length: 30 - name.length
    }).join(
      " "
    )} ${played}  ${won}  ${tie}  ${lost}  ${shot}:${gotten}  ${points}`;

  show(): string {
    return this.entries.map(this.printEntry).join("\n");
  }

  constructor(teams: Team[], printEntry?: (entry: LeaderboardEntry) => string) {
    this.printEntry = printEntry || this.printEntry;

    const sortedTeams = [...teams].sort((teamA, teamB) =>
      teamB.compareStatsWith(teamA)
    );

    this.entries = sortedTeams.reduce(this.teamsToEntries, []);
  }
}

export default Leaderboard;
export { Leaderboard, LeaderboardEntry };
