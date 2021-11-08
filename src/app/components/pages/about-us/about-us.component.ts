import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  msg1: string;
  show1: boolean;

  info1: boolean;
  info2: boolean;
  info3: boolean;
  info4: boolean;

  poz:number;


  constructor(
    private scroller: ViewportScroller
  ) {
    this.msg1 = "See more";
    this.show1 = false;

    this.poz = 150;

    this.info1 = false;
    this.info2 = false;
    this.info3 = false;
    this.info4 = false;
  }

  text1Height() {
    this.show1 = !this.show1;
    if (this.show1) this.msg1 = "Show less";
    else this.msg1 = "See more";
    window.scroll(0, 0);
  }

  btn_info1() {
    this.info1 = !this.info1;
    this.info2 = false;
    this.info3 = false;
    this.info4 = false;
    this.scroller.scrollToAnchor("target1");
  }

  btn_info2() {
    this.info1 = false;
    this.info2 = !this.info2;
    this.info3 = false;
    this.info4 = false;
    this.scroller.scrollToAnchor("target2");
  }

  btn_info3() {
    this.info1 = false;
    this.info2 = false;
    this.info3 = !this.info3;
    this.info4 = false;
    this.scroller.scrollToAnchor("target3");
  }

  btn_info4() {
    this.info1 = false;
    this.info2 = false;
    this.info3 = false;
    this.info4 = !this.info4;
    this.scroller.scrollToAnchor("target4");
  }

  ngOnInit(): void {
  }

}
