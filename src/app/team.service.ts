import { Injectable } from '@angular/core';
import { Team } from './team';
import { Match } from './match';
import { TEAMS } from './mock-teams';

@Injectable()
export class TeamService {
  getTeams(): Promise<Team[]> {
    return Promise.resolve(TEAMS);
  }

  drawRandomMatches(teams: Team[]): Promise<Match[]> {
    let shuffledTeams: Team[] = teams.slice();
    let matches: Match[] = [];
    this.shuffle(shuffledTeams);
    for (let i = 0; i < shuffledTeams.length; i += 2) {
      let match: Match = new Match();
      match.homeTeam = shuffledTeams[i];
      match.awayTeam = shuffledTeams[i + 1];
      matches.unshift(match);
    }
    return Promise.resolve(matches);
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }
}
