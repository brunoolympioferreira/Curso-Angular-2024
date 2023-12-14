import { Component, Input, OnInit } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interfaces/weatherDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherDatasInput!: WeatherDatas;

  ngOnInit(): void {
    console.log('DADOS RECEBIDOS DO COMPONENTE PAI - WEATHER-CARD:',
      this.weatherDatasInput);
  }
}
