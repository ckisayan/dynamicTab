import { Component, OnInit, InjectionToken, Input, Inject } from '@angular/core';
export const TITLE = new InjectionToken<string>('app.title');
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  // @Input() title: any;
  constructor(@Inject(TITLE) private titleInjected: any) { }

  ngOnInit() {
    // this.title = TITLE.toString();
    // console.log (this.title);
    // this.title = this.titleInjected || this.title;
    // this.title = this.titleInjected;
    // console.log ('inside titlecomponent.' + this.title.firstName);
  }

}
