import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService, Info, Season} from "../../service/data.service";

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  info: Info;
  season?: Season;

  constructor(private route: ActivatedRoute, private router: Router, dataService: DataService) {
    this.info = dataService.getInfo();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const seasonId = parseInt(params.get('season-id')!);
      const result = this.info.seasons
        .filter(s => s.number === seasonId);
      if (result.length === 0) {
        this.router.navigate(['/page-not-found']);
        return;
      }
      this.season = result[0];
    });
  }

}
