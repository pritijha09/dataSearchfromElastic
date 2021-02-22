import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CoreHttpService } from 'src/app/core/services/coreHttpServices/core-http.service';
export interface DataList {
  timestamp: any;
  level: any;
  messageTemplate: any;
  renderedMessage: any;
  exception: any;
  properties: any;
}

@Component({
  selector: 'app-elastic-data',
  templateUrl: './elastic-data.component.html',
  styleUrls: ['./elastic-data.component.scss']
})
export class ElasticDataComponent implements OnInit {
  searchText: string;
  selectedData: string;
  displayedColumns = ['timestamp', 'level', 'messageTemplate', 'renderedMessage', 'exception', 'properties'];
  public dataSource: MatTableDataSource<DataList>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

   constructor(private coreHttpService: CoreHttpService) {
   }

   /** Method to get selected data */
   getSelectedData(event) {
     this.selectedData = event;
   // this.getElasticDataList(event)
   }

   getElasticDataList() {
    this.coreHttpService.get(`list-data/${this.selectedData}=${this.searchText}`).subscribe(res => {
      this.dataSource = new MatTableDataSource(res.data);
    }, error=> {
      console.log(error);
    })
   }

   ngOnInit() {
     this.dataSource = new MatTableDataSource([
       {timestamp: 'Tue Feb 05 2019',
      level: 'Test1', messageTemplate: 'message template', renderedMessage: 'test',
      exception: 'test', properties: 'test' },
      {timestamp: 'Tue Feb 05 2019',
      level: 'Test1', messageTemplate: 'message template', renderedMessage: 'test',
      exception: 'test', properties: 'test' },
      {timestamp: 'Tue Feb 05 2019',
      level: 'Test1', messageTemplate: 'message template', renderedMessage: 'test',
      exception: 'test', properties: 'test' },
      {timestamp: 'Tue Feb 05 2019',
      level: 'Test1', messageTemplate: 'message template', renderedMessage: 'test',
      exception: 'test', properties: 'test' },
      {timestamp: 'Tue Feb 05 2019',
      level: 'Test1', messageTemplate: 'message template', renderedMessage: 'test',
      exception: 'test', properties: 'test' }
    ]);
    // console.log(this.dataSource)
   }

   /**
    * Set the paginator and sort after the view init since this component will
    * be able to query its view for the initialized paginator and sort.
    */
   ngAfterViewInit() {
     //this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
   }

   applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }
 }
