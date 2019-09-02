import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'elearning-prototype';
  private apiUrl = 'https://e2c714dd-0248-4a59-acdf-7c452763032c.mock.pstmn.io/slides';

  public apiResponse: any;
  public test: any;
  public showSlides = false;
  public accessDenied = false;
  public errors: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getAPIData(this.apiUrl);
  }

  public getAPIData(url: string) {
    this.apiResponse = {};
    this.http.get(url).subscribe(
      response => {
      this.apiResponse = response;
      console.log(this.apiResponse);
    },
      error => {
        this.errors = error;
        this.accessDenied = true;
      });
  }
  public showSlideComponent() {
    this.showSlides = true;
  }
}
