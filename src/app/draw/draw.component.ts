import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { Match } from '../match';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css'],
  providers: [TeamService]
})
export class DrawComponent implements OnInit {
  teams: Team[];
  matches: Match[];

  constructor(private teamService: TeamService) { }

  getTeams(): void {
    this.teamService.getTeams().then(teams => this.teams = teams);
  }

  draw() {
    return this.teamService.drawRandomMatches(this.teams)
    .then(matches => this.matches = matches);
  }

  ngOnInit() {
    this.getTeams();
  }

}
