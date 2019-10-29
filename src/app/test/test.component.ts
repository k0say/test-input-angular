import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  st: string;

  constructor() {}

  ngOnInit() {}

  values = "";
  values2 = "";

  onKey(value: string) {
    this.values += value + " | ";
  }

  onClick(value: string)  {
    this.values2 = value.toUpperCase()
  }

}
