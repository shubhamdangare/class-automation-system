import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MyAccountComponent } from './my-account/my-account.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [MyAccountComponent]
})
export class LoginAndRegistrationModule { }
