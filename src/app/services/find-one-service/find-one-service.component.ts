import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResServicoResolve, ServiceModel } from '../../models/service.model';
import { ServicesService } from '../services.service';
import { map, switchMap } from 'rxjs/operators'
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-find-one-service',
  templateUrl: './find-one-service.component.html',
  styleUrls: ['./find-one-service.component.css']
})
export class FindOneServiceComponent implements OnInit {

  serviceModel: ServiceModel;
  inscricao: Subscription

  constructor(
      private readonly servicesService: ServicesService, 
      private readonly activaredRoute: ActivatedRoute, 
      private readonly router: Router) { }

  ngOnInit(): void {
    this.findOne();
  }

  wayBack(): void{
    this.router.navigate(['/main/servicos'])
  }

  findOne(): void {
    this.inscricao = this.activaredRoute.data.subscribe((data: ResServicoResolve) => {
      this.serviceModel = data.servico
    })
  }

  update(){
    this.router.navigate([`/main/servicos/update/${this.serviceModel.service_id}`])
  }

  delete(){
    Swal.fire({
      title: 'Deletar serviço',
      icon:'question',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if(result.isConfirmed){
        this.servicesService.delete(this.serviceModel.service_id).subscribe(
          result => {
            this.successModel()
          }, error => {
            this.errorModel()
          }
        )
      }
    })
  }

  successModel(){
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Serviço deletado com sucesso',
      showConfirmButton: true,
    }).then((result) => {
      if(result.isConfirmed){
        this.router.navigate([`/main/servicos`])
      }
    }) 
  }

  errorModel(){
    Swal.fire({
      icon: 'error',
      title: 'Opss...!',
      text: 'Serviço não pode ser deletado',
      showConfirmButton: true,
    }).then((result) => {
      if(result.isConfirmed){
        this.router.navigate([`/main/servicos/dados/${this.serviceModel.service_id}`])
      }
    }) 
  }
}

