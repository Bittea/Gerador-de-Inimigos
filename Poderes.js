document.getElementById('geradorForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var nomeLista = document.getElementById('nomeLista').value.trim().toLowerCase();
  var quantidadeEfeitos = parseInt(document.getElementById('quantidadeEfeitos').value);

  var listasEfeitos = {
    'ninpou': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Restringente', 'Criar Arma'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete'],
      4: ['Coluna', 'Energizar', 'Nuvem', 'Sopro Destrutivo'],
      5: ['Correnteza', 'Onda Explosiva', 'Míssil', 'Raio Nv5'],
      6: ['Algemar', 'Criar Arma Nv6', 'Restringente Nv6', 'Barreira Nv6', 'Flechas Nv6', 'Lança Nv6'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Algemar Nv8', 'Míssil Nv8'],
      9: ['Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9', 'Flechas Nv9'],
      10: ['Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Algemar Nv10', 'Míssil Nv10']
    },
    'doton': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Restringente', 'Criar Arma', 'Imergir', 'Tremor'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete'],
      4: ['Coluna', 'Energizar', 'Nuvem', 'Sopro Destrutivo', 'Cortina de Poeira', 'Imergir Nv4', 'Tremor Nv4'],
      5: ['Correnteza', 'Onda Explosiva', 'Míssil', 'Redução de Peso', 'Raio Nv5'],
      6: ['Algemar', 'Pele de Pedra', 'Adição de Peso', 'Criar Arma Nv6', 'Restringente Nv6', 'Barreira Nv6', 'Flechas Nv6', 'Lança Nv6'],
      7: ['Golem de Pedra', 'Golem de Terra Inasciável', 'Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Redução de Peso Nv8', 'Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Algemar Nv8', 'Míssil Nv8'],
      9: ['Adição de Peso Nv9', 'Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9', 'Flechas Nv9', 'Pele de Pedra Nv9'],
      10: ['Golem de Pedra Nv10', 'Golem de Terra Inasciável Nv10', 'Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Algemar Nv10', 'Míssil Nv10']
    },
    'fuuton': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio'],
      3: ['Barreira', 'Flechas', 'Ricochete'],
      4: ['Coluna', 'Energizar', 'Nuvem', 'Sopro Destrutivo'],
      5: ['Correnteza', 'Onda Explosiva', 'Míssil', 'Inflamável', 'Venenoso', 'Raio Nv5'],
      6: ['Afiar','Barreira Nv6', 'Flechas Nv6'],
      7: ['Lâmina de Vento','Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Inflamável Nv8','Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Míssil Nv8'],
      9: ['Barreira Nv9', 'Flechas Nv9', 'Ricochete Nv9'],
      10: ['Lâmina de Vento Nv9', 'Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Míssil Nv10']
    },
    'katon': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio'],
      3: ['Flechas', 'Ricochete'],
      4: ['Coluna', 'Energizar', 'Sopro Destrutivo'],
      5: ['Onda Explosiva', 'Inflamável', 'Míssil', 'Raio Nv5'],
      6: ['Flechas Nv6'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Raio Nv8', 'Onda Explosiva Nv8', 'Míssil Nv8', 'Inflamável Nv8'],
      9: ['Meteoros', 'Flechas Nv9', 'Ricochete Nv9', 'Flechas Nv9'],
      10: ['Coluna Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Míssil Nv10']
    },
    'raiton': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Lâmina de Raios'],
      3: ['Flechas', 'Ricochete'],
      4: ['Coluna', 'Energizar', 'Sopro Destrutivo', 'Arma Elétrica'],
      5: ['Onda Explosiva', 'Míssil', 'Raio Nv5', 'Lâmina de Raios Nv5'],
      6: ['Descarga', 'Flechas Nv6'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Sopro Destrutivo Nv7', 'Lâmina de Raios Nv7'],
      8: ['Raio Nv8', 'Onda Explosiva Nv8', 'Míssil Nv8', 'Arma Elétrica Nv8'],
      9: ['Meteoros', 'Flechas Nv9', 'Ricochete Nv9', 'Flechas Nv9', 'Lâmina de Raios Nv9'],
      10: ['Coluna Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Míssil Nv10']
    },
    'suiton': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Restringente', 'Criar Arma', 'Imergir', 'Névoa', 'Bolha de Tinta'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete', 'Prisão de Água'],
      4: ['Coluna', 'Energizar', 'Nuvem', 'Sopro Destrutivo', 'Sopro Ácido', 'Imergir Nv4'],
      5: ['Correnteza', 'Braço de Água', 'Inflamável', 'Venenoso', 'Onda Explosiva', 'Míssil', 'Espelho de Água', 'Bolha Sufocante', 'Raio Nv5', 'Névoa Nv5'],
      6: ['Algemar', 'Afogar', 'Colisão de Ondas', 'Criar Arma Nv6', 'Restringente Nv6', 'Barreira Nv6', 'Flechas Nv6', 'Lança Nv6'],
      7: ['Monstro de Água', 'Bolha Flutuante', 'Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Clone de Óleo', 'Colisão de Ondas', 'Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Algemar Nv8', 'Míssil Nv8', 'Inflamável Nv8'],
      9: ['Prisão do Tubarão', 'Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9', 'Flechas Nv9', 'Prisão de Água Nv9'],
      10: ['Colisão de Ondas Nv10', 'Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Algemar Nv10', 'Míssil Nv10']
    },
    'mokuton': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Restringente', 'Criar Arma', 'Imergir', 'Transmissor'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete'],
      4: ['Coluna', 'Energizar', 'Nuvem', 'Sopro Destrutivo', 'Imergir Nv4'],
      5: ['Efemeróptero', 'Correnteza', 'Onda Explosiva', 'Míssil', 'Raio Nv5'],
      6: ['Algemar', 'Selar Chakra', 'Criar Arma Nv6', 'Restringente Nv6', 'Barreira Nv6', 'Flechas Nv6', 'Lança Nv6'],
      7: ['Chuva de Esporos', 'Golem', 'Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Algemar Nv8', 'Míssil Nv8'],
      9: ['Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9', 'Flechas Nv9', 'Selar Chakra Nv9'],
      10: ['Golem Nv10', 'Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Algemar Nv10', 'Míssil Nv10']
    },
    'kikai ninpou': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio'],
      3: ['Barreira', 'Flechas', 'Ricochete', 'Interferência'],
      4: ['Coluna', 'Nuvem', 'Sopro Destrutivo'],
      5: ['Míssil', 'Raio Nv5'],
      6: ['Barreira Nv6', 'Flechas Nv6'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Raio Nv8', 'Míssil Nv8'],
      9: ['Barreira Nv9', 'Flechas Nv9', 'Ricochete Nv9', 'Flechas Nv9'],
      10: ['Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Míssil Nv10']
    },
    'Hyouton': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Restringente', 'Criar Arma'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete'],
      4: ['Coluna', 'Energizar', 'Nuvem', 'Sopro Destrutivo'],
      5: ['Correnteza', 'Onda Explosiva', 'Míssil', 'Raio Nv5'],
      6: ['Algemar', 'Espelhos Demoníacos', 'Criar Arma Nv6', 'Restringente Nv6', 'Barreira Nv6', 'Flechas Nv6', 'Lança Nv6'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Espelhos Demoníacos Nv8', 'Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Algemar Nv8', 'Míssil Nv8'],
      9: ['Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9', 'Flechas Nv9'],
      10: ['Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Algemar Nv10', 'Míssil Nv10']
    },
    'Yoton': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Tremor'],
      3: ['Flechas', 'Ricochete'],
      4: ['Coluna', 'Energizar', 'Sopro Destrutivo', 'Tremor Nv4'],
      5: ['Onda Explosiva', 'Míssil', 'Manto de Lava', 'Raio Nv5'],
      6: ['Flechas Nv6'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Manto de Lava Nv8', 'Raio Nv8', 'Onda Explosiva Nv8', 'Míssil Nv8'],
      9: ['Flechas Nv9', 'Ricochete Nv9', 'Flechas Nv9'],
      10: [ 'Vulcão', 'Coluna Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Míssil Nv10'],
    },
    'Kami Ninpou': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Criar Arma'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete'],
      4: ['Coluna', 'Sopro Destrutivo'],
      5: ['Correnteza', 'Anjo de Papel', 'Míssil', 'Raio Nv5'],
      6: ['Algemar', 'Julgamento', 'Criar Arma Nv6', 'Barreira Nv6', 'Flechas Nv6', 'Lança Nv6'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Raio Nv8', 'Correnteza Nv8', 'Algemar Nv8', 'Míssil Nv8'],
      9: ['Julgamento Nv 9', 'Prisão de Água Nv9', 'Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9', 'Flechas Nv9'],
      10: ['Emissário Divino', 'Coluna Nv10', 'Sopro Destrutivo Nv10', 'Algemar Nv10', 'Míssil Nv10']
    },
    'Senninka': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Criar Arma'],
      3: ['Flechas', 'Corrente'],
      4: ['Energizar', 'Sopro Destrutivo'],
      5: ['Míssil', 'Raio Nv5'],
      6: ['Transferência Celular', 'Criar Arma Nv6', 'Flechas Nv6'],
      7: ['Orbe Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Raio Nv8', 'Míssil Nv8'],
      9: ['Flechas Nv9'],
      10: ['Sopro Destrutivo Nv10', 'Míssil Nv10']
    },
    'Kujako': {
      1: ['Canhão'],
      2: ['Criar Arma', 'Orbe', 'Raio'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete'],
      4: ['Coluna', 'Energizar', 'Sopro Destrutivo', 'Voo'],
      5: ['Correnteza', 'Míssil', 'Onda Explosiva'],
      6: ['Criar Arma Nv6', 'Algemar', 'Barreira Nv6', 'Flechas Nv6', 'Lança Nv6', 'Restringente Nv6'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Sopro Destrutivo Nv7', 'Nuvem Nv7', 'Voo Nv7'],
      8: ['Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Algemar Nv8', 'Míssil Nv8'],
      9: ['Meteoros', 'Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9'],
      10: ['Coluna Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Algemar Nv10', 'Míssil Nv10'],
    },
    'Choujo Giga': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Restringente', 'Imergir', 'Névoa', 'Desenhos Rastreadores'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete', 'Prisão de Água'],
      4: ['Coluna', 'Energizar', 'Nuvem', 'Sopro Destrutivo', 'Montaria', 'Imergir Nv4'],
      5: ['Correnteza', 'Míssil', 'Onda Explosiva', 'Névoa Nv5', 'Névoa de Tinta'],
      6: ['Algemar', 'Selamento de Tinta'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7', 'Montaria Nv7', 'Desenhos Rastreadores Nv7'],
      8: ['Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Algemar Nv8', 'Míssil Nv8'],
      9: ['Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9', 'Prisão de Água Nv9'],
      10: ['Selamento de Tinta Nv', 'Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Algemar Nv10', 'Míssil Nv10'],
    },
    'Kumo Ninpou': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Restringente'],
      3: ['Flechas', 'Ricochete'],
      4: ['Sopro Destrutivo'],
      5: ['Onda Explosiva', 'Míssil', 'Raio Nv5'],
      6: ['Algemar', 'Pele de Pedra', 'Flechas Nv6'],
      7: ['Orbe Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Raio Nv8', 'Onda Explosiva Nv8', 'Algemar Nv8', 'Míssil Nv8'],
      9: ['Flechas Nv9', 'Ricochete Nv9', 'Flechas Nv9', 'Pele de Pedra Nv9'],
      10: ['Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Algemar Nv10', 'Míssil Nv10'],
    },
    'Hebi Ninpou': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Restringente', 'Imergir', 'Infligir Medo'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete'],
      4: ['Coluna', 'Sopro Destrutivo', 'Nuvem', 'Imergir Nv4', 'Braços de Serpente'],
      5: ['Correnteza', 'Onda Explosiva', 'Míssil', 'Venenoso', 'Raio Nv5', 'Infligir Medo Nv5'],
      6: ['Algemar', 'Restringente Nv6', 'Barreira Nv6', 'Flechas Nv6', 'Lança Nv6'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7', 'Infligir Medo Nv7'],
      8: ['Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Algemar Nv8', 'Míssil Nv8'],
      9: ['Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9', 'Flechas Nv9'],
      10: ['Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Algemar Nv10', 'Míssil Nv10']
    },
    'Ototon': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio',],
      3: ['Barreira', 'Flechas', 'Ricochete', 'Sons de Guizo', 'Terceiro Olho'],
      4: ['Coluna', 'Sopro Destrutivo', 'Explosão Sonora'],
      5: ['Correnteza', 'Onda Explosiva', 'Míssil', 'Raio Nv5'],
      6: ['Barreira Nv6', 'Flechas Nv6', 'Sons de Guizo Nv6', 'Badalar do Sino'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Sopro Destrutivo Nv7', 'Explosão Sonora Nv7'],
      8: ['Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Míssil Nv8', 'Badalar do Sino Nv8'],
      9: ['Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9', 'Flechas Nv9', 'Sons de Guizo Nv9'],
      10: ['Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Míssil Nv10', 'Explosão Sonora Nv10', 'Badalar do Sino Nv10']
    },
    'Sabaku': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Restringente', 'Criar Arma', 'Imergir', 'Areia Especial'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete', 'Armadura de Areia'],
      4: ['Coluna', 'Energizar', 'Nuvem', 'Sopro Destrutivo', 'Imergir Nv4'],
      5: ['Correnteza', 'Onda Explosiva', 'Míssil', 'Raio Nv5', 'Prisão de Areia'],
      6: ['Algemar', 'Criar Arma Nv6', 'Restringente Nv6', 'Barreira Nv6', 'Flechas Nv6', 'Lança Nv6', 'Colisão de Ondas'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Algemar Nv8', 'Míssil Nv8', 'Colisão de Ondas Nv8', 'Areia Especial Nv8'],
      9: ['Pirâmide', 'Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9', 'Flechas Nv9', 'Prisão de Areia Nv9'],
      10: ['Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Algemar Nv10', 'Míssil Nv10', 'Colisão de Ondas Nv10']
    },
    'Sakin': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Restringente', 'Criar Arma', 'Imergir', 'Areia Especial'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete', 'Areia Selada', 'Armadura de Pô de Ouro'],
      4: ['Ouro Reluzente', 'Coluna', 'Energizar', 'Nuvem', 'Sopro Destrutivo', 'Imergir Nv4'],
      5: ['Correnteza', 'Onda Explosiva', 'Míssil', 'Raio Nv5', 'Prisão de Areia'],
      6: ['Algemar', 'Criar Arma Nv6', 'Restringente Nv6', 'Barreira Nv6', 'Flechas Nv6', 'Lança Nv6', 'Colisão de Ondas'],
      7: ['Ouro Reluzente Nv7', 'Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Algemar Nv8', 'Míssil Nv8', 'Colisão de Ondas Nv8', 'Areia Especial Nv8'],
      9: ['Ouro Reluzente Nv9', 'Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9', 'Flechas Nv9', 'Prisão de Areia Nv9'],
      10: ['Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Algemar Nv10', 'Míssil Nv10', 'Colisão de Ondas Nv10']
    },
    'Satetsu': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Restringente', 'Criar Arma', 'Imergir', 'Areia Especial'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete', 'Areia Selada', 'Manto de Areia de Ferro'],
      4: ['Coluna', 'Energizar', 'Nuvem', 'Sopro Destrutivo', 'Imergir Nv4', 'Membros de Ferro'],
      5: ['Correnteza', 'Onda Explosiva', 'Míssil', 'Raio Nv5', 'Prisão de Areia'],
      6: ['Algemar', 'Areia de Ferro Venenosa', 'Criar Arma Nv6', 'Restringente Nv6', 'Barreira Nv6', 'Flechas Nv6', 'Lança Nv6', 'Colisão de Ondas', 'Membros de Ferro Nv6'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Algemar Nv8', 'Míssil Nv8', 'Colisão de Ondas Nv8', 'Areia Especial Nv8', 'Membros de Ferro Nv8'],
      9: ['Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9', 'Flechas Nv9', 'Prisão de Areia Nv9'],
      10: ['Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Algemar Nv10', 'Míssil Nv10', 'Colisão de Ondas Nv10', 'Membros de Ferro Nv10']
    },
    'Kibaku Nendo': {
      1: ['Canhão'],
      2: ['Orbe', 'Imergir'],
      3: ['Flechas', 'Mina Explosiva'],
      4: ['Coluna', 'Nuvem', 'Montaria', 'Imergir Nv4'],
      5: ['Onda Explosiva', 'Míssil', 'Inflamável'],
      6: ['Algemar', 'Flechas Nv6', 'Mina Explosiva Nv6'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Montaria Nv7'],
      8: ['Onda Explosiva Nv8', 'Algemar Nv8', 'Míssil Nv8'],
      9: ['Meteoros','Flechas Nv9'],
      10: ['Coluna Nv10', 'Nuvem Nv10', 'Onda Explosiva Nv10', 'Algemar Nv10', 'Míssil Nv10'],
    },
    'Yoton Mei': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Restringente', 'Carga de Lava'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete', 'Onda Queimante'],
      4: ['Coluna', 'Sopro Destrutivo'],
      5: ['Correnteza', 'Míssil', 'Raio Nv5'],
      6: ['Petrificação', 'Restringente Nv6', 'Barreira Nv6', 'Flechas Nv6', 'Lança Nv6', 'Onda Queimante Nv6'],
      7: ['Orbe Nv7', 'Coluna Nv7', 'Sopro Destrutivo Nv7', 'Carga de Lava Nv7'],
      8: ['Raio Nv8', 'Correnteza Nv8', 'Míssil Nv8'],
      9: ['Petrificação Nv9', 'Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9', 'Flechas Nv9'],
      10: ['Coluna Nv10', 'Sopro Destrutivo Nv10', 'Correnteza Nv10', 'Míssil Nv10'],
    },
    'Futton': {
      1: ['Canhão'],
      2: ['Raio', 'Névoa', 'Sopro Concentrado'],
      3: ['Flechas'],
      4: ['Nuvem', 'Sopro Destrutivo'],
      5: ['Correnteza', 'Onda Explosiva', 'Míssil', 'Inflamável', 'Sopro Concentrado Nv5', 'Raio Nv5', 'Névoa Nv5'],
      6: ['Flechas Nv6'],
      7: ['Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Míssil Nv8'],
      9: ['Flechas Nv9'],
      10: ['Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Míssil Nv10'],
    },
    'Ranton': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio'],
      3: ['Flechas', 'Ricochete'],
      4: ['Coluna', 'Energizar', 'Nuvem', 'Sopro Destrutivo'],
      5: ['Míssil', 'Onda Explosiva', 'Feixe de Luz'],
      6: ['Descarga', 'Nuvem Tempestuosa', 'Flechas Nv6', 'Flechas Nv6'],
      7: ['Circo de Laser', 'Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Nuvem Tempestuosa Nv8', 'Raio Nv8', 'Míssil Nv8', 'Onda Explosiva Nv8'],
      9: ['Circo de Laser Nv9', 'Meteoros', 'Flechas Nv9', 'Ricochete Nv9'],
      10: ['Nuvem Tempestuosa Nv10', 'Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Míssil Nv10', 'Onda Explosiva Nv10']
    },
    'Shakuton': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio'],
      3: ['Flechas', 'Kajosatsu'],
      4: ['Coluna', 'Energizar', 'Nuvem', 'Sopro Destrutivo'],
      5: ['Míssil', 'Onda Explosiva'],
      6: ['Flechas Nv6', 'Kajosatsu Nv6'],
      7: ['Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Míssil Nv8', 'Onda Explosiva Nv8'],
      9: ['Meteoros', 'Flechas Nv9', 'Kajosatsu Nv9'],
      10: ['Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Míssil Nv10', 'Onda Explosiva Nv10']
    },
    'Shouton': {
      1: ['Canhão'],
      2: ['Orbe', 'Raio', 'Restringente', 'Criar Arma', 'Imergir'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete'],
      4: ['Esfera de Cristal', 'Coluna', 'Energizar', 'Nuvem', 'Sopro Destrutivo', 'Imergir Nv4'],
      5: ['Correnteza', 'Onda Explosiva', 'Míssil', 'Raio Nv5'],
      6: ['Prisão Cristalina', 'Algemar', 'Criar Arma Nv6', 'Restringente Nv6', 'Barreira Nv6', 'Flechas Nv6', 'Lança Nv6'],
      7: ['Prisma', 'Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Aprimorar Técnica', 'Raio Nv8', 'Correnteza Nv8', 'Onda Explosiva Nv8', 'Algemar Nv8', 'Míssil Nv8'],
      9: ['Prisão Cristalina Nv9', 'Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9', 'Flechas Nv9'],
      10: ['Labirinto', 'Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Onda Explosiva Nv10', 'Algemar Nv10', 'Míssil Nv10']
    },
'Geral': {
      1: ['Canhão'],
      2: ['Criar Arma', 'Orbe', 'Raio', 'Restringente', 'Imergir', 'Tremor', 'Lâmina de Raios', 'Névoa', 'Transmissor', 'Bolha de Tinta', 'Desenhos Rastreadores', 'Infligir Medo', 'Carga de Lava', 'Sopro Concentrado'],
      3: ['Barreira', 'Flechas', 'Lança', 'Ricochete', 'Prisão de Água', 'Interferência', 'Armadura de Areia', 'Terceiro Olho', 'Areia Selada', 'Corrente', 'Sons de Guizo', 'Armadura de Pó de Ouro', 'Manto de Areia de Ferro', 'Mina Explosiva', 'Onda Queimante', 'Kajosatsu'],
      4: ['Coluna', 'Energizar', 'Nuvem', 'Sopro Destrutivo', 'Arma Elétrica', 'Imergir Nv4', 'Tremor Nv4', 'Sopro Ácido', 'Voo', 'Cortina de Poeira', 'Braços de Serpentes', 'Explosão Sonora', 'Ouro Reluzente', 'Membros de Ferro', 'Montaria', 'Esfera de Cristal'],
      5: ['Correnteza', 'Míssil', 'Onda Explosiva', 'Venenoso', 'Inflamável', 'Nuvem', 'Raio Nv5', 'Lâmina de Raios Nv5', 'Névoa Nv5', 'Braço de Água', 'Prisão de Areia', 'Areia Suspensa', 'Espelho de Água', 'Manto de Lava', 'Bolha Sufocante', 'Projetil Venenoso', 'Anjo de Papel', 'Bolha de Tinta Nv5', 'Névoa de Tinta', 'Redução de Peso', 'Feixe de Luz', 'Efemeróptero','Infligir Medo Nv5','Sopro Concentrado Nv5'],
      6: ['Espelho Demoníaco', 'Afogar', 'Julgamento', 'Transferência Celular', 'Selamento de Tinta', 'Badalar do Sino', 'Areia de Ferro Venenosa', 'Aumento de Peso', 'Petrificação', 'Nuvem Tempestuosa', 'Prisão Cristalina', 'Algemar','Sons de Guizo Nv6','Armadura de Pó de Ouro Nv6','Mina Explosiva Nv6','Onda Queimante Nv6','Kajosatsu Nv6','Membros de Ferro Nv6', 'Criar Arma Nv6', 'Restringente Nv6', 'Barreira Nv6', 'Flechas Nv6', 'Lança Nv6'],
      7: ['Monstro de Água', 'Bolha Flutuante', 'Lâmina de Vento', 'Golem', 'Golem de Pedra', 'Circo de Laser', 'Prisma', 'Chuva de Esporos', 'Desenhos Rastreadores Nv7', 'Carga de Lava Nv7','Infligir Medo Nv7','Voo Nv7','Explosão Sonora Nv7','Ouro Reluzente Nv7','Montaria Nv7', 'Orbe Nv7', 'Coluna Nv7', 'Nuvem Nv7', 'Sopro Destrutivo Nv7'],
      8: ['Clone de Óleo','Manto de Lava Nv8','Espelhos Demoníacos Nv8', 'Aprimorar Técnica','Membros de Ferro Nv8','Redução de Peso Nv8','Badalar do Sino Nv8','Nuvem Tempestuosa Nv8', 'Raio Nv8', 'Correnteza Nv8', 'Míssil Nv8', 'Onda Explosiva Nv8', 'Algemar Nv8'],
      9: ['Pirâmide', 'Meteoros', 'Prisão de Areia Nv9','Julgamento Nv9','Sons de Guizo Nv9','Kajosatsu Nv9','Adição de Peso Nv9','Petrificação Nv9','Prisão Cristalina Nv9','Circo de Laser Nv9', 'Barreira Nv9', 'Flechas Nv9', 'Lança Nv9', 'Ricochete Nv9'],
      10: ['Prisão de Tubarões', 'Vulcão', 'Emissário Divino', 'Labirinto','Explosão Sonora Nv10','Ouro Reluzente Nv10','Membros de Ferro Nv10','Selamento de Tinta Nv 10','Badalar do Sino Nv10','Golem de Pedra Nv10','Nuvem Tempestuosa Nv10','Chuva de Esporos Nv10', 'Coluna Nv10', 'Nuvem Nv10', 'Sopro Destrutivo Nv10', 'Míssil Nv10', 'Algemar Nv10']
}
  };

  var nomeListaEncontrada = Object.keys(listasEfeitos).find(key => key.toLowerCase() === nomeLista);

  if (!nomeListaEncontrada) {
    alert('Nome da lista não encontrado.');
    return;
  }

  var listaEfeitos = listasEfeitos[nomeListaEncontrada];
  var efeitosGerados = [];
  var efeitosSelecionados = {};
  var totalPorNivel = {};

  for (var i = 1; i <= 10; i++) {
    if (i <= quantidadeEfeitos) {
      var efeitosDoNivel = listaEfeitos[i];
      if (efeitosDoNivel) {
        var efeitosDisponiveis = efeitosDoNivel.filter(function(efeito) {
          if (!efeito.includes('Nv') && !efeitosSelecionados[efeito]) {
            return true;
          } else if (efeito.includes('Nv')) {
            var efeitoBase = efeito.split(' Nv')[0];
            if (efeitosSelecionados[efeitoBase]) {
              return true;
            }
          }
          return false;
        });

        if (efeitosDisponiveis.length > 0) {
          var efeitoEscolhido = efeitosDisponiveis[Math.floor(Math.random() * efeitosDisponiveis.length)];
          efeitosGerados.push(efeitoEscolhido);
          efeitosSelecionados[efeitoEscolhido] = true;

          if (!totalPorNivel[i]) {
            totalPorNivel[i] = 0;
          }
          totalPorNivel[i]++;
        }
      }
    }
  }

  var novaListaContainer = document.createElement('div');
  var tituloLista = document.createElement('h3');
  tituloLista.textContent = 'Lista ' + nomeListaEncontrada;
  novaListaContainer.appendChild(tituloLista);

  var novaLista = document.createElement('ul');
  novaListaContainer.appendChild(novaLista);

  for (var nivel in totalPorNivel) {
    var itemNivel = document.createElement('li');
    itemNivel.innerHTML = '<strong>Nível ' + nivel + ':</strong>';
    novaLista.appendChild(itemNivel);

    efeitosGerados.forEach(function(efeito) {
      if (listaEfeitos[nivel] && listaEfeitos[nivel].includes(efeito)) {
        var itemLista = document.createElement('li');
        itemLista.textContent = efeito;
        itemLista.addEventListener('click', function() {
          var nivel = null;
          for (var key in listaEfeitos) {
            if (listaEfeitos[key].includes(efeito)) {
              nivel = parseInt(key);
              break;
            }
          }
          if (nivel !== null) {
            var efeitosDoNivel = listaEfeitos[nivel];
            var efeitosDisponiveis = efeitosDoNivel.filter(function(efeito) {
              if (!efeitosSelecionados[efeito]) {
                return true;
              }
              return false;
            });

            if (efeitosDisponiveis.length > 0) {
              var listaSubstituicao = document.createElement('select');

              var optionOriginal = document.createElement('option');
              optionOriginal.textContent = efeito;
              listaSubstituicao.appendChild(optionOriginal);

              efeitosDisponiveis.forEach(function(efeitoDisponivel) {
                var option = document.createElement('option');
                option.textContent = efeitoDisponivel;
                listaSubstituicao.appendChild(option);
              });

              listaSubstituicao.addEventListener('change', function() {
                var novoEfeitoSelecionado = listaSubstituicao.value;
                efeitosGerados[efeitosGerados.indexOf(efeito)] = novoEfeitoSelecionado;
                itemLista.textContent = novoEfeitoSelecionado;
                listaSubstituicao.remove();
              });

              itemLista.innerHTML = '';
              itemLista.appendChild(listaSubstituicao);
            }
          }
        });
        itemNivel.appendChild(itemLista);
      }
    });
  }

  document.getElementById('efeitosGerados').appendChild(novaListaContainer);
});

document.getElementById('removerLista').addEventListener('click', function() {
  var ultimaLista = document.querySelector('#efeitosGerados > div:last-child');
  if (ultimaLista) {
    ultimaLista.remove();
  }
});