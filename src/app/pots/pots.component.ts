import { Component, OnInit } from '@angular/core';

import { winners } from '../models/winners.constant';
import { Team } from '../models/team.interface';
import { runnerUps } from '../models/runner-ups.constant';

@Component({
  selector: 'app-pots',
  templateUrl: './pots.component.html',
  styleUrls: ['./pots.component.css']
})
export class PotsComponent implements OnInit {

  groupWinners: Team[] = winners;
  groupRunnerUps: Team[] = runnerUps;

  constructor() { }

  ngOnInit() {
  }

}
