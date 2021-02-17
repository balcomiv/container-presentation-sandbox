import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-presentation-three',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Main -->
    <ng-container *ngIf="user; else loading">
      <fieldset class="presentation">
        <legend>Presentation Three</legend>
        <h5 *ngIf="user.showHelloMsg">
          Hello! {{ user.firstName }} {{ user.lastName }}
        </h5>

        <pre *ngIf="user.showJson">{{ user | json }}</pre>

        <ng-container *ngIf="showContainer">
          <br />
          <app-container-two></app-container-two>
        </ng-container>
      </fieldset>
    </ng-container>

    <!-- Loading -->
    <ng-template #loading> <div>Loading ...</div> </ng-template>
  `,
  styles: [],
})
export class PresentationThreeComponent {
  @Input() user: User | null = null;

  showContainer = true;
}
