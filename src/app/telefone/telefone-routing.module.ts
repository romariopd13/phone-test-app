import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioTelefoneComponent } from './components/telefone/formulario-telefone/formulario-telefone.component';
import { ListaTelefoneComponent } from './components/telefone/lista-telefone/lista-telefone.component';
import { TelefoneComponent } from './telefone.component';


const routes: Routes = [
    {path: '', redirectTo: '/telefones/lista', pathMatch: 'full'},
    {
        path: '',
        component: TelefoneComponent,
        children: [
            { path: 'lista', component: ListaTelefoneComponent },
            { path: 'novo', component: FormularioTelefoneComponent },
            { path: 'editar/:id', component: FormularioTelefoneComponent },
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TelefoneRoutingModule { }
