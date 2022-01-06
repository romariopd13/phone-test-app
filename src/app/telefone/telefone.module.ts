import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelefoneComponent } from './telefone.component';
import { SharedModule } from '../shared/shared.module';
import { TelefoneRoutingModule } from './telefone-routing.module';
import { ListaTelefoneComponent } from './components/telefone/lista-telefone/lista-telefone.component';
import { FormularioTelefoneComponent } from './components/telefone/formulario-telefone/formulario-telefone.component';



@NgModule({
  declarations: [
    TelefoneComponent,
    ListaTelefoneComponent,
    FormularioTelefoneComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TelefoneRoutingModule
  ]
})
export class TelefoneModule { }
