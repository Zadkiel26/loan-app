/**
 * Title: base-layout.component.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 5/11/2024
 * Description: Base layout component
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  title: string;

  constructor() {

  }

  ngOnInit(): void {
  }

}
