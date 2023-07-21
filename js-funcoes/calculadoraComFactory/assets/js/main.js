function criaCalculadora() {
  return {
    //atributos
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),
    //métodos
    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },
    realizaConta() {
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta invalida");
          return;
        }
        this.display.value = String(conta);
      } catch (e) {
        alert("Conta invalida");
        return;
      }
    },
    //capturando os cliques(método)
    cliqueBotoes() {
      //this -> calculador
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText); //método
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }
        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }

        this.display.focus();
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();

/**O display esta dentro do atributo do meu objeto
 * sempre que precisar uso this.display
 * sempre colocar virgula entre as métodos
 * el de elemeto. Quando uma método é chamado
 * dento de outro método, pr4ecios do this
 * this.btnParaDisplay (exemplo acima)
 * a arrow function não permite alteração do this
 */
