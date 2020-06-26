import { Component,OnInit } from '@angular/core';
declare var $: any;

@Component( {
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
  }

) export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 170) {
        $(".black").css("background" , "rgba(51, 51, 51, 0.657)");
      }

      else{
        $(".black").css("background" , "#edf0f100");
        }
      })
    })

    const doc=document;
    const menuOpen=doc.querySelector(".menu");
    const menuClose=doc.querySelector(".close");
    const overlay=doc.querySelector(".overlay");
   

    menuOpen.addEventListener("click", ()=> {
        overlay.classList.add("overlay--active");

      }

    );

    menuClose.addEventListener("click", ()=> {
        overlay.classList.remove("overlay--active");
      }

    );

      overlay.addEventListener("click", ()=> {
      overlay.classList.remove("overlay--active");
    }

  );




  }

}


