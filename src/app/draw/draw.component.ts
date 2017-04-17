import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css'],
  providers: [TeamService]
})
export class DrawComponent implements OnInit {
  teams: Team[];

  constructor(private teamService: TeamService) { }

  getTeams(): void {
    this.teamService.getTeams().then(teams => this.teams = teams);
  }

  ngOnInit() {
    this.getTeams();
  }

}
