import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../app/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elearn-prototype';

  constructor(private svc: ApiServiceService, private http: HttpClient) {
    this.svc.printToConsole('Got the service');
  }

  ngOnInit() {
    let obs = this.http.get('https://randomuser.me/api/?results=1');
    obs.subscribe((response) => console.log(response));
  }
}
