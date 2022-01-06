import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TelefoneService } from 'src/app/telefone/services/telefone.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-telefone',
  templateUrl: './formulario-telefone.component.html',
  styleUrls: ['./formulario-telefone.component.css']
})
export class FormularioTelefoneComponent implements OnInit {
  formulario!: FormGroup;
  salvando: boolean = false
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private telefoneService: TelefoneService
  ) { }

  ngOnInit(): void {this.route.params.subscribe((params) => {
    this.createForm()
    if (params.hasOwnProperty('id')) {
      this.telefoneService.getById(params['id']).subscribe(res => {
        this.createForm(res)
      })
    }
  });this.createForm()
  }
  createForm(data?: any){
    this.formulario = this.fb.group({
      id: data ? data.id : null,
      value: data ? data.value : '',
      monthyPrice: data ? data.monthyPrice : '',
      setupPrice: data ? data.setupPrice : '',
      currency: data ? data.currency : ''
    })
  }
  sendPhone(){
    return this.formulario.value.id ? this.updatePhone() : this.savePhone()
  }
  updatePhone(){
    this.salvando = true;
    this.telefoneService.update(this.formulario.value.id, this.formulario.value).subscribe(res => {
      Swal.fire("Salvo com Sucesso.", "", "success")
      this.salvando = false;
      this.router.navigate(['/telefones/lista']);
    })
  }
  savePhone(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
      title: 'Deseja alterar?',
      text: 'Você vai salvar os dados!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, salvar!',
      cancelButtonText: 'Não, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.salvando = true;
        try {
          this.telefoneService.save(this.formulario.value).subscribe(res => {
            Swal.fire("Salvo com Sucesso.", "", "success")
            this.salvando = false;
            this.router.navigate(['/telefones/lista']);
          })
          
        } catch (error) {
          console.error(error);
          this.salvando = false
          Swal.fire("Erro!", "Não foi possível sair. Tente novamente mais tarde.", "error")
        }
      } 
    });
    
  }
}
