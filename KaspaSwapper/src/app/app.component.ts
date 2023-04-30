import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { StartModalComponent } from './start-modal/start-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,OnInit{
  title = 'KaspaSwapper';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
 
   constructor(private observer: BreakpointObserver,public dialog: MatDialog) {}
  ngOnInit(): void {
    this.dialog.open(StartModalComponent, { disableClose: true })
  }
 
   ngAfterViewInit() {
     this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
       if (res.matches) {
         this.sidenav.mode = 'over';
         this.sidenav.close();
       } else {
         this.sidenav.mode = 'side';
         this.sidenav.open();
       }
     });
   }
}
