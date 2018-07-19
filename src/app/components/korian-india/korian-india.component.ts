import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-korian-india',
  templateUrl: './korian-india.component.html',
  styleUrls: ['./korian-india.component.less']
})
export class KorianIndiaComponent implements OnInit {
  public title: String;
  constructor() { }

  ngOnInit() {
    this.title = 'Sandeep Gang Mansa wasi !!!!';
  }

}
