import {Component, Input, OnInit} from '@angular/core';
import {DataService, Info} from "../service/data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input('info') info!: Info;

  constructor(dataService: DataService) {
    this.info = dataService.getInfo();
  }

  ngOnInit(): void {
  }

}
