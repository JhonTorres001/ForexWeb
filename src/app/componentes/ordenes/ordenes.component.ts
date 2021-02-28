import { Component, OnInit } from '@angular/core';

interface Orden {
  ordenid: string;
  estado: string;
  compraventa: string;
  pardedivisas: string;
  divisasnegociados: string;
  tipo: string;
  montoorden: string;
  cantidadderelleno: string;
  tasaorden: string;
  tasaderelleno: string;
}

const ordenesList : Orden[] = [
  {
    ordenid: '40022565',
    estado: 'COMPLETED (FILLED)',
    compraventa: 'Buy',
    pardedivisas: 'USD/COP',
    divisasnegociados: 'USD',
    tipo: 'MKT',
    montoorden: '1,000,000.00',
    cantidadderelleno: '1,000,000.00',
    tasaorden: '3,414.75',
    tasaderelleno: '3,414.7800'
  
  },
  
    {
      ordenid: '40022553',
      estado: 'COMPLETED (FILLED)',
      compraventa: 'Buy',
      pardedivisas: 'USD/COP',
      divisasnegociados: 'USD',
      tipo: 'LMT',
      montoorden: '1,000,000.00',
      cantidadderelleno: '0,00',
      tasaorden: '3,414.75',
      tasaderelleno: '0,0000'
    
    },
    {
      ordenid: '40022553',
      estado: 'COMPLETED (FILLED)',
      compraventa: 'Buy',
      pardedivisas: 'USD/COP',
      divisasnegociados: 'USD',
      tipo: 'LMT',
      montoorden: '1,000,000.00',
      cantidadderelleno: '0,00',
      tasaorden: '3,414.75',
      tasaderelleno: '0,0000'
    
    },
    {
      ordenid: '40022553',
      estado: 'COMPLETED (FILLED)',
      compraventa: 'Buy',
      pardedivisas: 'USD/COP',
      divisasnegociados: 'USD',
      tipo: 'LMT',
      montoorden: '1,000,000.00',
      cantidadderelleno: '0,00',
      tasaorden: '3,414.75',
      tasaderelleno: '0,0000'
    
    }

];

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  ordenes = ordenesList;
  constructor() { }

  ngOnInit(): void {
  }

}
