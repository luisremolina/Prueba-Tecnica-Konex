package com.microservicios.microserviciomedicamento.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "medicamentos")
@Getter
@Setter
@NoArgsConstructor
public class MedicamentosEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private Date fechaFabricacion;
    private Date fechaVencimiento;
    private Long stock;
    private Double valorUnitario;


}
