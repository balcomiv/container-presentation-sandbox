import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-container-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <fieldset class="container">
      <legend>Container One</legend>
      <app-presentation-one
        [user]="userService.user$ | async"
      ></app-presentation-one>

      <!-- Contrived Example. We would be using shareReplay or something with user if we really did need to share -->
      <br />
      <app-presentation-three
        [user]="userService.user$ | async"
      ></app-presentation-three>

      <ng-container *ngIf="showNameChangeButton">
        <br />
        <button (click)="changeUserName()">Change User Name to Bob</button>
      </ng-container>
    </fieldset>
  `,
  styles: [''],
})
export class ContainerOneComponent {
  showNameChangeButton = true;

  constructor(public userService: UserService) {}

  changeUserName(): void {
    this.userService.loadUser({
      firstName: 'Bob',
      lastName: 'Wehadababyitsaboy',
      showHelloMsg: true,
      showJson: false,
    });
  }
}
