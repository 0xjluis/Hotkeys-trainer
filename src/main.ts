interface Hotkey {
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  metaKey?: boolean; 
  key?: string;
  sequence?: string
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
  { altKey: true, key: 'd', message: 'Alt + D' },
  { ctrlKey: true, key: 'f', message: 'Ctrl + F' },
  { ctrlKey: true, key: 'n', message: 'Ctrl + N' },
  { ctrlKey: true, key: 'r', message: 'Ctrl + R' },
  { shiftKey: true, key: 'Delete', message: 'Shift + Delete' },
  { ctrlKey: true, shiftKey: true, key: 's', message: 'Ctrl + Shift + S' },
  { ctrlKey: true, key: 'p', message: 'Ctrl + P' },
  { ctrlKey: true, key: 'l', message: 'Ctrl + L' },
  { ctrlKey: true, altKey: true, key: 't', message: 'Ctrl + Alt + T' },
  { ctrlKey: true, key: 'l', message: 'Ctrl + L: Select the line.' },
  { ctrlKey: true, key: 'x', message: 'Ctrl + X: Cut the line.' },
  { ctrlKey: true, key: 'd', message: 'Ctrl + D: Select the word.' },
  { ctrlKey: true, key: 'm', message: 'Ctrl + M: Go to the matching parenthesis.' },
  { ctrlKey: true, key: 'Enter', message: 'Ctrl + Enter: Insert the line after.' },
  { ctrlKey: true, shiftKey: true, key: 'Enter', message: 'Shift + Ctrl + Enter: Insert the line before.' },
  { ctrlKey: true, shiftKey: true, key: 'm', message: 'Shift + Ctrl + M: Select all the content of the current parenthesis.' },
  { ctrlKey: true, shiftKey: true, key: 'ArrowUp', message: 'Shift + Ctrl + UP: Move the line or selection up.' },
  { ctrlKey: true, shiftKey: true, key: 'ArrowDown', message: 'Shift + Ctrl + Down: Move the line or selection down.' },
  { ctrlKey: true, key: 'u', message: 'Ctrl + U: Undo the last action.' },
  { ctrlKey: true, key: 'y', message: 'Ctrl + Y: Redo the last action.' },
  { ctrlKey: true, key: 'j', message: 'Ctrl + J: Join the line below to the end of the current line.' },
  { ctrlKey: true, shiftKey: true, key: 'v', message: 'Shift + Ctrl + V: Paste and indent correctly.' },
  { ctrlKey: true, shiftKey: true, key: 'd', message: 'Shift + Ctrl + D: Duplicate lines.' },
  { ctrlKey: true, key: 'g', message: 'Ctrl + G: Go to line in the current file.' },
  { ctrlKey: true, key: 'f', message: 'Ctrl + F: Find the word.' },
  { ctrlKey: true, shiftKey: true, key: 'f', message: 'Shift + Ctrl + F: Find the word in files.' },
  { ctrlKey: true, key: 'h', message: 'Ctrl + H: Replace the selected word.' },
  { ctrlKey: true, shiftKey: true, key: 'k', message: 'Shift + Ctrl + K: Delete the entire line.' },

  { ctrlKey: true, key: '0', message: 'Ctrl + 0' },

  { sequence: 'npm', message: 'npm' },
  { sequence: 'yarn start', message: 'yarn start' },
  { sequence: 'cd ..', message: 'cd ..' },
  { sequence: 'mkdir new_folder', message: 'mkdir new_folder' },
  { sequence: 'npm install', message: 'npm install' },
  { sequence: 'git clone', message: 'git clone' },
  { sequence: 'ls -la', message: 'ls -la' }, // Más común en ambientes Unix/Linux
  { sequence: 'dir', message: 'dir' }, // Comando para listar directorios en Windows
  { sequence: 'ping google.com', message: 'ping google.com' },
  { sequence: 'exit', message: 'exit' },
  { sequence: '()', message: '()' },
  { sequence: '{}', message: '{}' },
  { sequence: '://', message: '://' },
  { sequence: '18', message: '18' },
  { sequence: '50', message: '50' }

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