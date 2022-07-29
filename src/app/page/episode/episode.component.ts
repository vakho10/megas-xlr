import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService, Episode, Info} from "../../service/data.service";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  info: Info;
  episode?: Episode;

  constructor(private route: ActivatedRoute, private router: Router, dataService: DataService) {
    this.info = dataService.getInfo();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const seasonId = parseInt(params.get('season-id')!);
      const episodeId = parseInt(params.get('episode-id')!);
      const result = this.info.seasons
        .filter(s => s.number === seasonId)
        .flatMap(s => s.episodes)
        .filter(e => e.number === episodeId);
      if (result.length === 0) {
        this.router.navigate(['/page-not-found']);
        return;
      }
      this.episode = result[0];
    });
  }

}
