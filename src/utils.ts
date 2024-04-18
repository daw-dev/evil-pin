export {};

declare global {
  interface Array<T> {
    shuffle(): void;
  }
}

function swap<T>(arr: Array<T>, i: number, j: number){
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle<T>(this: Array<T>) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    const pick = Math.floor(Math.random() * length);
    swap(this, i, pick);
  }
};

Array.prototype.shuffle = shuffle;
