import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-one',
  template: `
    <p>
      container-one works!
    </p>
  `,
  styles: [
  ]
})
export class ContainerOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
