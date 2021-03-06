import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {


  btn8 = {label: 'Novo', hidden: false};
  clientes: Cliente[];
  columnDefs = [
    {headerName: 'Razão Social', field: 'rsocial', sortable: true, resizable: true},
    {headerName: 'Fantasia', field: 'fantasia', sortable: true, resizable: true},
    {headerName: 'CNPJ', field: 'cnpj', sortable: true, resizable: true},
    {headerName: 'IE', field: 'ie', sortable: true, resizable: true},
    {headerName: 'Endereço', field: 'endereco', sortable: true, resizable: true},
    {headerName: 'Nº', field: 'enderecoNum', sortable: true, resizable: true},
    {headerName: 'Bairro', field: 'bairro', sortable: true, resizable: true},
    {headerName: 'Cidade', field: 'cidade.nome', sortable: true, resizable: true},
    {headerName: 'Telefone', field: 'telefone', sortable: true, resizable: true}
  ];


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
    ) { }

  ngOnInit() {
    this.clientes = this.activatedRoute.snapshot.data.clientes;

  }

  novo(cliente: Cliente) {
    this.clienteService.updateDataSource(cliente);
    this.router.navigate(['/arearestrita/cliente/novo']);
  }

}
