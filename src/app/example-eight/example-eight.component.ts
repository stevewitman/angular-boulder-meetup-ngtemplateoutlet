import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-example-eight',
  templateUrl: './example-eight.component.html',
  styleUrls: ['./example-eight.component.scss'],
})
export class ExampleEightComponent {

  @ContentChild('templateEight')
  templateEightRef: TemplateRef<any>;

}
