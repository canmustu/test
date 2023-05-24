import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* app-data-store state */
import { AppDataStoreModule } from './app-data-store/app-data-store.module';
/* a-data-store state */
import { ADataStoreModule } from './a-data-store/a-data-store.module';
/* b-data-store state */
import { BDataStoreModule } from './b-data-store/b-data-store.module';
/* router-data-store state */
import { RouterDataStoreModule } from './router-data-store/router-data-store.module';
/* c-data-store state */
import { CDataStoreModule } from './c-data-store/c-data-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    /* AppDataStore state */
    AppDataStoreModule,
    /* ADataStore state */
    ADataStoreModule,
    /* BDataStore state */
    BDataStoreModule,
    /* RouterDataStore state */
    RouterDataStoreModule,
    /* CDataStore state */
    CDataStoreModule,
  ],
  exports: [StoreModule, EffectsModule],
})
export class DataStoresModule {}
