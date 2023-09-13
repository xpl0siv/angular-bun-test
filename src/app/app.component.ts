import { Component, OnInit, VERSION } from '@angular/core';

import * as pkgJSON from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'shell';
  shell?: any;

  ngOnInit(): void {
    this.shell = pkgJSON;
  }
}
