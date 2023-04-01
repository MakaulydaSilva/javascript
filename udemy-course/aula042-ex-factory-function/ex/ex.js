function criaComputador() {
  
  return {
    
    placaMae: document.querySelector('.placa-mae'),
    processador: document.querySelector('.processador'),
    memoriaRam: document.querySelector('.memoria-ram'),
    ssd: document.querySelector('.ssd'),
    fonte: document.querySelector('.fonte'),
    placaDeVideo: document.querySelector('.placa-video'),

    inicia() {
      this.botao();
    },

    botao() {
      document.addEventListener('click', e => {
        const botao = e.target;
        if (botao.classList.contains('button')) {
          let textoPc = document.querySelector('.seu-pc');
          textoPc.innerHTML = `Seu pc tem as seguintes configurações. Placa-Mãe:${this.placaMae.value}, Processador:${this.processador.value}, Memória Ram:${this.memoriaRam.value}, SSD${this.ssd.value}, Fonte de alimentação:${this.fonte.value}, Placa de vídeo:${this.placaDeVideo.value}. `;
        }
      })
    },
  }
}

const meuPc = criaComputador();

meuPc.inicia();