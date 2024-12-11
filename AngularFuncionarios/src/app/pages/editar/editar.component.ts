import { Component } from '@angular/core';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute } from '@angular/router';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  btnTitulo = "Editar Funcionário";
  btnBotaoAcao = "Editar";
  funcionario!: Funcionario;

  constructor(private funcionarioService : FuncionarioService, private route : ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.GetFuncionarioById(id).subscribe((data)=>{
      this.funcionario = data.dados;
    })
  }

  editarFuncionario(funcionario: Funcionario){
    this.funcionarioService.UpdateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/'])
    });
  }
}