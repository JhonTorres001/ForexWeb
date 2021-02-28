import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params, provideRoutes } from '@angular/router';
import { Preguntas } from '../../models/preguntas';
import { PreguntasService } from '../../Services/preguntas.service';
import {
  EditSettingsModel,
  ToolbarItems,
  SaveEventArgs, 
  GridComponent ,
  QueryCellInfoEventArgs
} from '@syncfusion/ej2-angular-grids';
import { Tooltip } from '@syncfusion/ej2-popups';


import { DialogEditEventArgs } from '@syncfusion/ej2-angular-grids';
import { DataUtil } from '@syncfusion/ej2-data';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css'],
  providers: [PreguntasService],
})
export class ContactoComponent implements OnInit {
  public title: string;
  public data: Object[];
  public preguntas: Preguntas;
  public NewPreguntas: Preguntas;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public orderData: object;
  public estado: string;
  public shipCityDistinctData: object[];
  public shipCountryDistinctData: object[];

  @ViewChild('grid') public Grid: GridComponent;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _preguntasService: PreguntasService
  ) {
    this.title = 'preguntas';
    this.preguntas = new Preguntas(0, '', '', '', '', '',false);
  }

  ngOnInit(): void {
    this.actualPage();
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Dialog',
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Cancel'];
    this.shipCityDistinctData = DataUtil.distinct(Object.values(this.preguntas) , 'ShipCity', true);
    this.shipCountryDistinctData = DataUtil.distinct(Object.values(this.preguntas)  , 'ShipCountry', true );
  }

  load() {
    const rowHeight: number = this.Grid.getRowHeight(); // height of the each row
    const gridHeight: any = this.Grid.height; // grid height
    const pageSize: number = this.Grid.pageSettings.pageSize; // initial page size
    const pageResize: any = (gridHeight - pageSize * rowHeight) / rowHeight; // new page size is obtained here
    this.Grid.pageSettings.pageSize = pageSize + Math.round(pageResize);
  }

  actionComplete(args: DialogEditEventArgs): void {
    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
        args.form.ej2_instances[0].rules = {};
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            // (args.form.elements.namedItem('CustomerID') as HTMLInputElement).focus();
        }
    }
  }

  actualPage() {
    // this._preguntasService.GetQuestion()
    this._preguntasService.get().subscribe(
      (response) => {
        this.preguntas = response;
        console.log(this.preguntas);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
  actionBegin(args: SaveEventArgs) {
    console.log(args.requestType);

    if (args.requestType === 'add') {
      this.estado ="add";
      this.orderData = Object.assign({}, args.rowData);
    }

    if (args.requestType === 'beginEdit') {
      console.log(args);
      this.estado ="update";        
    }

    if (args.requestType === 'save') {      
      console.log(this.estado);

      this.NewPreguntas = new Preguntas(
        args.data['id'],
        args.data['question'],
        args.data['simple_question'],
        args.data['answer'],
        args.data['application_type'],
        args.data['user_type'],
        args.data['status']
        
      );

      if (this.estado == "add") {  
        delete this.NewPreguntas['id'];
        this._preguntasService.register(this.NewPreguntas).subscribe(
          (response) => {
            if (response.preguntas && response.preguntas._id) {
              console.log('Inserto');
            }
          },
          (error) => {
            console.log(<any>error);
          }
        );
      }

      if (this.estado == "update") {
        
      // this.NewPreguntas = new Preguntas(
      //   args.data['id'],
      //   args.data['question'],
      //   args.data['simple_question'],
      //   args.data['answer']
      // );

      console.log("updating..")

      this._preguntasService.update(this.NewPreguntas).subscribe(
        (response) => {
          console.log('Success update');
        },
        (error) => {
          console.log(<any>error);
        }
      );
      }

   

      // const OrderDate = 'OrderDate';
      // args.data[OrderDate] = this.orderData[OrderDate];
    }

    if (args.requestType === 'delete') {
      console.log('Delete');

      this.orderData = Object.assign({}, args.rowData);
    }
  }

  tooltip(args: QueryCellInfoEventArgs) {
    const tooltip: Tooltip = new Tooltip({
        content: args.data[args.column.field].toString()
    }, args.cell as HTMLTableCellElement);
  }


  
}
