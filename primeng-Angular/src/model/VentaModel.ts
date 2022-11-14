export class VentaModel{
  constructor(public id: number,
    public fecha: Date,
    public hora: string,
    public medicamento: string,
    public cantidad: number,
    public valorUnitario: number,
    public valorTotal: number){
  }
}
