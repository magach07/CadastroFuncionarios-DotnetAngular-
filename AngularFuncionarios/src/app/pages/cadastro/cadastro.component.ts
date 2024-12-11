import { Component } from '@angular/core';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  btnTitulo = "Cadastrar Funcionário";
  btnBotaoAcao = "Cadastrar";

  constructor(private funcionarioService : FuncionarioService, private router: Router) {
   
  }

  createFuncionario(funcionario: Funcionario){
    this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/'])
    });
  }
}
