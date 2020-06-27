import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  nomeUsuario:string;
  tipoUsuario:string;
  admin:boolean;

  constructor(private router:Router, public auth:AuthService) { }

  ngOnInit(): void {

    $(document).ready(function(){
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 170) {
          $(".black").css("background" , "#3b0e67a8");
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

  atualizaNavbar(){
    this.nomeUsuario = sessionStorage.getItem('nomeUsuario');
    this.tipoUsuario = sessionStorage.getItem('tipoUsuario');
    this.admin = false;
    if(this.tipoUsuario==="admin"){
      this.admin=true;
    }else{
      this.admin=false;
    }
    this.separaPrimeiroNome(this.nomeUsuario);
  }

  separaPrimeiroNome(nomeUsuario){
    let primeiroNome = this.nomeUsuario.split(' ').slice(0,1);
    return primeiroNome;
  }

  sair(){
    this.router.navigate(['/home'])
    sessionStorage.clear();
  }

}


