# Jogo de Combate - Funcionamento Simplificado
Este projeto consiste em um jogo de combate desenvolvido em JavaScript, utilizando programação orientada a objetos. Abaixo está uma explicação simplificada do funcionamento do jogo:

## Personagens
Existem três tipos de personagens jogáveis:

### Knight (Cavaleiro):

* Vida: 100
* Ataque: 10
* Defesa: 10
### Mage (Mago):

* Vida: 80
* Ataque: 15
* Defesa: 5
### Rogue (Ladino):

* Vida: 60
* Ataque: 18
* Defesa: 7
  
Cada personagem possui características únicas, como quantidade de vida, poder de ataque e habilidade de defesa.

### Monstros
Existem dois tipos de monstros no jogo:

### LittleMonster (Monstro Pequeno):

* Vida: 40
* Ataque: 5
* Defesa: 6
### BigMonster (Monstro Grande):

* Vida: 120
* Ataque: 16
* Defesa: 6

Os monstros são os oponentes que os jogadores enfrentam durante o jogo.

## Interface do Jogo
A interface do jogo exibe dois elementos principais:

### Personagem do Jogador:

Apresenta a barra de vida, nome e botão de ataque do personagem controlado pelo jogador.
Monstro:

Exibe a barra de vida, nome e botão de ataque do monstro que o jogador deve derrotar.

## Funcionamento
### 1. **Inicialização:**

* O jogo começa com a criação de um personagem para o jogador (Knight, Mage ou Rogue) e um monstro (LittleMonster ou BigMonster).
Configuração do Cenário:
* Uma instância da classe Stage é criada para gerenciar o cenário do jogo, com os personagens e a interação entre eles.

### 2. **Interatividade:**

* O jogador pode clicar no botão de ataque do seu personagem para atacar o monstro.
* O monstro reage automaticamente, perdendo vida quando atacado.

### 3. **Atualização da Interface:**

* A interface do jogo é atualizada dinamicamente para refletir o estado atual dos personagens, mostrando as barras de vida atualizadas e mensagens de ação.

### 4. **Log de Ações:**

* Um registro de log na tela exibe mensagens sobre as ações realizadas durante o jogo, como ataques e resultados.
