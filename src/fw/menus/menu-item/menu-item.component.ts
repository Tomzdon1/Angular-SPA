import { Component, OnInit, Input, HostBinding, HostListener, Renderer, ElementRef} from '@angular/core';
import {  trigger, transition, animate, style } from '@angular/animations';
import { MenuItem, MenuService } from '../../services/menu.services';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations: [
    trigger('visibilityChanged', [
        transition(':enter', [   // :enter is alias to 'void => *'
            style({opacity:0}),
            animate(250, style({opacity:1})) 
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
            animate(200, style({opacity:0})) 
        ])
    ])
]
})
export class MenuItemComponent implements OnInit {
  [x: string]: any;

  @Input() item: MenuItem;
  @HostBinding('class.parent-is-popup') 
  @Input() parentIsPopup = true;
  isActiveRoute = false;

  mouseInItem = false;
  mousePopup = false;
  popupLeft = 0;
  popupTop = 34;

  constructor(public menuService: MenuService, private router: Router, private renderer: Renderer, private el: ElementRef ) { 

  }

  checkActiveRoute(route: string) {
    this.isActiveRoute = (route == '/' + this.item.route);
    
  }

  ngOnInit() {
        this.checkActiveRoute(this.router.url);

    this.router.events
        .subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.checkActiveRoute(event.url);
                // console.log(event.url + ' ' + this.item.route + ' ' + this.isActiveRoute);
            }
        });

  }

  @HostListener('click', ['$event'])
  onClick(event) : void {

    event.stopPropagation();

    if (this.item.submenu) {
      if (this.menuService.isVertical) {
          this.mouseInPopup = !this.mouseInPopup;
      }
    }
    else if (this.item.route) {
      // force horizontal menus to close by sending a mouseleave event
      let newEvent = new MouseEvent('mouseleave', {bubbles: true});
      console.log(this.el.nativeElement);
      this.renderer.invokeElementMethod(
          this.el.nativeElement, 'dispatchEvent', [newEvent]);

      this.router.navigate(['/' + this.item.route]);
        
    }
  }

  onPopupMouseEnter(event): void {
    if (!this.menuService.isVertical) {
      this.mousePopup = true;
    }
  }

  onPopupMouseLeave(event): void  {
    if (this.menuService.isVertical) {
      this.mousePopup = false;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event) : void {
      if (!this.menuService.isVertical) {
          this.mouseInItem = false;
      }
  }

  @HostListener('mouseenter') 
  onMouseEnter() : void {
      if (!this.menuService.isVertical) {
          if (this.item.submenu) {
              this.mouseInItem = true;
              if (this.parentIsPopup) {
                  this.popupLeft = 160;
                  this.popupTop = 0;
              }
          }
      }
  }

}
