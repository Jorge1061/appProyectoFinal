import { Component } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { GenericService } from 'src/app/share/generic.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mesa-index',
  templateUrl: './mesa-index.component.html',
  styleUrls: ['./mesa-index.component.css']
})
export class MesaIndexComponent {
  datos: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private gService: GenericService
  ) {
    this.listaMesas();
  }

  listaMesas() {
    this.gService
      .list('mesa/')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        console.log(data);
        this.datos = data;
      });
  }

  detalleMesa(id: number) {
    this.router.navigate(['/mesa', id], {
      relativeTo: this.route,
    });
  }
  onBack() {
    this.router.navigate(['/']);
  }
}