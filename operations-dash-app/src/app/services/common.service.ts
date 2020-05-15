import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  smallCols(totalCols) {
    if (this.breakpointObserver.isMatched(Breakpoints.Small) || this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      return totalCols;
    }
    else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      return totalCols / 2;
    }
    else {
      return totalCols / 4;
    }
  }
}
