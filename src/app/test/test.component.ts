import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  st: string;
  @Input() childMessage
  constructor() {}

  ngOnInit() {}

  values = "";
  values2 = "";
  values3= ""
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
