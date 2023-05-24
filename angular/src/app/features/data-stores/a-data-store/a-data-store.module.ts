import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
/* reducer */
import * as fromADataStore from './state/a-data-store.reducer';

/* effects */
import { ADataStoreEffects } from './state/a-data-store.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    /* ADataStore State */
    StoreModule.forFeature(fromADataStore.featureKey, fromADataStore.reducer, {
      initialState: fromADataStore.initialState,
    }),
    EffectsModule.forFeature([ADataStoreEffects]),
  ],
  exports: [StoreModule, EffectsModule],
})
export class ADataStoreModule {}
