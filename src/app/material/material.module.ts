import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';

const modules = [MatMenuModule,
                MatCardModule,
                MatButtonModule,
                MatIconModule,
                MatGridListModule,
                MatToolbarModule,
                MatDialogModule,
                MatFormFieldModule,
                MatSelectModule,
                MatInputModule,
                MatSnackBarModule,
                MatTabsModule
                ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [modules]
})
export class MaterialModule { }
