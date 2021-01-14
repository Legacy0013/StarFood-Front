import {Component} from '@angular/core';
import {EcommerceService} from './services/EcommerceService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [EcommerceService]
})
export class AppComponent {
  title = 'StarFood';
}
