import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface OptyInfo {
    Optyname: string;
    OptyAmount: number;
    CloseDate: string;
    AssetOwner: string;
    SoldToParty: string;
    Tier2Party: string;
}

const OPTY_DATA: OptyInfo[] = [
    {Optyname: 'Cisco Dec 11', OptyAmount: 2000, CloseDate: '31-JAN-19', AssetOwner: 'Cisco'
        , SoldToParty: 'Orange Business', Tier2Party: null},
    {Optyname: 'Seagate Dec 11', OptyAmount: 5000, CloseDate: '15-JAN-19', AssetOwner: 'Seagate'
        , SoldToParty: 'Seagate', Tier2Party: 'Avnet'},
];

@Component({
  selector: 'app-opty',
  templateUrl: './opty.component.html',
  styleUrls: ['./opty.component.css']
})
export class OptyComponent implements OnInit {
    displayedColumns: string[] = ['Optyname', 'OptyAmount', 'CloseDate'
                                , 'AssetOwner', 'SoldToParty', 'Tier2Party', 'select'];
    dataSource = new MatTableDataSource<OptyInfo>(OPTY_DATA);
    // dataSource = OPTY_DATA;
  constructor() { }

  ngOnInit() {
  }

}
