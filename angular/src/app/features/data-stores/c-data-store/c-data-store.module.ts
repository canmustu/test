import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
/* reducer */
import * as fromCDataStore from './state/c-data-store.reducer';

/* effects */
import { CDataStoreEffects } from './state/c-data-store.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    /* CDataStore State */
    StoreModule.forFeature(fromCDataStore.featureKey, fromCDataStore.reducer, {
      initialState: fromCDataStore.initialState,
    }),
    EffectsModule.forFeature([CDataStoreEffects]),
  ],
  exports: [StoreModule, EffectsModule],
})
export class CDataStoreModule {}
