class ChoiceVO {
  constructor(value) {
    const validChoices = ['Piedra', 'Papel', 'Tijera'];

    if (!validChoices.includes(value)) {
      throw new Error('Opción no válida');
    }

    this.value = value;
  }
}

export default ChoiceVO;