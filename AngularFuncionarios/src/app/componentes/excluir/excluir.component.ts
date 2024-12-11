import { Component, Inject, input, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Funcionario } from '../../models/Funcionarios';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent implements OnInit {

  inputData: any;
  funcionario!: Funcionario

  constructor(
    private funcionarioService: FuncionarioService,
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data: any)  
  { }
  ngOnInit(): void {
    this.inputData = this.data.id

    this.funcionarioService.GetFuncionarioById(this.inputData).subscribe((data) => {
      this.funcionario = data.dados
    })
  }

  delete(id : number){
    this.funcionarioService.DeleteFuncionario(id).subscribe((data) => {
      window.location.reload();
    })
  }
}