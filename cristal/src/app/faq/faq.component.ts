import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('.collapse.in').prev('.panel-heading').addClass('active');
      $('#accordion, #bs-collapse')
        .on('show.bs.collapse', function(a) {
          $(a.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function(a) {
          $(a.target).prev('.panel-heading').removeClass('active');
        });
    });
  }

}
