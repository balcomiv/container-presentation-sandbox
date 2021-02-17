import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { NewsletterService } from '../../services/newsletter.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-container-two',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <fieldset class="container">
      <legend>Container Two</legend>
      <app-presentation-four
        [user]="userService.user$ | async"
      ></app-presentation-four>

      <!--
        Uncomment 'pre' tag below, and comment out 'app-presentation-four' above if
        you want to see the wrong way to have a container with 'onPush' and change detection not to fire
      -->
      <!-- <pre>{{ user | json }}</pre> -->
      <pre>{{ newsletterService.newsLetter$ | async }}</pre>
    </fieldset>
  `,
  styles: [],
})
export class ContainerTwoComponent implements OnInit {
  user: User | null = null;

  constructor(
    public userService: UserService,
    public newsletterService: NewsletterService
  ) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => (this.user = user));
  }
}
