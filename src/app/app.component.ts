import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'inicial',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Editar',
      url: '/editar-usuario',
      icon: 'pencil'
    },
    {
      title: 'Meus pets',
      url: '/meus-pets',
      icon: 'reorder-four'
    },
    {
      title: 'Cuidadores',
      url: '/cuidadores',
      icon: 'reorder-four'
    },
    {
      title: 'Contratos',
      url: '/contratos',
      icon: 'reorder-four'
    }
  ];
  public labels = [''];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('/home')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
