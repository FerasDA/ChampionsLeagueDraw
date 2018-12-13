import { Injectable } from '@angular/core';
import { Team } from './models/team.interface';
import { Match } from './models/match.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawService {


  constructor() { }

  drawRoundOfSixteenMatches(winners: Team[], runnerUps: Team[]): Observable<Match[]> {
    let shuffledWinners: Team[] = winners.slice();
    let shuffledRunnerUps: Team[] = runnerUps.slice();
    let matches: Match[] = [];
    this.shuffle(shuffledWinners);
    this.shuffle(shuffledRunnerUps);

    shuffledWinners.forEach(wTeam => {
      let match: Match = new Match();
      match.homeTeam = wTeam;
      match.awayTeam = shuffledRunnerUps.filter(rTeam => this.isMatchAllowed(wTeam, rTeam) && !this.isDrawn(rTeam, matches))[0];
      matches.unshift(match);
    })
    return of(matches);
  }

  isDrawn(team: Team, matches: Match[]): boolean {
    if (matches != undefined && matches.length > 0) {
      return matches.find(m => m.awayTeam.name === team.name) ? true : false;
    }
  }

  isMatchAllowed(wTeam: Team, rTeam: Team): boolean {
    return (wTeam.group === rTeam.group || wTeam.association === rTeam.association) ? false : true;
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }
}
