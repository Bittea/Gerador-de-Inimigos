// ======== Atributos & Parâmetros v2 - com correção de mínimos e layout aprimorado ========

const nomesAtributos = ["Força","Destreza","Agilidade","Percepção","Inteligência","Vigor","Espirito"];
let valores = {};
let ordem = [...nomesAtributos];

// === Cálculos de base ===
function calcularMinimo(NC) {
  if (NC <= 4) return 0;
  return Math.floor((NC - 3) / 2);
}
function calcularPontosTotais(NC) {
  return 12 + Math.max(0, NC - 4) * 6;
}

// === Ajusta valores com base no NC (corrigido) ===
function setupDefaults(NC, forcarReajuste = false) {
  const minimo = calcularMinimo(NC);
  nomesAtributos.forEach(nome => {
    if (forcarReajuste) {
      // sempre realinha para o novo intervalo
      if (valores[nome] < minimo) valores[nome] = minimo;
      if (valores[nome] > NC) valores[nome] = NC;
      // se mínimo e máximo se inverteram (ex: de 8 pra 0), força reset
      if (minimo === 0 && valores[nome] > 0 && NC <= 4) valores[nome] = 0;
    } else {
      if (valores[nome] === undefined) valores[nome] = minimo;
      if (valores[nome] < minimo) valores[nome] = minimo;
      if (valores[nome] > NC) valores[nome] = NC;
    }
  });
}

// === Renderização dos atributos ===
function renderAttributes() {
  const NC = parseInt(document.getElementById('ncInput').value) || 4;
  const minimo = calcularMinimo(NC);
  const maximo = NC;
  const pontosTotais = calcularPontosTotais(NC);
  const totalMinimos = minimo * nomesAtributos.length;
  const pontosDistribuiveis = Math.max(0, pontosTotais - totalMinimos);

  const container = document.getElementById('atributos');
  container.innerHTML = '';

  let usado = 0;
  nomesAtributos.forEach(nome => {
    const valor = valores[nome] ?? minimo;
    usado += Math.max(0, valor - minimo);

    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '8px';

    row.innerHTML = `
      <button class="upBtn" data-attr="${nome}" title="Subir" style="width:26px;">↑</button>
      <button class="downBtn" data-attr="${nome}" title="Descer" style="width:26px;">↓</button>
      <label style="flex:1; min-width:100px; font-weight:bold;">${nome}</label>
      <input type="number" data-attr="${nome}" value="${valor}" min="${minimo}" max="${maximo}" style="width:68px;">
      <span style="opacity:0.6;">/ ${maximo}</span>
    `;
    container.appendChild(row);
  });

  const restantes = Math.max(0, pontosDistribuiveis - usado);
  document.getElementById('pontosTotais').textContent = pontosTotais;
  document.getElementById('pontosRestantes').textContent = restantes;

  // Eventos dos inputs
  container.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', e => {
      const NCnow = parseInt(document.getElementById('ncInput').value) || 4;
      const minimoNow = calcularMinimo(NCnow);
      const maxNow = NCnow;
      let val = parseInt(e.target.value) || minimoNow;
      val = Math.min(Math.max(val, minimoNow), maxNow);
      valores[e.target.dataset.attr] = val;
      renderAttributes();
      atualizarDerivados();
    });
  });

  // Botões de ordem
  container.querySelectorAll('button.upBtn').forEach(b => {
    b.addEventListener('click', () => moverOrdem(b.dataset.attr, -1));
  });
  container.querySelectorAll('button.downBtn').forEach(b => {
    b.addEventListener('click', () => moverOrdem(b.dataset.attr, +1));
  });

  renderOrder();
}

// === Reordenação visual ===
function moverOrdem(attr, delta) {
  const idx = ordem.indexOf(attr);
  const novoIdx = idx + delta;
  if (novoIdx < 0 || novoIdx >= ordem.length) return;
  ordem.splice(idx, 1);
  ordem.splice(novoIdx, 0, attr);
  renderOrder();
}

