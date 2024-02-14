interface Hotkey {
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  metaKey?: boolean; 
  key?: string;
  sequence?: string;
  message: string;
  exp?: string;
}

const hotkeys: Hotkey[] = [
  { ctrlKey: true, shiftKey: true, key: "ArrowUp", message: "Ctrl + Shift + Arrow Up", exp: "Mover texto arriba." },
  { ctrlKey: true, key: "Enter", message: "Ctrl + Enter", exp: "Insertar línea abajo." },
  { ctrlKey: true, key: "s", message: "Ctrl + S", exp: "Guardar archivo." },
  { shiftKey: true, key: "Tab", message: "Shift + Tab", exp: "Disminuir indentación." },
  { ctrlKey: true, key: "c", message: "Ctrl + C", exp: "Copiar texto." },
  { ctrlKey: true, key: "v", message: "Ctrl + V", exp: "Pegar texto." },
  { ctrlKey: true, key: "x", message: "Ctrl + X", exp: "Cortar texto." },
  { ctrlKey: true, key: "z", message: "Ctrl + Z", exp: "Deshacer." },
  { key: "Backspace", message: "Retroceso", exp: "Borrar carácter." },
  { key: "End", message: "Fin", exp: "Fin de línea." },
  { key: "Home", message: "Inicio", exp: "Inicio de línea." },
  { shiftKey: true, key: "Home", message: "Shift + Inicio", exp: "Seleccionar a inicio." },
  { ctrlKey: true, shiftKey: true, key: "Home", message: "Ctrl + Shift + Inicio", exp: "Seleccionar a inicio doc." },
  { shiftKey: true, key: "End", message: "Shift + End", exp: "Seleccionar a fin línea." },
  { ctrlKey: true, shiftKey: true, key: "End", message: "Ctrl + Shift + End", exp: "Seleccionar a fin doc." },
  { ctrlKey: true, shiftKey: true, key: "z", message: "Ctrl + Shift + Z", exp: "Rehacer." },
  { ctrlKey: true, shiftKey: true, key: "d", message: "Ctrl + Shift + D", exp: "Duplicar." },
  { ctrlKey: true, shiftKey: true, key: "k", message: "Ctrl + Shift + K", exp: "Eliminar línea." },
  { altKey: true, key: "d", message: "Alt + D", exp: "Foco en barra dirección." },
  { ctrlKey: true, key: "f", message: "Ctrl + F", exp: "Buscar." },
  { ctrlKey: true, key: "n", message: "Ctrl + N", exp: "Nuevo archivo." },
  { ctrlKey: true, key: "r", message: "Ctrl + R", exp: "Recargar." },
  { shiftKey: true, key: "Delete", message: "Shift + Delete", exp: "Cortar." },
  { ctrlKey: true, shiftKey: true, key: "s", message: "Ctrl + Shift + S", exp: "Guardar como." },
  { ctrlKey: true, key: "p", message: "Ctrl + P", exp: "Imprimir." },
  { ctrlKey: true, key: "l", message: "Ctrl + L", exp: "Seleccionar línea." },
  { ctrlKey: true, altKey: true, key: "t", message: "Ctrl + Alt + T", exp: "Abrir terminal." },
  { ctrlKey: true, key: "d", message: "Ctrl + D", exp: "Seleccionar palabra." },
  { ctrlKey: true, key: "m", message: "Ctrl + M", exp: "Paréntesis coincidente." },
  { ctrlKey: true, shiftKey: true, key: "Enter", message: "Shift + Ctrl + Enter", exp: "Línea antes." },
  { ctrlKey: true, shiftKey: true, key: "m", message: "Shift + Ctrl + M", exp: "Seleccionar en paréntesis." },
  { ctrlKey: true, shiftKey: true, key: "ArrowUp", message: "Shift + Ctrl + UP", exp: "Mover arriba." },
  { ctrlKey: true, shiftKey: true, key: "ArrowDown", message: "Shift + Ctrl + Down", exp: "Mover abajo." },
  { ctrlKey: true, key: "u", message: "Ctrl + U", exp: "Deshacer selección." },
  { ctrlKey: true, key: "y", message: "Ctrl + Y", exp: "Rehacer acción." },
  { ctrlKey: true, key: "j", message: "Ctrl + J", exp: "Unir línea." },
  { ctrlKey: true, shiftKey: true, key: "v", message: "Shift + Ctrl + V", exp: "Pegar con indentación." },
  { ctrlKey: true, shiftKey: true, key: "d", message: "Shift + Ctrl + D", exp: "Duplicar línea." },
  { ctrlKey: true, key: "g", message: "Ctr l+ G", exp: "Ir a línea." },
  { ctrlKey: true, key: "f", message: "Ctrl + F", exp: "Buscar texto." },
  { ctrlKey: true, shiftKey: true, key: "f", message: "Shift + Ctrl + F", exp: "Buscar en archivos." },
  { ctrlKey: true, key: "h", message: "Ctrl + H", exp: "Reemplazar." },
  { ctrlKey: true, shiftKey: true, key: "k", message: "Shift + Ctrl + K", exp: "Borrar línea." },
  { ctrlKey: true, key: '0', message: 'Ctrl + 0', exp:'' },
  { sequence: 'npm', message: 'npm', exp:'' },
  { sequence: 'yarn start', message: 'yarn start', exp:'' },
  { sequence: 'cd ..', message: 'cd ..', exp:'' },
  { sequence: 'mkdir new_folder', message: 'mkdir new_folder', exp:'' },
  { sequence: 'npm install', message: 'npm install', exp:'' },
  { sequence: 'git clone', message: 'git clone', exp:'' },
  { sequence: 'ls -la', message: 'ls -la', exp:'' },
  { sequence: 'dir', message: 'dir', exp:'' },
  { sequence: 'ping google.com', message: 'ping google.com', exp:'' },
  { sequence: 'exit', message: 'exit', exp:'' },
  { sequence: '()', message: '()', exp:'' },
  { sequence: '{}', message: '{}', exp:'' },
  { sequence: '://', message: '://', exp:'' },
  { sequence: '18', message: '18', exp:'' },
  { sequence: '50', message: '50', exp:'' },
];


