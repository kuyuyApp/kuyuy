import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs'

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatTabsModule

    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatTabsModule
    ]
})

export class MaterialModule { }