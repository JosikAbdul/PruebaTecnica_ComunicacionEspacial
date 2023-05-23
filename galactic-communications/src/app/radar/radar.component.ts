import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {
  coordinates: { x: number, y: number } = { x: 0, y: 0 };
  message: string = '';

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    const distances: number[] = [100.0, 115.5, 142.7];

    this.communicationService.getLocation(distances).subscribe(
      (location: { x: number, y: number }) => {
        this.coordinates = location;
      },
      (error: any) => {
        console.error(error);
      }
    );

    const messages: string[][] = [
      ['este', 'es', '', 'mensaje'],
      ['este', '', 'un', 'mensaje'],
      ['', '', 'es', '', 'mensaje']
    ];

    this.communicationService.getMessage(messages).subscribe(
      (msg: string) => {
        this.message = 'Radar funcionando: Auxilioo!';
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
