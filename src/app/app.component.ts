import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //MAPA
  lat: number ;
  lng: number ;
  zoom: number;
  mapTypeId: string;
  located:boolean;
  //=====================
  nombre = 'Hey man';
  apellido="Apellido Man";
  edad=34;
  modelito='';
  Data:any[]=[];
  miniData:any={}
  //variables de la app dados
  igual:boolean=false;
  numRuta1:number=1;
  numRuta2:number=2;
  ruta1:string="../assets/img/dice1.png"
  ruta2:string="../assets/img/dice2.png"
  constructor(){
    this.lat= 51.678418;
    this.lng= 7.809007;
    this.zoom=6;
    this.mapTypeId="hybrid";
    this.located=false;
    setInterval(()=>{this.nombre="Joe",this.apellido="Tohro", this.edad=143},4000)
  }

  changeValues(name:string, apell:string, n:number){
    this.nombre=name;
    this.apellido=apell;
    this.edad=n;
  }

  addData(){   
    this.Data.push(this.miniData)
    console.log(this.miniData)
    this.miniData={}
  }
  evaluar(){
    if(this.miniData.length>0 &&this.miniData.nombre!==null
      &&this.miniData.apellido!==null && this.miniData.edad!==null
      && this.miniData.file!==null){
    return false;
    }
    else{
      return true;
    }
  }
  emitSound(sound:number):void {
    let audio = new Audio();
      audio.src=`../assets/sonidos/note${sound}.wav`;
      audio.load();
      audio.play()
   }
   Igualar(){
     this.numRuta1=Math.round(Math.random()*5+1);
     this.numRuta2=Math.round(Math.random()*5+1);
    this.ruta1=`../assets/img/dice${this.numRuta1}.png`;
    this.ruta2=`../assets/img/dice${this.numRuta2}.png`;
    if(this.numRuta1===this.numRuta2) this.igual=true
    else this.igual=false
   }
   getCurrentPosition(){
     navigator.geolocation.getCurrentPosition((position)=>{
       this.lat=position.coords.latitude;
       this.lng=position.coords.longitude;
       this.zoom=18;
       this.located=true;
     },(err)=>{
        console.log(err)
     })

   }
}
