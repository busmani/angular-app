import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batting',
  templateUrl: './batting.component.html',
  styleUrls: ['./batting.component.css']
})
export class battingcomponent implements OnInit {
  ctclInfo = { info: 'Match Summary', teamsName: "Batting Card" };
  batsmansScores = [
    {
      name: "Majid Zubair",
      team: "Tigers pro",
      match: 11,
      score: 405,
      balls: 750,
      fours: 5,
      six: 7,
      avg: 140
    },
    {
      name: "Sai Gautum",
      team: "Gladiators",
      match: 12,
      score: 400,
      balls: 700,
      fours: 6,
      six: 4,
      avg: 18
    },
    {
      name: "Prabhuram Jagadeesan",
      team: "Gladiators",
      match: 11,
      score: 0,
      balls: 7,
      fours: 0,
      six: 0,
      avg: 14
    },
    {
      name: "Pavan Kumar Sandhiri",
      team: "Chargers",
      match: 11,
      score: 0,
      balls: 7,
      fours: 0,
      six: 0,
      avg: 14
    },
    {
      name: "Naveen Suriya",
      team: "Gladiators",
      match: 11,
      score: 0,
      balls: 7,
      fours: 0,
      six: 0,
      avg: 14
    },
    {
      name: "Hasham Abbasi",
      team: "Tigers Pro",
      match: 11,
      score: 0,
      balls: 7,
      fours: 0,
      six: 0,
      avg: 14
    },
    {
      name: "Ali Haider",
      team: "Launchers",
      match: 11,
      score: 0,
      balls: 7,
      fours: 0,
      six: 0,
      avg: 14
    },
    {
      name: "Guru Krish",
      team: "Gladiators",
      match: 11,
      score: 0,
      balls: 7,
      fours: 0,
      six: 0,
      avg: 14
    },
    {
      name: "Bharadwaj Ogirala",
      team: "Chargers",
      match: 11,
      score: 0,
      balls: 7,
      fours: 0,
      six: 0,
      avg: 14
    },
    {
      name: "Hassan Israr",
      team: "Launchers",
      match: 11,
      score: 0,
      balls: 7,
      fours: 0,
      six: 0,
      avg: 14
    },
    {
      name: "Asim Sakhi",
      team: "Lions",
      match: 11,
      score: 0,
      balls: 7,
      fours: 0,
      six: 0,
      avg: 14
    }
  ];

  constructor() {}

  ngOnInit() {}
}
