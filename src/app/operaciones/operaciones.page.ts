import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {
  n1=null
  n2=null
  operaciones=null
  resul=null
  op=null
  constructor() { }

  ngOnInit() {
  }
  operacioN(){
    this.n1=parseFloat(this.n1)
    this.n2=parseFloat(this.n2)
    operaciones:this.operaciones
   
    if(this.operaciones=="+"){
      console.log("suma")
      this.resul=this.n1+this.n2
      this.op="suma"
    }else if(this.operaciones=="-"){
      console.log("resta")
      this.resul=this.n1-this.n2
      this.op="resta"
    }else if(this.operaciones=="*"){
      console.log("multiplicacion")
      this.resul=this.n1*this.n2
      this.op="multiplicacion"
    }else if(this.operaciones=="/"){
      console.log("dividir")
      this.resul=this.n1/this.n2
      this.op="dividir"
    }else{
      alert("Ingrese un signo de operacion")
    }
  }
}
