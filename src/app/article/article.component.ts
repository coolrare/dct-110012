import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input() item: any = {};
  @Input() i: number = 0;

  @Output() delete = new EventEmitter<number>();

  constructor() { }

  doDelete() {
    this.delete.emit(this.item.id);
  }


}
