import {
  Component, OnInit} from '@angular/core';
  declare var $: any;

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.scss']
})
export class SobreNosComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    window.scroll(0, 0)


  }

}
