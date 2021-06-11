import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface TableData {
    name: string
}

@Component({
    selector: 'app-add-rkk-container',
    templateUrl: './add-rkk-container.component.html',
    styleUrls: ['./add-rkk-container.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AddRkkContainer {

    name!: string
    displayedColumns: string[] = ['who', 'date', 'notes'];
    displayedColumns2: string[] = ['stage', 'date', 'notes'];
    displayedColumnsAttachments: string[] = ['group', 'type', 'member', 'number', 'date', 'count', 'file'];
    tableData: TableData[] = []
    dataSource = new MatTableDataSource(this.tableData)
    dataSource2 = new MatTableDataSource(this.tableData)
    dataSourceAttachments = new MatTableDataSource(this.tableData)
    delIndex = -1
    currentTr!: HTMLTableRowElement

    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        public dialog: MatDialog
    ) {}
}