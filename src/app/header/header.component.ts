import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  sitename = 'Hello World';
  subtitle = '記載著 <mark>Will</mark> 在網路世界的學習心得與技術分享';

  constructor() {
    setTimeout(() => {
      this.sitename = '123123';
    }, 2000);
  }

  changeTitle(name: string, evt: MouseEvent) {
    console.log(evt);
    if (evt.ctrlKey) {
      this.sitename = name;
    }
  }

}
