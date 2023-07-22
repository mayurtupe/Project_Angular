import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatRadioModule,
        MatInputModule,
        ReactiveFormsModule
        ],
        exports: [
            MatCardModule,
            MatInputModule,
            MatRadioModule
            ]     
})
export class SharedModule { }