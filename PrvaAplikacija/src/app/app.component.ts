import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'PrvaAplikacija';
  public data = ['Jan', 'Tomaž', 'Jure'];

  public  bla (vrednost: string) {
     console.log(vrednost);
  }

}



