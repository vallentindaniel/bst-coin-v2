import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tokenomics',
  templateUrl: './tokenomics.component.html',
  styleUrls: ['./tokenomics.component.scss']
})
export class TokenomicsComponent implements OnInit {

  info1: boolean;
  info2: boolean;
  info3: boolean;

  constructor() {
    this.info1 = false;
    this.info2 = false;
    this.info3 = false;
  }
  btn_info1() {
    this.info1 = !this.info1;
    this.info2 = false;
    this.info3 = false;
    window.scroll(0, 0);
  }

  btn_info2() {
    this.info1 = false;
    this.info2 = !this.info2;
    this.info3 = false;
    window.scroll(0, 0);
  }

  btn_info3() {
    this.info1 = false;
    this.info2 = false;
    this.info3 = !this.info3;
    window.scroll(0, 0);
  }


  ngOnInit(): void {
  }

}
