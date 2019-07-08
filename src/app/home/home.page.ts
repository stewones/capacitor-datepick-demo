import { Component } from '@angular/core';
import { Datepick } from 'capacitor-datepick';

const datepick = new Datepick();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  selectedDate: string;
  mode: 'dark' | 'light' = 'dark';

  constructor() {}

  ngOnInit() {
    datepick.darkMode();
  }

  show() {
    datepick.present({}).then(date => (this.selectedDate = date.value));
  }

  darkMode() {
    this.mode = 'dark';
    datepick.darkMode();
  }

  lightMode() {
    this.mode = 'light';
    datepick.lightMode();
  }
}
