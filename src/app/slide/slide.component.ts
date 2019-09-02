import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  currentSlide = 0;
  @Input() apiResponse: any;
  constructor() { }

  ngOnInit(): void {
    }

  nextSlide(): void {
    if (this.currentSlide < this.apiResponse.slides.length - 1) {
      this.currentSlide++;
    }

    }
    previousSlide(): void {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    }

    setValue(input): void {
      this.currentSlide = input;
    }
}
