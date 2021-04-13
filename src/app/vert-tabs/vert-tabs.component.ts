import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-vert-tabs',
  templateUrl: './vert-tabs.component.html',
  styleUrls: ['./vert-tabs.component.scss'],
})
export class VertTabsComponent<T extends { label: string }> implements OnInit {
  selected: T;

  @Input() initialTab;
  @Input() tabs: T[];

  @Input('selectedTemplate') selectedTemplateRef: TemplateRef<any>;

  @ContentChild('tabTemplate', { static: false })
  tabTemplateRef: TemplateRef<any>;

  @Output() selectionChanged = new EventEmitter<T>();

  ngOnInit() {
    this.selectTab(this.initialTab);
  }

  selectTab(tab: T) {
    this.selected = tab;
    this.selectionChanged.emit(tab);
  }
}
