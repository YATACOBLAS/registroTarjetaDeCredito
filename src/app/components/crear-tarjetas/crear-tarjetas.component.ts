import { TarjetaService } from './../../services/tarjeta.service';
import { TarjetaCredito } from './../../models/TarjetaCredito';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-tarjetas',
  templateUrl: './crear-tarjetas.component.html',
  styleUrls: ['./crear-tarjetas.component.css']
})
export class CrearTarjetasComponent implements OnInit {

  form:FormGroup;
  titulo='Crear Tarjeta';
  textButton='Guardar';
  id:string | undefined;
  constructor(private fm:FormBuilder,private _tarjetaServices:TarjetaService) {
    this.form=this.fm.group({
      //estoy inivcializando titulo con vacio ''
       titular:['',Validators.required],
       numeroTarjeta:['',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
       fechaExpiracion:['',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]],
       cvv:['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]]
    })
    
   }

  ngOnInit(): void {
    this._tarjetaServices.getInfoTarjeta().subscribe(doc=>{
        this.id=doc.id;
        this.titulo="Modificar Tarjeta" 
        this.textButton='Modificar';
      this.form.patchValue({
        titular:doc.titular,
        numeroTarjeta:doc.numeroTarjeta,
        fechaExpiracion:doc.fechaExpiracion,
        cvv:doc.cvv,
        fechaCreacion:doc.fechaCreacion,
        fechaActualizacion:doc.fechaActualizacion
      })
     
    })
  }
  guardarTarjeta(){
    if(this.id!==undefined){
      this.modificarTarjeta(this.id);
    }else{
      this.crearTarjeta()
    }
  }

  modificarTarjeta(id: string){
    const TARJETA: any = {
      titular:this.form.value.titular,
      numeroTarjeta:this.form.value.numeroTarjeta,
      fechaExpiracion:this.form.value.fechaExpiracion,
      cvv:this.form.value.cvv,
      fechaActualizacion:new Date()
    }
    this._tarjetaServices.editInfoFirebase(id,TARJETA).then(()=>{
      this.form.reset();
      this.id=undefined;
        this.titulo="Crear Tarjeta" 
        this.textButton='Guardar';
    
    }).catch(err=>{console.log(err)})
  }


  crearTarjeta(){
    const TARJETA:TarjetaCredito = {
      titular:this.form.value.titular,
      numeroTarjeta:this.form.value.numeroTarjeta,
      fechaExpiracion:this.form.value.fechaExpiracion,
      cvv:this.form.value.cvv,
      fechaCreacion:new Date(),
      fechaActualizacion:new Date()
    }
    this._tarjetaServices.saveInfoFirebase(TARJETA).then(res=>{
      this.form.reset();
    }).catch(err=>{console.log(err)});

  }


}
