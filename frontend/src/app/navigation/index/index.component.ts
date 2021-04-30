import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  closed = 0;
  list: Todo[] = [];
  listFinished: Todo[] = [];
  

  constructor(private service: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{ //pegando os todos finalizados
    this.service.findAll().subscribe((resposta) =>{
      resposta.forEach(todo =>{
        if(todo.finalizado){
          this.listFinished.push(todo);
        }else{
          this.list.push(todo);
        }
      })
      this.closed = this.listFinished.length;
    });
  }

  finalizar(item: Todo):void{
    item.finalizado = true;
    this.service.update(item).subscribe(() => {
      this.service.message('Task Finalizada com Sucesso!');
      this.list = this.list.filter(todo => todo.id !== item.id);
      this.closed++;
    })
  }

  delete(id: any): void{ //MÉTODO DELETE
    this.service.delete(id).subscribe((resposta)=> {
      if(resposta == null){
        this.service.message('Task Deletada com Sucesso!');
        this.list = this.list.filter(todo => todo.id !== id);
      }
    })
  }

  navegarParaFinalizados():void{
    this.router.navigate(['finalizados']);
  }


}
