import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'platillo-index',
  templateUrl: './platillo-index.component.html',
  styleUrls: ['./platillo-index.component.css']
})
export class PlatilloIndexComponent implements AfterViewInit {
  datos:any;
  destroy$:Subject<boolean>= new Subject<boolean>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //@ViewChild(MatTable) table!: MatTable<PlatilloAllItem>;
  dataSource= new MatTableDataSource<any>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombre', 'precio',"categoria","ubicaciones","ver"];

  constructor(private router: Router,
    private route: ActivatedRoute,private gService:GenericService) {
    
  }

  ngAfterViewInit(): void {
   
    this.listaPlatillos();
  }
  listaPlatillos() {
    this.gService
      .list('platillo/')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        console.log(data);
        this.datos = data;
        this.dataSource= new MatTableDataSource(this.datos);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  verPlatillo(id: number) {
    this.router.navigate(['/platillo/', id], {
      relativeTo: this.route,
    });
  }
  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  
}
