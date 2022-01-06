import { Component, OnInit } from '@angular/core';
import { TelefoneService } from 'src/app/telefone/services/telefone.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-telefone',
  templateUrl: './lista-telefone.component.html',
  styleUrls: ['./lista-telefone.component.css']
})
export class ListaTelefoneComponent implements OnInit {
  loading: boolean = false
  telefones: any[] = []
  constructor(
    private telefoneService: TelefoneService
  ) { }

  ngOnInit(): void {
    this.listaTelefones()
  }

  listaTelefones(){
    this.loading = true;
    this.telefoneService.getAll().subscribe(res => {
      this.telefones = res
      this.loading = false
    })
  }
  destroyPhone(phone: any) {
    let index = this.telefones.indexOf(phone);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
      title: 'Deletar item?',
      text: 'Você não poderá reverter isso!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Não, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.telefoneService.destroy(phone.id).subscribe(() => {
          this.telefones.splice(index, 1);
          Swal.fire("Poof!", "Deletado com sucesso!", "success");
        })
      } else {
        swalWithBootstrapButtons.fire('Cancelado', 'Item não excluído! :)', 'error')
      }
    });
  }

}
