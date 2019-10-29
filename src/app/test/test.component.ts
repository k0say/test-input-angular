import { Component, OnInit, Input } from "@angular/core";
import { MyServService } from '../my-serv.service'
import { Person } from '../person'

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  st: string;
  @Input() childMessage

  persona: Person;

  constructor(private serv: MyServService) {}

  ngOnInit() {}

  values = "";
  values2 = "";
  //variabile usata per copiare il contenuto del parent dopo il click
  values3= "";

  vai() {
    this.childMessage;
  }

  onKey(value: string) {
    this.values += value + " | ";
  }

  onClick(value: string)  {
    this.values2 = value.toUpperCase()
  }



}
