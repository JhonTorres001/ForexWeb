import { Component, OnInit ,ViewChild} from '@angular/core';
import { data } from './datasource';
import { DialogEditEventArgs, SaveEventArgs, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DataUtil } from '@syncfusion/ej2-data';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params, provideRoutes } from '@angular/router';
import { MensajesBot } from '../../models/mensajesbot';
import { MensajesbotService } from '../../Services/mensajebot.service';

@Component({
  selector: 'app-mensajebot',
  templateUrl: './mensajebot.component.html',
  styleUrls: ['./mensajebot.component.css'],
  providers: [MensajesbotService]
})
export class MensajebotComponent implements OnInit {

  public title: string;
  public data: object[];
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public orderData: object;
  @ViewChild('orderForm') public orderForm: FormGroup;
  public shipCityDistinctData: object[];
  public shipCountryDistinctData: object[];
  public mensajesBot: MensajesBot;


   constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _MensajesbotService: MensajesbotService
  ) {
    this.title = 'Mensajes ChatBot UD';
    this.mensajesBot = new MensajesBot(0, '', '', '','','', '');
  }


  ngOnInit(): void {
    this.actualPage();
    this.data = data;
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    this.toolbar = ['Add', 'Edit', 'Delete'];
    this.shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);
    this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true );

  }

  
  actionBegin(args: SaveEventArgs): void {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        this.orderData = Object.assign({}, args.rowData);;
    }
    if (args.requestType === 'save') {
        if (this.orderForm.valid) {
            args.data = this.orderData;
        } else {
            args.cancel = true;
        }
    }
  }  

  actionComplete(args: DialogEditEventArgs): void {
    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
        args.form.ej2_instances[0].rules = {};
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            (args.form.elements.namedItem('CustomerID') as HTMLInputElement).focus();
        }
    }
  }

  actualPage() {

    this._MensajesbotService.get().subscribe(
      (response) => {
        this.mensajesBot = response;
        console.log(this.mensajesBot);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}

export interface IOrderModel {
OrderID?: number;
CustomerID?: string;
ShipCity?: string;
OrderDate?: Date;
Freight?: number;
ShipCountry?: string;
ShipAddress?: string;
}
  


