import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.services';
import { ScreenService } from '../../services/screen.services';

@Component({
  selector: 'fw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public menuService: MenuService, public screenService: ScreenService) { }

  ngOnInit() {
  }

}
