import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navLinks = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/map', icon: 'map', label: 'Map' },
    { path: '/chat', icon: 'chat', label: 'Chat' }
  ];
  route: string;
  constructor(private location: Location, private router: Router) {
    this.router.events.subscribe(val => {
      if (location.path() != '') {
        const currentRoute = location.path();
        this.route = currentRoute.replace('/', '').toUpperCase();
      } else {
        this.route = 'HOME';
      }
    });
  }

  ngOnInit() {}
}
