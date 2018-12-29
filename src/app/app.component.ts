import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  public output: any;

  constructor() {

  }
  ngOnInit() {
    this.firstFunction();
  }

  public firstFunction() {
    console.log(this.output);
  }
}
