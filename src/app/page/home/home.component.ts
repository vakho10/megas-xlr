import { Component, OnInit } from '@angular/core';
import {DataService, Info} from "../../service/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  info: Info;

  constructor(dataService: DataService) {
    this.info = dataService.getInfo();
  }

  ngOnInit(): void {
  }

}
