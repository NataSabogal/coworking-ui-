import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class Home {
  constructor(private router: Router) {}

  goToAccount(): void {
    this.router.navigate(['/account']);
  }
}