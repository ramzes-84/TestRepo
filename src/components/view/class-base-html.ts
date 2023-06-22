export class BaseHTML {
  public createPageStructure(): void {
    const body: HTMLBodyElement | null = document.querySelector('body');
    const answerSect = document.createElement('section');
    const visualSect = document.createElement('section');
    const hintSect = document.createElement('section');
    const codeSect = document.createElement('section');

    if (body) body.append(answerSect, visualSect, hintSect, codeSect);
  }
}