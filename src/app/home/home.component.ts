import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

export interface ChartData {  // chart grapph details interface
  chart: any[];
  title: string;
}

export interface FooterData {  // footer details interface
  image: string;
  author: string;
  authorDesignation: string;
  summary: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chartData: ChartData; // chart data decleration

  footerData: FooterData = {  // footer data static
    image: 'assets/images/profile.png',
    author: 'william carlson',
    authorDesignation: 'Senior Analyst',
    summary: 'Increase in marketing spend seems to increase the number of impressions in Alpha Brava and looks like it translated to revenue'
  };

  constructor(private service: HomeService) { }
  ngOnInit() {
    this.service.getChartData().subscribe((data: ChartData) => { this.chartData = data; }); // getting chart data from service
  }

}
