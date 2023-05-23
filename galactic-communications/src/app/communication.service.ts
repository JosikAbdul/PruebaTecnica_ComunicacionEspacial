import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private satellites = [
    { name: 'Kenobi', position: { x: -500, y: -200 }, delay: 0 },
    { name: 'Skywalker', position: { x: 100, y: -100 }, delay: 0 },
    { name: 'Sato', position: { x: 500, y: 100 }, delay: 0 }
  ];

  getLocation(distances: number[]): Observable<{ x: number, y: number }> {
    const locatedSatellites = this.satellites.filter((satellite, index) => distances[index] !== -1);
    const trilateration = this.trilaterate(locatedSatellites.map(satellite => satellite.position), distances);
    return of(trilateration);
  }

  getMessage(messages: string[][]): Observable<string> {
    const maxLength = Math.max(...messages.map(message => message.length));
    let decodedMessage: string[] = [];

    for (let i = 0; i < maxLength; i++) {
      const words = messages.map(message => message[i] || '');
      const uniqueWords = Array.from(new Set(words));
      const decodedWord = uniqueWords.length === 1 ? uniqueWords[0] : '';
      decodedMessage.push(decodedWord);
    }

    const finalMessage = decodedMessage.join(' ');
    return of(finalMessage);
  }

  private trilaterate(positions: { x: number, y: number }[], distances: number[]): { x: number, y: number } {


    const A = 2 * positions[0].x - 2 * positions[1].x;
    const B = 2 * positions[0].y - 2 * positions[1].y;
    const C = Math.pow(distances[1], 2) - Math.pow(distances[0], 2) - Math.pow(positions[1].x, 2) + Math.pow(positions[0].x, 2) - Math.pow(positions[1].y, 2) + Math.pow(positions[0].y, 2);
    const D = 2 * positions[1].x - 2 * positions[2].x;
    const E = 2 * positions[1].y - 2 * positions[2].y;
    const F = Math.pow(distances[2], 2) - Math.pow(distances[1], 2) - Math.pow(positions[2].x, 2) + Math.pow(positions[1].x, 2) - Math.pow(positions[2].y, 2) + Math.pow(positions[1].y, 2);

    const x = (C * E - F * B) / (E * A - B * D);
    const y = (C * D - A * F) / (B * D - A * E);

    return { x, y };
  }
}
