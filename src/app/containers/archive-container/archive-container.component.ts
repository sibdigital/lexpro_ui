import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface TableData {
    name: string
}
@Component({
    selector: 'app-archive-container',
    templateUrl: './archive-container.component.html',
    styleUrls: ['./archive-container.component.css']
})

export class ArchiveContainer{

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
}