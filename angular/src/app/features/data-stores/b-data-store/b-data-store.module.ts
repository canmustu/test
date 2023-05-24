import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
/* reducer */
import * as fromBDataStore from './state/b-data-store.reducer';

/* effects */
import { BDataStoreEffects } from './state/b-data-store.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    /* BDataStore State */
    StoreModule.forFeature(fromBDataStore.featureKey, fromBDataStore.reducer, {
      initialState: fromBDataStore.initialState,
    }),
    EffectsModule.forFeature([BDataStoreEffects]),
  ],
  exports: [StoreModule, EffectsModule],
})
export class BDataStoreModule {}
