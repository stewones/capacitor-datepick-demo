import { Component } from '@angular/core';
import {
  Datepick,
  DatepickMode,
  DatepickType,
  DatepickTheme
} from 'capacitor-datepick';

const datepick = new Datepick();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  selectedDate: string;
  theme: DatepickTheme = 'light';
  type: DatepickType = 'spinner';
  mode: DatepickMode = 'date';

  constructor() {}

  ngOnInit() {}

  show() {
    datepick
      .present({
        //
        // for ios
        //
        // mode: 'date',
        // locale: 'pt_BR',
        // format: 'dd/MM/yyyy',
        // date: '13/07/2019',
        // theme: this.theme,
        // background: this.theme === 'dark' ? '#333333' : '#ffffff'

        //
        // for androidy
        //
        // title: 'Birthday',
        mode: this.mode, // time/date
        format: 'dd/MM/yyyy',
        // min: '11/07/1986',
        // max: '15/07/1986',
        date: '13/07/1986',
        timezone: 'America/Sao_Paulo',
        type: this.type, // spinner/calendar
        theme: this.theme, // light/dark
        doneText: 'Select',
        cancelText: 'Exit',
        is24h: false // available for time mode
      })
      .then(date => (this.selectedDate = date.value));
  }

  darkMode() {
    this.theme = 'dark';
  }

  lightMode() {
    this.theme = 'light';
  }

  calendar() {
    this.type = 'calendar';
    this.mode = 'date';
    alert(`calendar set`);
  }

  spinner() {
    this.type = 'spinner';
    alert(`spinner set`);
  }

  dateMode() {
    this.mode = 'date';
    this.show();
  }

  timeMode() {
    this.mode = 'time';
    this.show();
  }
}
