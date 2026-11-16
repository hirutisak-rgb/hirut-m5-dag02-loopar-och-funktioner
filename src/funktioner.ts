// Dag 2, del 2: Funktioner. Gör ALLA tester gröna på tests.html.
// Regler: skriv funktionerna själv, i den här filen. Ändra inte tests.ts.
// Röda understrykningar tills du skrivit return är normalt: TypeScript vet att funktionen ska ge ett värde.

// 1. Ska returnera priset som text med " kr".
//    Heltal utan decimaler: formateraPris(35) ger "35 kr".
//    Decimaltal med två decimaler och komma: formateraPris(91.8) ger "91,80 kr".
export function formateraPris(pris: number): string {
  // TODO

  if(Number.isInteger(pris))
  {
    return pris.toString() + " kr";
  }
  else {
    return pris.toFixed(2).replace(".", ",") + " kr";
  }
}

// 2. Momsdelen av ett pris med 12 % moms (fiktiv sats), avrundad till två decimaler.
//    momsDel(112) ger 12.
export function momsDel(pris: number): number {
  // TODO
  const utanMoms = pris /1.12;  // 112/100 = 1.12
  const momsDel = pris - utanMoms;
  return Math.round(momsDel * 100) / 100;
}

// 3. Priset efter rabatt i procent. medRabatt(100, 10) ger 90.
export function medRabatt(pris: number, procent: number): number {
  // TODO
   return Math.round(pris * (1 - procent / 100) * 100 ) / 100;
}

// 4. Är kaféet öppet? Vardagar 7–18, helger (lördag, söndag) 9–16.
//    Öppnar vid starttimmen, stänger vid sluttimmen (18 är stängt).
export function ärÖppet(veckodag: string, klockslag: number): boolean {
  // TODO
  let arHelg: boolean = veckodag === "lördag" || veckodag === "söndag";
  let oppetJustNu: boolean;

  if (arHelg) {
    return oppetJustNu = 9 <= klockslag && klockslag <= 16;
  } else {
    return oppetJustNu = 7 <= klockslag && klockslag <= 18;
  }
}

// 5. Summan av alla tal i listan, med en loop. summa([1, 2, 3]) ger 6.
export function summa(tal: number[]): number {
  // TODO
  let sum: number = 0; 
  for(let i: number = 0; i<tal.length; i++){
    sum = sum + tal[i];
  }
  return sum;
}

// 6. Medelvärdet. snitt([2, 4, 6]) ger 4. Tom lista ger 0.
export function snitt(tal: number[]): number {
  // TODO
  let result: number = 0;
  if(tal.length === 0){
    return 0;
  }
  for(let i: number = 0; i < tal.length; i++){
    result = result + tal[i];
  }
  return result / tal.length;
}

// 7. Det största talet, med en loop. största([3, 9, 4]) ger 9. Tom lista ger undefined.
export function största(tal: number[]): number | undefined {
  // TODO

  if(tal.length === 0){
    return undefined;
  }
  
  let max = tal[0];
  for(let i: number = 1; i < tal.length; i++){
    if(tal[i] > max){
      max = tal[i];
    }
  }
  return max;
}

// 8. Upprepa en text. upprepa("ab", 3) ger "ababab". Använd en loop.
export function upprepa(text: string, antal: number): string {
  // TODO
  let index = 0;
  let doublicatText: string = "";
  while(antal > 0)
  {
    doublicatText = doublicatText + text;
    antal--;
  }
  
  return doublicatText;
}

// 9. En kvittorad. kvittorad("Kaffe", 2, 32) ger "2 x Kaffe: 64 kr".
//    Använd formateraPris från uppgift 1.
export function kvittorad(namn: string, antal: number, pris: number): string {
  // TODO
}

// 10. Pilfunktioner. Skriv dem själv med const och =>.
//     dubbla(4) ger 8. ärJämnt(4) ger true.
export const dubbla = (n: number): number => {
  // TODO
};
export const ärJämnt = (n: number): boolean => {
  // TODO
};
