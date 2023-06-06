import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartKaspaComponent } from './start-kaspa/start-kaspa.component';
import { CheckSystemDiagnosisComponent } from './check-system-diagnosis/check-system-diagnosis.component';
import { SwapKaspaComponent } from './swap-kaspa/swap-kaspa.component';
import { NewSwapKaspaComponent } from './new-swap-kaspa/new-swap-kaspa.component';
import { OpenSwapKaspaComponent } from './open-swap-kaspa/open-swap-kaspa.component';
import { SettingsKaspaComponent } from './settings-kaspa/settings-kaspa.component';

const routes: Routes = [
  { 
    path:  'swap',
    component:  SwapKaspaComponent,
  },
  { 
    path:  'check',
    component:  CheckSystemDiagnosisComponent,
  },
  { 
    path:  'new_swap',
    component:  NewSwapKaspaComponent,
  },
  { 
    path:  'open_swap',
    component:  OpenSwapKaspaComponent,
  },
  { 
    path:  'settings',
    component:  SettingsKaspaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
