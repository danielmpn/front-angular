import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Empresa } from 'src/app/models/Empresa';

@Component({
  selector: 'app-nova-empresa',
  templateUrl: './nova-empresa.component.html',
  styleUrls: ['./nova-empresa.component.css']
})
export class NovaEmpresaComponent implements OnInit {

  public empresa: Empresa = new Empresa();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
  }

}
