import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-presentation-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Main -->
    <ng-container *ngIf="user; else loading">
      <fieldset class="presentation">
        <legend>Presentation One</legend>
        <h5 *ngIf="user.showHelloMsg">
          Hello! {{ user.firstName }} {{ user.lastName }}
        </h5>

        <pre *ngIf="user.showJson">{{ user | json }}</pre>

        <br />
        <app-presentation-two [user]="user"></app-presentation-two>
      </fieldset>
    </ng-container>

    <!-- Loading -->
    <ng-template #loading>
      <div>Loading ...</div>
    </ng-template>
  `,
  styles: [],
})
export class PresentationOneComponent implements OnInit {
  @Input() user: User | null = null;

  showHello = false;

  constructor() {}

  ngOnInit(): void {}
}
