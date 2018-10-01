import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navClick = new EventEmitter<{navItem: string}>();

  constructor() { }

  ngOnInit() {
  }

  onNavClick(e) {
    const clickedNavItem = e.target.dataset.navList;
    this.navClick.emit(
      {navItem: clickedNavItem}
    );
  }

}
