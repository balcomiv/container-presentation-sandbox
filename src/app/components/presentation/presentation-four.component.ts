import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-presentation-four',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Main -->
    <ng-container *ngIf="user; else loading">
      <fieldset class="presentation">
        <legend>Presentation Four</legend>
        <h5 *ngIf="user.showHelloMsg">
          Hello! {{ user.firstName }} {{ user.lastName }}
        </h5>

        <pre *ngIf="user.showJson">{{ user | json }}</pre>
      </fieldset>
    </ng-container>

    <!-- Loading -->
    <ng-template #loading> <div>Loading ...</div> </ng-template>
  `,
  styles: [],
})
export class PresentationFourComponent {
  @Input() user: User | null = null;
}
