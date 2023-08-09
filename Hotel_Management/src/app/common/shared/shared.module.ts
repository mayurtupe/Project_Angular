import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { ToastrModule } from "ngx-toastr";
import { MatDialogModule } from "@angular/material/dialog";


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
        MatToolbarModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSelectModule,
        MatOptionModule,
        FormsModule,
        ToastrModule.forRoot(),
        MatDialogModule,

    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatRadioModule,
        MatInputModule,
        MatToolbarModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSelectModule,
        MatOptionModule,
        FormsModule,
        ToastrModule,
        MatDialogModule,
    ]
})
export class SharedModule { }