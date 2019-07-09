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
  theme: 'dark' | 'light' = 'light';

  constructor() {}

  ngOnInit() {}

  show() {
    datepick
      .present({
        mode: 'date',
        locale: 'pt_BR',
        format: 'dd/MM/yyyy',
        date: '13/07/2019',
        theme: this.theme,
        background: this.theme === 'dark' ? '#333333' : '#ffffff'
      })
      .then(date => (this.selectedDate = date.value));
  }

  darkMode() {
    this.theme = 'dark';
  }

  lightMode() {
    this.theme = 'light';
  }
}