function renderOrder() {
  const ol = document.getElementById('orderList');
  if (!ol) return;
  ol.innerHTML = '';
  ordem.forEach((nome, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${i + 1}.</strong> ${nome}`;
    li.style.marginBottom = '4px';
    li.style.padding = '4px 8px';
    li.style.borderRadius = '6px';
    li.style.background = 'rgba(255,255,255,0.25)';
    li.style.boxShadow = '0 0 3px rgba(0,0,0,0.2)';
    li.style.fontWeight = 'bold';
    li.style.listStyleType = 'none';
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.gap = '6px';
    ol.appendChild(li);
  });
}

// === Auto-distribuir ===
function autoDistribuir() {
  const NC = parseInt(document.getElementById('ncInput').value) || 4;
  const minimo = calcularMinimo(NC);
  const pontosTotais = calcularPontosTotais(NC);
  const totalMinimos = minimo * nomesAtributos.length;
  let pontosLivres = Math.max(0, pontosTotais - totalMinimos);

  nomesAtributos.forEach(n => {
    if (valores[n] < minimo) valores[n] = minimo;
    if (valores[n] > NC) valores[n] = NC;
  });

  for (let attr of ordem) {
    if (pontosLivres <= 0) break;
    const atual = valores[attr];
    const pode = NC - atual;
    if (pode > 0) {
      const add = Math.min(pontosLivres, pode);
      valores[attr] = atual + add;
      pontosLivres -= add;
    }
  }

  renderAttributes();
  atualizarDerivados();
}

function resetarAoMinimo() {
  const NC = parseInt(document.getElementById('ncInput').value) || 4;
  const minimo = calcularMinimo(NC);
  nomesAtributos.forEach(n => (valores[n] = minimo));
  renderAttributes();
  atualizarDerivados();
}

// === Atualiza perícias e derivados ===
function atualizarDerivados() {
  const NC = parseInt(document.getElementById('ncInput').value) || 4;
  const Força = valores["Força"];
  const Destreza = valores["Destreza"];
  const Agilidade = valores["Agilidade"];
  const Percepção = valores["Percepção"];
  const Inteligência = valores["Inteligência"];
  const Vigor = valores["Vigor"];
  const Espirito = valores["Espirito"];

  // Expõe globalmente
  Object.assign(window, { Força, Destreza, Agilidade, Percepção, Inteligência, Vigor, Espirito });

  // --- Atributos derivados ---
  const Vitalidade = 10 + 3 * Vigor + NC * 5;
  const Chakra = 10 + 3 * Espirito;
  const ModAcerto = 5 + NC;
  const Esquiva = 3 + Agilidade + 9;
  const LerMovimento = 3 + Percepção;
  const Deslocamento = 10 + Math.round(Agilidade / 2);

  const Dano = Math.ceil(NC / 2) + Math.ceil(Espirito / 2);

  // --- Bônus escalonado (mesma tabela para ambos) ---
  const bonusTable = [
    { min: 14, bonus: 4 },
    { min: 12, bonus: 4 },
    { min: 10, bonus: 2 },
    { min: 2, bonus: 1 },
  ];

  // --- Dano Físico (base Força) ---
  const danoFisicoBase = Math.ceil(Força / 2);
  const bonusDanoFisico = bonusTable.find(item => Força >= item.min)?.bonus || 0;
  const DanoFisico = danoFisicoBase + bonusDanoFisico;

  // --- Dano à Distância (base Destreza) ---
  const danoDistanciaBase = Math.ceil(Destreza / 2);
  const bonusDanoDistancia = bonusTable.find(item => Destreza >= item.min)?.bonus || 0;
  const DanoDistancia = danoDistanciaBase + bonusDanoDistancia;

  const Dificuldade = 9 + Math.ceil(NC / 2) + Math.ceil(Espirito / 2);
  const Dureza = Math.ceil(NC / 2) + Math.ceil(Espirito / 2);
  const AlcanceCurto = 5 + Espirito;
  const AlcancePoder = 10 + Espirito * 2;
  const AlcanceLongo = 15 + Espirito * 3;
  const PoderTamanho = Espirito;

  const setIf = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  // --- Atualiza HTML ---
  setIf("NC", NC);
  setIf("ModAcerto", ModAcerto);
  setIf("Vitalidade", Vitalidade);
  setIf("CHAKRA", Chakra);
  setIf("Força", Força);
  setIf("Destreza", Destreza);
  setIf("Agilidade", Agilidade);
  setIf("Percepção", Percepção);
  setIf("Inteligência", Inteligência);
  setIf("Vigor", Vigor);
  setIf("Espirito", Espirito);
  setIf("Esquiva", Esquiva);
  setIf("LerMovimento", LerMovimento);
  setIf("Deslocamento", Deslocamento);
  setIf("Dano", Dano);
  setIf("DanoFísico", `${danoFisicoBase} (+${bonusDanoFisico})`);
  setIf("DanoDistância", `${danoDistanciaBase} (+${bonusDanoDistancia})`);
  setIf("Dificuldade", Dificuldade);
  setIf("Dureza", Dureza);
  setIf("AlcanceCurto", AlcanceCurto);
  setIf("AlcancePoder", AlcancePoder);
  setIf("AlcanceLongo", AlcanceLongo);
  setIf("PoderTamanho", PoderTamanho);

  // --- Atualiza perícias ---
  const setSkill = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  setSkill("Acrobacia", Destreza);
  setSkill("Arte", Inteligência);
  setSkill("Atletismo", Força);
  setSkill("CiênciasNaturais", Inteligência);
  setSkill("Concentração", Inteligência);
  setSkill("Cultura", Inteligência);
  setSkill("Disfarces", Percepção);
  setSkill("Escapar", Destreza);
  setSkill("Furtividade", Agilidade);
  setSkill("LidarComAnimais", Percepção);
  setSkill("Mecanismos", Inteligência);
  setSkill("Medicina", Inteligência);
  setSkill("Ocultismo", Inteligência);
  setSkill("Prestidigitação", Destreza);
  setSkill("Procurar", Percepção);
  setSkill("Prontidão", Percepção);
  setSkill("Rastrear", Percepção);
  setSkill("Venéficio", Inteligência);
  setSkill("Iniciativa", (Percepção + Agilidade));
}

// === Inicialização ===
window.addEventListener('load', () => {
  const ncField = document.getElementById('ncInput');
  if (!ncField) return;
  const inicialNC = parseInt(ncField.value) || 4;
  setupDefaults(inicialNC);
  renderAttributes();
  atualizarDerivados();

  document.getElementById('autoDistribuirBtn').addEventListener('click', autoDistribuir);
  document.getElementById('resetMinBtn').addEventListener('click', resetarAoMinimo);

  // quando NC muda, força reajuste dos mínimos e máximos
ncField.addEventListener('change', () => {
  const novoNC = parseInt(ncField.value) || 4;
  setupDefaults(novoNC, true); // força todos os atributos a se alinhar com o novo mínimo/máximo
  renderAttributes();
  atualizarDerivados();
});
  });