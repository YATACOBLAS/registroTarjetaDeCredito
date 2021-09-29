import { TarjetaCredito } from './../../models/TarjetaCredito';
import { element } from 'protractor';
import { TarjetaService } from './../../services/tarjeta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  tarjetaLista:TarjetaCredito[]=[];
  constructor(private _tarjetaServices:TarjetaService) { }

  ngOnInit(): void {
    this.getInfo()
  }
    getInfo(){
        this._tarjetaServices.getInfoFirebase().subscribe(doc=>{
          this.tarjetaLista=[];
          doc.map((element: any) => {
            this.tarjetaLista.push({
              id:element.payload.doc.id,
              titular:element.payload.doc.data().titular,
              numeroTarjeta:element.payload.doc.data().numeroTarjeta,
              fechaExpiracion:element.payload.doc.data().fechaExpiracion,
              cvv:element.payload.doc.data().cvv,
              fechaCreacion:element.payload.doc.data().fechaCreacion,
              fechaActualizacion:element.payload.doc.data().fechaActualizacion
            })
           
          });       
        
        })
        
    } 
    eliminar(id:any){
      this._tarjetaServices.deleteInfoFirebase(id).then(res=>{console.log(res)})
    }
    editar(tarjeta:any){
      this._tarjetaServices.editInfoTarjeta(tarjeta);
    }
}
