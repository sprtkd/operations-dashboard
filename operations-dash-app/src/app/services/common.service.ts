import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private breakpointObserver: BreakpointObserver, private _snackBar: MatSnackBar) { }

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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    })
  }
}
