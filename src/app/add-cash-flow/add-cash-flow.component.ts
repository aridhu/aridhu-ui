import { Component, OnInit } from '@angular/core';
import { IncomeCategory } from '../model/income';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-add-cash-flow',
  templateUrl: './add-cash-flow.component.html',
  styleUrls: ['./add-cash-flow.component.css']
})
export class AddCashFlowComponent implements OnInit {
  incomeCategory: Observable<IncomeCategory[]>;


  constructor(private afs: AngularFirestore) { 
    this.incomeCategory = this.afs.collection<IncomeCategory>('income-category').valueChanges();
  }

  ngOnInit() {
  }

}
