import { Component, OnInit } from '@angular/core';
import { MedicamentoServiceService } from 'src/app/service/medicamento-service.service';
import { medicamento } from 'src/model/medicamento';
import { VentaModel } from 'src/model/VentaModel';
import {MenuItem, MessageService} from 'primeng/api';
import { VentaServiceService } from 'src/app/service/venta-service.service';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {

  medicamentos: medicamento[] = [];
  ventas: VentaModel[] = [];
  cols: any[] = [];
  items: MenuItem[] = [];
  displaySaveDialog: boolean = false;
  displaySaveDialogVenta: boolean = false;

  medicamentoModel: medicamento = {
        id: null,
        nombre: null,
        fechaFabricacion: null,
        fechaVencimiento: null,
        stock: null,
        valorUnitario: null
  };

  ventasModel: VentaModel = {
    id: null,
    fecha: null,
    hora: null,
    medicamento: null,
    cantidad: null,
    valorUnitario: null,
    valorTotal: null
};

  constructor(private medicamentoService: MedicamentoServiceService,
    private messageService: MessageService,
    private ventaService: VentaServiceService) { }

  ngOnInit(): void {
    this.getAllMedicamentos();
    this.cols = [
      {fields: "id", header: "ID"},
      {fields: "nombre", header: "Nombre"},
      {fields: "fechaFabricacion", header: "Fecha de Fabricacion"},
      {fields: "fechaVencimiento", header: "Fecha de Vencimiento"},
      {fields: "stock", header: "Cantidad en Stock"},
      {fields: "valorUnitario", header: "Valor Unitario"},
    ]

    this.items = [
      {
        label: "Nuevo",
        icon: "pi pi-fw pi-plus",
        command: () => this.showSaveDialog()
      },
    ]

  }

  calcularTotal(){
      this.ventasModel.valorTotal =  (this.ventasModel.valorUnitario*this.ventasModel.cantidad);
  }

  showSaveDialog(){
    this.displaySaveDialog = true;
    this.medicamentoModel = {
      id: null,
      nombre: null,
      fechaFabricacion: null,
      fechaVencimiento: null,
      stock: null,
      valorUnitario: null
  };
  }

  saveProduct(){
    this.medicamentoService.save(this.medicamentoModel).subscribe( (response) =>{
      let medicamen = response as medicamento;
      if(this.medicamentoModel.id === null){
        this.medicamentos.push(medicamen);
      }

      this.messageService.add({severity: 'success', summary:"Resultado", detail:"Se guardó el medicamento correctamente."})
      this.displaySaveDialog = false;
    }, error => console.log(error));
  }

  hideDialog(){
    this.displaySaveDialog = false;
    this.displaySaveDialogVenta = false;
  }


  handleClickVender(event: any){
    this.ventasModel.cantidad = 0;
    this.ventasModel.valorTotal = 0;
    this.medicamentoModel = this.medicamentos.find(medicamento => medicamento.id == event);
    this.displaySaveDialogVenta = true;
    this.ventasModel.medicamento = this.medicamentoModel.nombre;
    this.ventasModel.valorUnitario = this.medicamentoModel.valorUnitario;
  }

  handleClickEditar(event: any){
    this.medicamentoModel = this.medicamentos.find(medicamento => medicamento.id == event);
    this.displaySaveDialog = true;
  }

  handleClickEliminar(event: any){
    this.medicamentoService.delete(event).subscribe((response) =>{
      this.messageService.add({severity: 'success', summary:"Resultado", detail:"Se Elimino el medicamento correctamente."});
      this.medicamentos = this.medicamentos.filter(medicamento => medicamento.id !== event);
    }, error => console.log(error));
  }

  venderMedicamento(){
    let fecha = new Date()
    this.ventasModel.fecha = fecha;
    this.ventasModel.hora = fecha.getHours()+":"+fecha.getMinutes();
    this.ventasModel.medicamento =  this.medicamentoModel.nombre;

    this.medicamentoModel.stock = this.medicamentoModel.stock - this.ventasModel.cantidad;
    this.saveProduct();
    this.ventaService.save(this.ventasModel).subscribe(response =>{
      this.messageService.add({severity: 'success', summary:"Resultado", detail:"Se Realizó la venta correctamente."});
      this.displaySaveDialogVenta = false;
    }, error => console.log(error));
  }
  temporal(event){
    console.log(event)
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

  getAllMedicamentos(){
    this.medicamentoService.getAllMedicamentos().subscribe( (result): any =>{
      let medica: medicamento[] = [];
      for (let index = 0; index < result.length; index++) {
        let medicamento = result[index] as medicamento;
        medicamento.fechaFabricacion = this.formatDate(medicamento.fechaFabricacion);
        medicamento.fechaVencimiento = this.formatDate(medicamento.fechaVencimiento);
        medica.push(medicamento);
      }
      this.medicamentos = medica;
    },
    error => {
      console.log(error);
    }
    );
  }

}
