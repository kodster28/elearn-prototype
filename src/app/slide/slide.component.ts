import { Component, OnInit } from '@angular/core';

import { slideData } from '../slide_data';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  slideData = slideData;
  currentSlide = 0;
  constructor() { }

  ngOnInit(): void {
    }

  nextSlide(): void {
    if (this.currentSlide < slideData.length - 1) {
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
