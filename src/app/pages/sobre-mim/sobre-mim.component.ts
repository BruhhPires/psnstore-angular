import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.css']
})
export class SobreMimComponent implements OnInit {

  sobreMinTexto: string = `
    Sou Bruno Pires, tenho 34 anos e sou natural de Patos de Minas-MG. Há 13 anos, escolhi Uberlândia-MG como meu lar. Durante todo esse tempo, venho desenvolvendo uma carreira voltada para o atendimento ao cliente em diversas áreas, abrangendo vendas, tecnologia e pós-vendas.

    Nos últimos 5 anos, tive o privilégio de atuar como gestor de equipes. Inicialmente, minha gestão foi focada em vendas, mas na minha experiência mais recente, fui responsável por liderar um time de Especialistas em Processos na Americanas SA. Infelizmente, devido à crise que afetou a Americanas, com o notório "Rombo", fui afetado pelo Layoff, que resultou no encerramento da célula de atendimento SAC em Uberlândia-MG.

    No entanto, sempre tive uma paixão por tecnologia, embora não tenha tido muitas oportunidades de ingressar nesse campo até agora. Minha última experiência me permitiu colaborar de perto com equipes de qualidade, desenvolvedores e outros profissionais do ramo. Essa interação reacendeu meu interesse pelo universo da tecnologia, o que me levou a iniciar uma graduação em Engenharia de Software. Tenho a ambição de, em breve, atuar como desenvolvedor.

    Desde minha saída da Americanas, venho direcionando meus esforços para adquirir novas habilidades e me tornar um Desenvolvedor FullStack com conhecimento em Java e Angular.

    Agradeço pela oportunidade de compartilhar um pouco sobre minha trajetória e paixão pela tecnologia. Estou animado para explorar as possibilidades deste projeto e como posso contribuir com meu entusiasmo e conhecimento em tecnologia, juntamente com minha experiência em gestão. Espero que possamos discutir futuras colaborações e como posso ser parte integrante desse empreendimento.

    Atenciosamente,
    Bruno Pires
`

  constructor() { }

  ngOnInit(): void {
  }

}
