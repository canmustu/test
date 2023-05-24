import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

/* DataStorage interface for ngrx */
import { DataStorage } from 'src/app/features/data-stores/data-storage.interface';

import { InitApp } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test4';

  constructor(private store: Store<DataStorage>) {}

  ngOnInit(): void {
    this.store.dispatch(InitApp());
  }
}
