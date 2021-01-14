import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppComponent} from '../../app.component';
import {EcommerceComponent} from '../ecommerce.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title = 'StarFood';
  reset: boolean;

  @Output() onReset: EventEmitter<boolean>;
  @Output() goToCategories: EventEmitter<boolean>;

  constructor() {
    this.reset = false;
    this.onReset = new EventEmitter<boolean>();
    this.goToCategories = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  hitReset() {
    this.reset = true;
    this.onReset.emit(this.reset);
    // this.router.navigate(['products/byCategory/', categoryId]);
  }

  showCategories() {
    this.goToCategories.emit(true);
  }
}
