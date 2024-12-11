import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Funcionario>();
  
  funcionarioForm!: FormGroup
  funcionario!: Funcionario
  id!: number

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.GetFuncionarioById(this.id).subscribe((data) => {
      const dados = data.dados;

      dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString("pt")
      dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString("pt");

      this.funcionario = dados;
    })
  }

  submit(){
    this.onSubmit.emit(this.funcionarioForm.value)
  }

  ativaInativaFuncionario(){
    this.funcionarioService.InactivateFuncionario(this.id).subscribe((data) => {
      this.router.navigate(['/'])
    })
  }
}
