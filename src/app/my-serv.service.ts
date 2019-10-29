import { Injectable } from '@angular/core';

@Injectable()
export class MyServService {

  constructor() { }

  data: {id: number, name: string}[] = [
    { "id": 1,"name": "gino"},
    { "id": 2,"name": "pino"},
    { "id": 3,"name": "nino"}
  ];

  getData() {
    return this.data;
  }

}