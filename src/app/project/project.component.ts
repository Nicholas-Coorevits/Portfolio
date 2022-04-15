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
  constructor() { }

  ngOnInit(): void {
  }
  ToggleTag1() {
    this.ShowProj2=false
    this.ShowProj3=false
    if (!this.ShowProj1) {
      this.ShowProj1=!this.ShowProj1
    }
  }

  ToggleTag2() {
    this.ShowProj1=false
    this.ShowProj3=false
    if(!this.ShowProj2) {
      this.ShowProj2=!this.ShowProj2
    }
  }

}
