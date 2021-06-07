import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface TableData {
    fam: string;
    login: number;
    name: number;
    otch: string;
}
@Component({
    selector: 'app-types-container',
    templateUrl: './types-container.component.html',
    styleUrls: ['./types-container.component.css']
})

export class TypesContainer implements OnInit {

    tableData: TableData[] = []
    displayedColumns: string[] = ['login', 'fam', 'name', 'otch'];
    dataSource!: MatTableDataSource<TableData>
    i = 0

    @ViewChild(MatSort) sort!: MatSort;

    constructor() {
        this.tableData.push({ login: 1, fam: '2', name: 3, otch: '4' })
        this.dataSource = new MatTableDataSource(this.tableData);
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

    ngOnInit() {

    }

    cl() {
        this.tableData.push({ login: this.i++, fam: '2', name: 3, otch: '4' })
        this.dataSource._updateChangeSubscription()

        console.log(this.dataSource)
    }
}