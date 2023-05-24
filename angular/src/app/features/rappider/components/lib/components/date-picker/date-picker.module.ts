import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RappiderDatePickerComponent } from './date-picker.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [RappiderDatePickerComponent],
  exports: [RappiderDatePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzDatePickerModule,
    RappiderTextboxModule,
    TranslateModule,
  ],
})
export class RappiderDatePickerModule {}
