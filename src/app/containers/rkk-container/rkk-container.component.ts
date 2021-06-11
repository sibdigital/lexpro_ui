import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface TableData {
    name: string
}

@Component({
    selector: 'app-rkk-container',
    templateUrl: './rkk-container.component.html',
    styleUrls: ['./rkk-container.component.css']
})

export class RkkContainer {

    name!: string
    displayedColumns: string[] = ['number', 'name', 'reg_date', 'ins_date',
        'type', 'subject', 'resp_comm', 'resp_person', 'period', 'session_number',
        'session_date', 'agenda_ins', 'status'];
    tableData: TableData[] = []
    dataSource = new MatTableDataSource(this.tableData)
    delIndex = -1
    currentTr!: HTMLTableRowElement

    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        public dialog: MatDialog
    ) {
    }

    trOnClick(index: number, event: MouseEvent) {
        const tr = event.target as HTMLTableRowElement

        if (this.delIndex < 0) {
            this.currentTr = tr
            this.delIndex = index
            tr.style.fontWeight = 'bold'
        }
        else if (tr == this.currentTr) {
            this.delIndex = -1
            tr.style.fontWeight = 'normal'
        }
        else {
            this.currentTr.style.fontWeight = 'normal'
            this.currentTr = tr
            this.delIndex = index
            tr.style.fontWeight = 'bold'
        }
    }

    delClick() {
        if (this.delIndex > -1) {
            if (this.currentTr != undefined)
                this.currentTr.style.fontWeight = 'normal'

            this.tableData.splice(this.delIndex, 1)
            this.dataSource = new MatTableDataSource(this.tableData)
            this.dataSource.sort = this.sort;

            this.delIndex = -1
        }
    }

    editClick() {
        
    }
}