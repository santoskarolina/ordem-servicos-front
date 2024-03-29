import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindClientsComponent } from './find-clients/find-clients.component';

const routes: Routes = [{ path: '', component: FindClientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
