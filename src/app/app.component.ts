import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'elearning-prototype';
  private apiUrl = 'https://4b9ee35b-edf7-4852-9679-4036c5592c9b.mock.pstmn.io/slides';

  public apiResponse: any;
  public test: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getAPIData(this.apiUrl);
  }

  getAPIData(url: string) {
    this.apiResponse = {};
    this.http.get(url).subscribe((response) => {
      this.apiResponse = response;
      console.log(this.apiResponse);
    });
  }
}
