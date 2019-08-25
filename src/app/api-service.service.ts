import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  printToConsole(arg) {
    console.log(arg);
  }
}
