import { Component, OnInit, ViewChild } from '@angular/core';
import { SwapMarket } from '../model/swap-market-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-swap-kaspa',
  templateUrl: './swap-kaspa.component.html',
  styleUrls: ['./swap-kaspa.component.scss']
})
export class SwapKaspaComponent implements OnInit{
  displayedColumns: string[] = [
    'swapProviderId',
    'kasPrice',
    'btcPrice',
    'minAmount',
    'address'
  ];
  data:SwapMarket[] = [{
    swapProviderId:'test-id',
    btcPrice:1000,
    kasPrice:134,
    minAmount:10,
    address:'testaddress'
  },
  {
    swapProviderId:'test-id1',
    btcPrice:10001,
    kasPrice:1344,
    minAmount:103,
    address:'testaddress1'
  },
  {
    swapProviderId:'test-id2',
    btcPrice:1023,
    kasPrice:14234,
    minAmount:10123,
    address:'testaddress2'
  },
  {
    swapProviderId:'test-id3',
    btcPrice:10132,
    kasPrice:134232,
    minAmount:99,
    address:'testaddress3'
  }]

  dataSource = new MatTableDataSource(this.data);

  ngOnInit(): void {
    this.data.push({
      swapProviderId:'test-id pushed',
      btcPrice:13,
      kasPrice:9999,
      minAmount:1,
      address:'testaddressPushed'
    })
    
  }

  
  @ViewChild(MatSort) sort!: MatSort ;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
