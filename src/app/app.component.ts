import {Component} from '@angular/core';
import {DataService, Info} from "./service/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  info: Info;

  constructor(dataService: DataService) {
    this.info = dataService.getInfo();
  }

}
