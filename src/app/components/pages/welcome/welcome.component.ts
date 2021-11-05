import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  info1: boolean;
  info2: boolean;
  info3: boolean;

  contract: string;

  constructor(
    private clipboard: Clipboard
  ) { 
    this.info1 = false;
    this.info2 = false;
    this.info3 = false;
    this.contract = "0x5a75e593349216897548dd4a1c9e5a59c7ef1ba1";
  }

  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
  }

  btn_info1(){
    this.info1 = !this.info1;
    this.info2 = false;
    this.info3 = false;
    window.scroll(0,0);
  }

  btn_info2(){
    this.info1 = false;
    this.info2 = !this.info2;
    this.info3 = false;
    window.scroll(0,0);
  }

  btn_info3(){
    this.info1 = false;
    this.info2 = false;
    this.info3 = !this.info3;
    window.scroll(0,0);
  }

  ngOnInit(): void {
  }

}
