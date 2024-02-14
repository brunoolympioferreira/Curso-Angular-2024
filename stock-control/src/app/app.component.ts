import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stock-control';

  constructor(private primeNfConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primeNfConfig.ripple = true;
    this.primeNfConfig.setTranslation({
      apply: 'Aplicar',
      clear: 'Limpar'
    })
  }
}
