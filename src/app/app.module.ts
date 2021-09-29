import { environment } from './../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//firebase agregado
import { AngularFireModule } from '@angular/fire';
//firestore angular
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { ListarTarjetaComponent } from './components/listar-tarjeta/listar-tarjeta.component';
import { CrearTarjetasComponent } from './components/crear-tarjetas/crear-tarjetas.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarTarjetaComponent,
    CrearTarjetasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC7llAR9lRjVud76kKQRVYH1FocrtwZ9bM'
    }),
    //importar angular firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
