import { TopBarComponent } from './top-bar/top-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ScreenService } from './services/screen.services';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { ScreenLarge } from './directives/screen-large.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenBelowLarge,
    ScreenLarge
  ],
  exports:[
    FrameworkBodyComponent
  ],
  providers: [
    FrameworkConfigService,
    ScreenService
  ]
})
export class FwModule { }
