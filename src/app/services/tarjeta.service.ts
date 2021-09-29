import { TarjetaCredito } from './../models/TarjetaCredito';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  //crear un subject para observar la variable o cambios en la $tarjeta,
  // los que se subscriban sabran cada cambio de su info
  private $tarjeta= new Subject<any>();
  constructor(private firestore: AngularFirestore) {

  }

  saveInfoFirebase(tarjeta:TarjetaCredito):Promise <any>{
   return this.firestore.collection('tarjetas').add(tarjeta);
  }

  getInfoFirebase():Observable <any>{
    //recibiendo los datosde manerta ascendetes o descendentes('desc');
    return this.firestore.collection('tarjetas',ref=>ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }
  deleteInfoFirebase(id:string):Promise <any>{
    return this.firestore.collection('tarjetas').doc(id).delete();
  }
  
  editInfoTarjeta(tarjeta:TarjetaCredito){
    this.$tarjeta.next(tarjeta);
  }
  getInfoTarjeta():Observable<any>{
   return this.$tarjeta.asObservable();
  }

  editInfoFirebase(id:string,tarjeta:any):Promise<any>{
   return this.firestore.collection('tarjetas').doc(id).update(tarjeta);
  }

  

}
