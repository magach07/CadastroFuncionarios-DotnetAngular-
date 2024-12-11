import { Component, inject, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/Funcionarios';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from '../../componentes/excluir/excluir.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  funcionarios: Funcionario[] = [];
  funcionariosGeral : Funcionario[] = [];

  colunas = ['Status', 'Nome', 'Sobrenome', 'Departamento', 'Ações', 'Excluir']

  constructor(private funcionarioService : FuncionarioService, private router : Router ){ }

  ngOnInit(): void {
    
    this.funcionarioService.GetAllFuncionarios().subscribe(data => {
      const dados = data.dados

      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString("pt-BR");
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString("pt-BR");

        this.funcionarios = data.dados;
        this.funcionariosGeral = data.dados;
      })
    });

  }

  search(event : Event){
    const target = event.target as HTMLInputElement
    const value = target.value;

    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value.toLowerCase()) || funcionario.sobrenome.toLowerCase().includes(value.toLowerCase())
    })
  }

  openDialog(id : number) {
    this.dialog.open(ExcluirComponent, {
      data: {
        id : id
      }
    });
  }
}