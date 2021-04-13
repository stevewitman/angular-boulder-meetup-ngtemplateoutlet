import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-example-nine',
  templateUrl: './example-nine.component.html',
  styleUrls: ['./example-nine.component.scss'],
})
export class ExampleNineComponent {

  @Input('templateNine')
  templateNineRef: TemplateRef<any>;
  
}
