import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexColors,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
  colors: ApexColors;
  legend: ApexLegend;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Real 2023",
          type: "line",
          data: [127, 135, 120, 115, 110, 100, 132, 140, 124, 120, 110, 108]
        },
        {
          name: "Estimación 2024",
          type: "column",
          data: [127, 135, 115, 110, 105, 90, 105, 110, 100, 96, 95, 100]
        },
        {
          name: "Real 2024",
          type: "line",
          data: [130, 136, 114, 105, 107, 85, 103, null, null, null, null, null]
        }
      ],
      colors:['#D31245', '#DC9BE1', '#892B90'],
      chart: {
        height: 350,
        type: "line"
      },
      fill: {
        opacity: [1, 1, 1]
      }
      stroke: {
        width: [4, 0, 4]
      },
      title: {
        text: "Conusumo real vs estimado (mensual)",
        style: {
          fontSize:  '18px'
        }
      },
      dataLabels: {
        enabled: false,
        enabledOnSeries: [1, 2]
      },
      labels: [
        "ene",
        "feb",
        "mar",
        "abr",
        "may",
        "jun",
        "jul",
        "ago",
        "sep",
        "oct",
        "nov",
        "dic"
      ],
      xaxis: {
        type: "string",
        labels: {
          style: {
            fontSize: '14px'
          }
        }
      },
      yaxis: [
        {
          title: {
            text: "Consumo energético final [kWh/m2]",
            style: {
              fontSize:  '14px'
            }
        },
        labels: {
          style: {
            fontSize: '12px'
          }
        }
        }
      ],
      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'bottom',
        horizontalAlign: 'center', 
        floating: false,
        fontSize: '14px',
      }
    };
  }
}
