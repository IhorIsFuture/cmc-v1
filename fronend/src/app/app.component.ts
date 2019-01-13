import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  public mainPages = {
    homePage : {
      name: 'homePage',
      url: '/',
      active: true
    },
    shop: {
      name: 'shop',
      url: '/shop',
      active: false
    },
    aboutus: {
      name: 'aboutus',
      url: '/aboutus',
      active: false
    },
  };

  constructor(public router: Router) {
    router.events.subscribe((val: any) => {
      if (val.url) {
        this.checkActiveButton(val.url);
      }
    });
  }
  ngOnInit() {

  }

  public checkActiveButton(url) {
    for (const key in this.mainPages) {
      if (url.includes(this.mainPages[key].url) && url !== '/') {
        for (const subKey in this.mainPages) {
          if (this.mainPages[subKey].active === true) {
            this.mainPages[subKey].active = false;
          }
        }
        this.mainPages[key].active = true;
        console.log(url);
      } else {
        if (url === '/') {
          for (const subKey in this.mainPages) {
            if (this.mainPages[subKey].active === true) {
              this.mainPages[subKey].active = false;
            }
          }
          this.mainPages.homePage.active = true;
        }
      }
    }
  }
}
