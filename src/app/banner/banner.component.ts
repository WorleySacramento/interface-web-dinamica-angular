import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy {

  hoje: Date = new Date();
  timerId: any;

  ngOnInit(): void {
    console.log('BannerComponent foi inicializado.');
    this.timerId = setInterval(() => {
      this.hoje = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('BannerComponent foi destruído.');
    clearInterval(this.timerId);
  }
  
}
