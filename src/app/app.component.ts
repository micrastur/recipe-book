import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nav = {
    recipeList: false,
    shoppingList: false
  };

  onNavItemClicked(navEvent: { navItem: string }) {
    for (const item of Object.keys(this.nav)) {
      this.nav[item] = navEvent.navItem === item;
    }
    console.log(this.nav);
  }
}
