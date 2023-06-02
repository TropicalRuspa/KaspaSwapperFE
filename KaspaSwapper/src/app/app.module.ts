import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartKaspaComponent } from './start-kaspa/start-kaspa.component';
import { FormsModule } from '@angular/forms';
import{MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider'
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import {LayoutModule} from '@angular/cdk/layout';
import { StartModalComponent } from './start-modal/start-modal.component';
import { CheckSystemDiagnosisComponent } from './check-system-diagnosis/check-system-diagnosis.component';
import { SwapKaspaComponent } from './swap-kaspa/swap-kaspa.component';
import { NewSwapKaspaComponent } from './new-swap-kaspa/new-swap-kaspa.component';
import { OpenSwapKaspaComponent } from './open-swap-kaspa/open-swap-kaspa.component';
import { SettingsKaspaComponent } from './settings-kaspa/settings-kaspa.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    StartKaspaComponent,
    StartModalComponent,
    CheckSystemDiagnosisComponent,
    SwapKaspaComponent,
    NewSwapKaspaComponent,
    OpenSwapKaspaComponent,
    SettingsKaspaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    LayoutModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSortModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
