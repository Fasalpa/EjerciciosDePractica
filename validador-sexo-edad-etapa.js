function mensaje(nombre, edad, sexo) {
    if (typeof nombre === "string" && typeof sexo === "string" && typeof edad === "number" &&
      (sexo === "masculino" || sexo === "femenino")
    ) {
      let resultado;
      if (años <= 5) {
        resultado = `Hola ${nombre}, tienes ${años} años, concideramos que estás en el ciclo de vida de la primera infancia y tu género es ${sexo}`;
      } else if (años >= 6 && años <= 11) {
        resultado = `Hola ${nombre}, tienes ${años} años, concideramos que estás en el ciclo de vida de la infancia y tu género es ${sexo}`;
      } else if (años >= 12 && años <= 18) {
        resultado = `Hola ${nombre}, tienes ${años} años, concideramos que estás en el ciclo de vida de la adolescencia y tu género es ${sexo}`;
      } else if (años >= 19 && años <= 26) {
        resultado = `Hola ${nombre}, tienes ${años} años, concideramos que estás en el ciclo de vida de la juventud y tu género es ${sexo}`;
      } else if (años >= 27 && años <= 59) {
        resultado = `Hola ${nombre}, tienes ${años} años, concideramos que estás en el ciclo de vida de la adultez y tu género es ${sexo}`;
      } else {
        resultado = `Hola ${nombre}, tienes ${años} años, concideramos que estás en el ciclo de vida de la vejez y tu género es ${sexo}`;
      }
      return resultado;
    } else {
      return "Los datos ingresados no son vàlidos";
    }
  }
  