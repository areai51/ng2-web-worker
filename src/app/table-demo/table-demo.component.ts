import { Component, OnInit } from '@angular/core';
let NUM_ITEMS_PER_ROUND: number = 300;
const MAX_ITEMS = 1000000000;

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.css']
})
export class TableDemoComponent implements OnInit {

lastNum = Math.pow(2, 25);
  items: Array<DataRow> = [];

  constructor() { 
     console.log('num', this.lastNum);
   
  }

    public generateData(): void {
    console.log("Generating data");
    if (this.items.length > MAX_ITEMS) {
      return;
    }
    for (let i = 0; i < NUM_ITEMS_PER_ROUND; i++){
      let num = this.lastNum * 1.05;
      let factor = this._findLargestPrimeFactor(num);
      this.items.push({
        num: num,
        factor: factor
      });

      this.lastNum = num;
    }
  }

    private _findFactors(num: number): Array<number> {
    let factors = [];
    for (let i = 1; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }

  private _isPrime(num: number): boolean {
    return this._findFactors(num).length === 1;
  }

  private _findLargestPrimeFactor(num: number): number {
    let factors = this._findFactors(num);
    if (factors.length === 0) {
      // number is prime
      return num
    }
    let primeFactors = factors.filter((num: number) => this._isPrime(num));
    return primeFactors[primeFactors.length - 1];
  }
  ngOnInit() {
     this.generateData();
  }

}
class DataRow {
  num: number;
  factor: number;
}