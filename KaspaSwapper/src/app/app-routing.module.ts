import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartKaspaComponent } from './start-kaspa/start-kaspa.component';

const routes: Routes = [
  { 
    path:  '',
    component:  StartKaspaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
