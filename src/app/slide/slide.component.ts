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
    this.currentSlide++;

    }
    previousSlide(): void {
      this.currentSlide--;

    }
}
