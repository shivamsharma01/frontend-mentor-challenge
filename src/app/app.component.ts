import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { skip } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend-mentor-challenge';

  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.route.queryParams.pipe(skip(1)).subscribe((params) => {
      let project = params['p'];
      if (!project) {
        project = 'challenges';
      }
      this.router.navigate(['/' + project]);
    });
  }
}
