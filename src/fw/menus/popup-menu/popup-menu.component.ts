import { MenuService, MenuItem } from './../../services/menu.services';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {

  @Input() menu: Array<MenuItem>;
  
  constructor(public menuService: MenuService) { 

  }

  ngOnInit() {
  }

}
