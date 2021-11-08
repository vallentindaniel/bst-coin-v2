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

  t_counter: any = [2499999940, 0, 0, 0, 0, 0, 0, 0];
  t_counter_stop: any = [2500000000, 7, 20, 30, 8, 10, 11, 14];


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
    this.hover_counter();
  }

  btn_info3() {
    this.info1 = false;
    this.info2 = false;
    this.info3 = !this.info3;
    window.scroll(0, 0);
  }

  hover_counter(){
    this.t_counter = [2499999940, 0, 0, 0, 0, 0, 0, 0];
    let t_counter_stop = setInterval(() => {
      for (let index = 0; index < 9; index++) {
        if (this.t_counter[index] < this.t_counter_stop[index]-0.1)
          this.t_counter[index] += 0.1;
      }
      if (this.t_counter[0] == 2500000000) { //2 500 000 000
        clearInterval(t_counter_stop);
      }
    });
  }


  ngOnInit(): void {
  }

}
