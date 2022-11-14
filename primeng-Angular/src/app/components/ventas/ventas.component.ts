import { Component, OnInit } from '@angular/core';
import { VentaServiceService } from 'src/app/service/venta-service.service';
import { VentaModel } from 'src/model/VentaModel';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventas: VentaModel[] = [];
  cols: any[] = [];
  ventasModel: VentaModel = {
    id: null,
    fecha: null,
    hora: null,
    medicamento: null,
    cantidad: null,
    valorUnitario: null,
    valorTotal: null
};
  constructor(private ventaService: VentaServiceService) { }

  ngOnInit(): void {
    this.cols = [
      {fields: "id", header: "ID"},
      {fields: "fecha", header: "Fecha de venta"},
      {fields: "hora", header: "Hora de venta"},
      {fields: "medicamento", header: "Medicamento"},
      {fields: "cantidad", header: "Cantidad Vendido"},
      {fields: "valorUnitario", header: "Valor Unitario"},
      {fields: "valorTotal", header: "Valor Total"},
    ]
    this.ventaService.getAllVentas().subscribe( response =>{
      let venta: VentaModel[] = [];
      for (let index = 0; index < response.length; index++) {
        let medicamento = response[index] as VentaModel;
        medicamento.fecha = new Date(medicamento.fecha);
        venta.push(medicamento);
      }
      this.ventas = venta;
    }, error => console.log(error));
  }


}
