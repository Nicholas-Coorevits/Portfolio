import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: [
  ]
})
export class ProjectComponent implements OnInit {
  ShowProj1:boolean=true
  ShowProj2:boolean=false
  ShowProj3:boolean=false
  ShowProj4:boolean=false
  ShowProj5:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  ToggleTag1() {
    this.ShowProj2=false
    this.ShowProj3=false
    this.ShowProj4=false
    this.ShowProj5=false
    if (!this.ShowProj1) {
      this.ShowProj1=!this.ShowProj1
    }
  }

  ToggleTag2() {
    this.ShowProj1=false
    this.ShowProj3=false
    this.ShowProj4=false
    this.ShowProj5=false
    if(!this.ShowProj2) {
      this.ShowProj2=!this.ShowProj2
    }
  }

  ToggleTag3() {
    this.ShowProj2=false
    this.ShowProj1=false
    this.ShowProj4=false
    this.ShowProj5=false
    if(!this.ShowProj3) {
      this.ShowProj3=!this.ShowProj3
    }
  }

  ToggleTag4() {
    this.ShowProj2=false
    this.ShowProj1=false
    this.ShowProj3=false
    this.ShowProj5=false
    if(!this.ShowProj4) {
      this.ShowProj4=!this.ShowProj4
    }
  }

  ToggleTag5() {
    this.ShowProj2=false
    this.ShowProj1=false
    this.ShowProj3=false
    this.ShowProj4=false
    if(!this.ShowProj5) {
      this.ShowProj5=!this.ShowProj5
    }
  }

}
