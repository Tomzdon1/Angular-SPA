import { FrameworkConfigService, FrameworkConfigSettings } from './../fw/services/framework-config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private FrameworkConfigService: FrameworkConfigService) {

    let config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: 'assets/social-google-bw.png', alt: 'Google +', link: 'http://www.google.com' },
        { imageFile: 'assets/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.twitter.com' }
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    FrameworkConfigService.configure(config);

  }
}
