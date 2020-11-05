import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-indicator',
  templateUrl: './scroll-indicator.component.html',
  styleUrls: ['./scroll-indicator.component.css']
})
export class ScrollIndicatorComponent implements OnInit {

  constructor() {
    this.ScrollIndicator();
  }

  ngOnInit(): void {

  }

  myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  ScrollIndicator() {
    window.onscroll = () => {
      this.myFunction();
    }
  }
}
