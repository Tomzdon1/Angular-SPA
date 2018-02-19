import { ScreenService } from './../services/screen.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(private screenService: ScreenService) { 
    
  }

  ngOnInit() {
  }

}
