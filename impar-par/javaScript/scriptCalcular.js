      // seleciona o elemento UL na página
      const numerosList = document.getElementById("numeros");
      
      // percorre os números de 1 a 100
      for (let i = 1; i <= 100; i++) {
        // cria um novo elemento LI para cada número
        const numeroItem = document.createElement("li");
        
        // verifica se o número é par ou ímpar
        if (i % 2 === 0) {
          // se for par, adiciona a classe "par" ao elemento LI
          numeroItem.classList.add("par");
          // adiciona a mensagem "par" ao texto do elemento LI
          numeroItem.textContent = i + " - par";
        } else {
          // se for ímpar, adiciona a classe "impar" ao elemento LI
          numeroItem.classList.add("impar");
          // adiciona a mensagem "impar" ao texto do elemento LI
          numeroItem.textContent = i + " - impar";
        }
        
        // adiciona o elemento LI à lista UL
        numerosList.appendChild(numeroItem);
      }