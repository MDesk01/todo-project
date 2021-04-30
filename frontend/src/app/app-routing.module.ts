
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './navigation/index/index.component';
import { CreateComponent } from './views/create/create.component';

import { FinalizadosComponent } from './views/finalizados/finalizados.component';
import { UpdateComponent } from './views/update/update.component';

const routes: Routes = [{
  path:'',
  component: IndexComponent
},{
  path:'finalizados',
  component: FinalizadosComponent
},{
  path:'create',
  component: CreateComponent
},{
  path:'update/:id',
  component: UpdateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
