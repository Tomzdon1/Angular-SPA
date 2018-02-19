import { ScreenService } from './../services/screen.services';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.services';

@Component({
  selector: 'fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(public screenService: ScreenService, public menuService: MenuService) {

  }

  ngOnInit() {
  }

}
