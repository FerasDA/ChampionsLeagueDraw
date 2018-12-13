import { Component, OnInit } from '@angular/core';

import { Team } from '../models/team.interface';
import { winners } from '../models/winners.constant';
import { runnerUps } from '../models/runner-ups.constant';
import { Match } from '../models/match.interface';
import { DrawService } from '../draw.service';

@Component({
  selector: 'app-round-of-sixteen',
  templateUrl: './round-of-sixteen.component.html',
  styleUrls: ['./round-of-sixteen.component.css']
})
export class RoundOfSixteenComponent implements OnInit {
  groupWinners: Team[] = winners;
  groupRunnerUps: Team[] = runnerUps;

  roundOfSixteenMatches: Match[];

  constructor(private drawService: DrawService) { }

  ngOnInit() {
  }

  draw() {
    this.drawService.drawRoundOfSixteenMatches(this.groupWinners, this.groupRunnerUps)
      .subscribe(matches => this.roundOfSixteenMatches = matches);
  }
}
