import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-top-secret',
  templateUrl: './top-secret.component.html',
  styleUrls: ['./top-secret.component.css']
})
export class TopSecretComponent implements OnInit {
  responseCode: number=0;
  response: any;

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    const satellites = [
      { "name": "kenobi", "distance": 100.0, "message": ["este", "", "", "mensaje", ""] },
      { "name": "skywalker", "distance": 115.5, "message": ["", "es", "", "", "secreto"] },
      { "name": "sato", "distance": 142.7, "message": ["este", "", "un", "", ""] }
    ]; // satélites recibidos

    this.response = this.communicationService.getLocationAndMessage(satellites);
    if (this.response) {
      this.responseCode = 200;
    } else {
      this.responseCode = 404;
    }
  }
}
