import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-modal',
  templateUrl: './start-modal.component.html',
  styleUrls: ['./start-modal.component.scss']
})
export class StartModalComponent implements OnInit {
  constructor(protected dialogRef: MatDialogRef<StartModalComponent>,protected router:Router) {}


  ngOnInit(){
    this.dialogRef.afterClosed().subscribe(val=>{
      if(val==='swap'){
        this.router.navigate(['swap']);
      }
      if(val==='check'){
        this.router.navigate(['check']);
      }
    })
  }
}
