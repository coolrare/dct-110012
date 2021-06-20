import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  keyword = 'demo1';

  constructor(private dataSvc: DataService) { }

  // data: any[] = [];
  data$: Observable<any[]> = {} as Observable<any[]>;

  ngOnInit(): void {
    // this.dataSvc.loadData().subscribe(data => {
    //   this.data = data;
    // });
    this.data$ = this.dataSvc.loadData();
  }

  doSearch(str: string) {
    this.keyword = str;
  }

  removeArticle(id: number) {
    console.log('Deleting Post ' + id);
  }
}
