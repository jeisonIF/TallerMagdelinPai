import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
})
export class SaludoPage implements OnInit {
  nombre=null
  constructor() { }

  ngOnInit() {
  }
  saludo(){
    console.log("condicional")
    if(this.nombre!=null){
     
      alert("Buenos dias, como estas "+this.nombre+"?")
    }else{
      alert("Hola nn, identificate")
    }
     }

}