function selectRandomHotkey(): Hotkey {
  const randomIndex = Math.floor(Math.random() * hotkeys.length);
  const selectedHotkey = hotkeys[randomIndex];
  console.log('Selected Hotkey:', selectedHotkey);
  return selectedHotkey;
}

function updateChallenge(hotkey: Hotkey) {
  const challengeElement = document.getElementById('challenge');
  if (challengeElement) {
    challengeElement.textContent = `${hotkey.message}`;
  }
}

function updateFeedback(pressedKeys?:string){
  const feedbackElement = document.getElementById('feedback');
  if(feedbackElement && pressedKeys){
    feedbackElement.textContent = `Presionado: ${pressedKeys}`;
  } else if(feedbackElement){
    feedbackElement.textContent = "";
  }
}

let currentSequence = '';
let currentHotkey = selectRandomHotkey(); 
updateChallenge(currentHotkey); 
updateFeedback();

let keyState = {
  ctrlKey: { pressed: false, time: 0 },
  shiftKey: { pressed: false, time: 0 },
  altKey: { pressed: false, time: 0 },
  metaKey: { pressed: false, time: 0 },
  lastKey: { key: '', time: 0 }
};

document.addEventListener('keydown', (event: KeyboardEvent) => {
  console.log(event.key)
  if (['Control', 'Shift', 'Alt', 'Meta'].includes(event.key)) {
    if (event.ctrlKey) keyState.ctrlKey = { pressed: true, time: Date.now() };
    if (event.shiftKey) keyState.shiftKey = { pressed: true, time: Date.now() };
    if (event.altKey) keyState.altKey = { pressed: true, time: Date.now() };
    if (event.metaKey) keyState.metaKey = { pressed: true, time: Date.now() };
    return; 
  }

  keyState.lastKey = { key: event.key, time: Date.now() };
  keyState.ctrlKey.pressed = event.ctrlKey;
  keyState.shiftKey.pressed = event.shiftKey;
  keyState.altKey.pressed = event.altKey;
  keyState.metaKey.pressed = event.metaKey;

  checkCombination(event); 
});

function checkCombination(event: KeyboardEvent) {
  console.log('Checking combination for event:', event.key, 'Current hotkey:', currentHotkey);
  if (currentHotkey.sequence) {
    checkSequence(event);
  } else {
    checkHotkeyCombination(event);
  }
}

function checkSequence(event: KeyboardEvent) {
  console.log('Current sequence:', currentSequence, 'for event:', event.key);
  const validKey = event.key.length === 1; 
  if (validKey) {
    currentSequence += event.key.toLowerCase(); 
    updateFeedback(currentSequence); 
  }

  if (event.key === 'Backspace') {
    currentSequence = currentSequence.slice(0, -1); 
    updateFeedback(currentSequence);
  }

  if (currentSequence.endsWith(currentHotkey.sequence!.toLowerCase())) {
    const feedbackElement = document.getElementById('feedback');
    if (feedbackElement) {
      feedbackElement.textContent = '¡Correcto! ' + currentHotkey.message;
    }
    prepareNextChallenge();
  }
}

function checkHotkeyCombination(event: KeyboardEvent) {
  event.preventDefault(); 
  const now = Date.now();
  const tolerance = 100; 
  const match = (!!currentHotkey.ctrlKey === keyState.ctrlKey.pressed) &&
    (!!currentHotkey.shiftKey === keyState.shiftKey.pressed) &&
    (!!currentHotkey.altKey === keyState.altKey.pressed) &&
    (!!currentHotkey.metaKey === keyState.metaKey.pressed) &&
    (currentHotkey.key?.toLowerCase() === keyState.lastKey.key.toLowerCase()) &&
    (now - keyState.lastKey.time <= tolerance);

  if (match) {
    currentHotkey = selectRandomHotkey(); 
    updateChallenge(currentHotkey);
    resetKeyState(); 
    updateFeedback();
  } else {
    // Construye una cadena con las teclas presionadas
    const pressedKeys = `${keyState.ctrlKey.pressed ? 'Ctrl+' : ''}${keyState.shiftKey.pressed ? 'Shift+' : ''}${keyState.altKey.pressed ? 'Alt+' : ''}${keyState.metaKey.pressed ? 'Meta+' : ''}${keyState.lastKey.key}`;
    updateFeedback(pressedKeys);
  }
}

function prepareNextChallenge() {
  console.log('Preparing next challenge');
  currentHotkey = selectRandomHotkey(); 
  updateChallenge(currentHotkey); 
  currentSequence = ''; 
  resetKeyState(); 
}

function resetKeyState() {
  keyState = {
    ctrlKey: { pressed: false, time: 0 },
    shiftKey: { pressed: false, time: 0 },
    altKey: { pressed: false, time: 0 },
    metaKey: { pressed: false, time: 0 },
    lastKey: { key: '', time: 0 }
  };
}