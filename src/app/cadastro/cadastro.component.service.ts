import { Injectable } from "@angular/core";
import { ICadastroCliente } from "../model/Icadastro-cliente";

@Injectable({
    providedIn:'root'
})
export class CadastroService {
    //trens = ['Locomotiva','Thomas, o trem','Trem Mineiro','Trem-bala'];
    clientes: ICadastroCliente[] = [{
        nome: "Fulano",
        idade: 25
    },
    {
        nome: "Beltrano",
        idade: 18
    }]
    adicionar(nome:string, quantidadeTrem: number):void {
        const novoTrem: ICadastroCliente = {
            nome: nome,
            idade: quantidadeTrem
        }
        this.clientes.push(novoTrem);
    }
    excluir(index: number): void {
        this.clientes.splice(index,1)
    }
    editar(index:number, nome:string, idade: number): void {
        const tremEditado: ICadastroCliente = {
            nome: nome,
            idade: idade
        }
        this.clientes.splice(index,1,tremEditado);
    }
}