import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  constructor() { }

  getLocationAndMessage(satellites: any[]): any {
    const kenobi = { x: -500, y: -200 };
    const skywalker = { x: 100, y: -100 };
    const sato = { x: 500, y: 100 };

    const distances = satellites.map(satellite => satellite.distance);
    const messages = satellites.map(satellite => satellite.message);

    const x = (distances[1] ** 2 - distances[2] ** 2 + sato.x ** 2) / (2 * sato.x);
    const y = ((distances[0] ** 2 - distances[1] ** 2 + kenobi.x ** 2 + kenobi.y ** 2) - 2 * x * kenobi.x) / (2 * kenobi.y);

    const message = this.getMessage(messages);

    return {
      position: { x, y },
      message
    };
  }

  getMessage(messages: string[][]): string {
    const maxLength = Math.max(...messages.map(message => message.length));

    const decodedMessage: string[] = [];

    for (let i = 0; i < maxLength; i++) {
      const words = messages.map(message => message[i]);

      const uniqueWords = words.filter(word => word !== '');

      const decodedWord = this.getMostFrequentWord(uniqueWords);

      decodedMessage.push(decodedWord);
    }

    return decodedMessage.join(' ');
  }

  getMostFrequentWord(words: string[]): string {
    const wordCount : { [key: string]: number } = {};

    words.forEach(word => {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    });

    let mostFrequentWord = '';

    for (const word in wordCount) {
      if (wordCount[word] > wordCount[mostFrequentWord]) {
        mostFrequentWord = word;
      }
    }

    return mostFrequentWord;
  }
  }

