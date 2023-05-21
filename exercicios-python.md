# Aulas sobre estruturas de controle
- [Estrutura de Controle Parte 1 -->](https://www.youtube.com/watch?v=K10u3XIf1-Q) https://www.youtube.com/watch?v=K10u3XIf1-Q
- [Estrutura de Controle Parte 2 -->](https://www.youtube.com/watch?v=j9bYDjaAYzw) https://www.youtube.com/watch?v=j9bYDjaAYzw
- [Match Case -->](https://www.youtube.com/watch?v=LxT5lk5Fwrs) https://www.youtube.com/watch?v=LxT5lk5Fwrs

## Exercício 1: Verificação de número par ou ímpar

Escreva um programa que solicite ao usuário um número inteiro e exiba uma mensagem indicando se o número é par ou ímpar.

```python
numero = int(input("Digite um número inteiro: "))

if numero % 2 == 0:
    print("O número é par.")
else:
    print("O número é ímpar.")
```

## Exercício 2: Verificação de idade

Escreva um programa que solicite ao usuário sua idade e exiba uma mensagem indicando se ele é maior de idade ou menor de idade.

```python
idade = int(input("Digite sua idade: "))

if idade >= 18:
    print("Você é maior de idade.")
else:
    print("Você é menor de idade.")
```

## Exercício 3: Cálculo de desconto

Escreva um programa que solicite ao usuário o valor de uma compra e, com base nesse valor, calcule o desconto a ser aplicado. Os descontos são os seguintes:

- Compras de até R$ 100: 5% de desconto
- Compras acima de R$ 100 e até R$ 500: 10% de desconto
- Compras acima de R$ 500: 15% de desconto

```python
valor_compra = float(input("Digite o valor da compra: "))

if valor_compra <= 100:
    desconto = valor_compra * 0.05
elif valor_compra <= 500:
    desconto = valor_compra * 0.1
else:
    desconto = valor_compra * 0.15

valor_final = valor_compra - desconto
print(f"O valor com desconto é: R$ {valor_final:.2f}")
```

## Exercício 4: Verificação de dia da semana

Escreva um programa que solicite ao usuário um número correspondente ao dia da semana (1 para segunda-feira, 2 para terça-feira, etc.) e exiba uma mensagem correspondente ao dia da semana.

```python
dia = int(input("Digite um número correspondente ao dia da semana: "))

if dia == 1:
    print("Segunda-feira")
elif dia == 2:
    print("Terça-feira")
elif dia == 3:
    print("Quarta-feira")
elif dia == 4:
    print("Quinta-feira")
elif dia == 5:
    print("Sexta-feira")
elif dia == 6:
    print("Sábado")
elif dia == 7:
    print("Domingo")
else:
    print("Dia inválido.")
```

## Exercício 5: Verificação de mês
### * Utilizando Match Case

Escreva um programa que solicite ao usuário um número correspondente ao mês (1 para janeiro, 2 para fevereiro, etc.) e exiba o nome do mês correspondente.

```python
mes = int(input("Digite um número correspondente ao mês: "))

match mes:
    case 1:
        print("Janeiro")
    case 2:
        print("Fevereiro")
    case 3:
        print("Março")
    case 4:
        print("Abril")
    case 5:
        print("Maio")
    case 6:
        print("Junho")
```

