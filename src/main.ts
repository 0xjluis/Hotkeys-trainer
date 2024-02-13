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
  { sequence: 'npm', message: 'npm' },
  { sequence: 'yarn start', message: 'yarn start' },
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