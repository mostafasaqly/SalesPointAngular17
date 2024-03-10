import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  navigate(path: string) {
    if (path == '') this.router.navigate(['category']);
    else {
      this.router.navigate([`category/${path}`]);
    }
  }
}
