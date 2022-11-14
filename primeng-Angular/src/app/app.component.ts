import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng-Angular';
  items: MenuItem[];
  constructor(){
    this.items = [
      {
          label: 'Ventas',
          routerLink: '/ventas',
          icon: 'pi pi-book',
      },
      {
        label: 'Medicamentos',
        routerLink: '/',
        icon: 'pi pi-cart-plus',
     },

  ];

  }
}
