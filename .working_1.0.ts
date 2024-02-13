interface Hotkey {
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  metaKey?: boolean; 
  key: string;
  message: string;
}

const hotkeys: Hotkey[] = [
  { ctrlKey: true, shiftKey: true, key: 'ArrowUp', message: 'Ctrl + Shift + Arrow Up' },
  { ctrlKey: true, key: 'Enter', message: 'Ctrl + Enter' },
  { ctrlKey: true, key: 's', message: 'Ctrl + S' },
  { shiftKey: true, key: 'Tab', message: 'Shift + Tab' },
  { ctrlKey: true, key: 'c', message: 'Ctrl + C' },
  { ctrlKey: true, key: 'v', message: 'Ctrl + V' },
  { ctrlKey: true, key: 'x', message: 'Ctrl + X' },
  { ctrlKey: true, key: 'z', message: 'Ctrl + Z' },
  { key: 'Backspace', message: 'Retroceso' },
  { key: 'End', message: 'Fin' },
  { key: 'Home', message: 'Inicio' },
  { shiftKey: true, key: 'Home', message: 'Shift + Inicio --> Select to Inicio LINE' },
  { ctrlKey: true, shiftKey: true, key: 'Home', message: 'Ctrl + Shift + Inicio --> Select to Inicio DOC' },
  { shiftKey: true, key: 'End', message: 'Shift + End --> Select to End LINE' },
  { ctrlKey: true, shiftKey: true, key: 'End', message: 'Ctrl + Shift + End --> Select to End DOC' },
  { ctrlKey: true, shiftKey: true, key: 'z', message: 'Ctrl + Shift + Z' },
  { ctrlKey: true, shiftKey: true, key: 'd', message: 'Ctrl + Shift + D' },
  { ctrlKey: true, shiftKey: true, key: 'k', message: 'Ctrl + Shift + K' },
  { ctrlKey: true, shiftKey: true, key: 't', message: 'Ctrl + Shift + T' },
  { altKey: true, key: 'd', message: 'Alt + D' },
];


function selectRandomHotkey(): Hotkey {
  const randomIndex = Math.floor(Math.random() * hotkeys.length);
  return hotkeys[randomIndex];
}

function updateChallenge(hotkey: Hotkey) {
  const challengeElement = document.getElementById('challenge');
  if (challengeElement) {
    challengeElement.textContent = `Presiona: ${hotkey.message}`;
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
  event.preventDefault(); // Considera llamar preventDefault solo si hay una coincidencia para evitar efectos secundarios.
  const now = Date.now();
  const tolerance = 100; // 500 milisegundos de tolerancia
  const match = hotkeys.find(hotkey => 
    keyState.ctrlKey.pressed === !!hotkey.ctrlKey &&
    keyState.shiftKey.pressed === !!hotkey.shiftKey &&
    keyState.altKey.pressed === !!hotkey.altKey &&
    keyState.metaKey.pressed === !!hotkey.metaKey &&
    keyState.lastKey.key.toLowerCase() === hotkey.key.toLowerCase() &&
    now - keyState.lastKey.time <= tolerance
  );

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

function resetKeyState() {
  keyState = {
    ctrlKey: { pressed: false, time: 0 },
    shiftKey: { pressed: false, time: 0 },
    altKey: { pressed: false, time: 0 },
    metaKey: { pressed: false, time: 0 },
    lastKey: { key: '', time: 0 }
  };
}