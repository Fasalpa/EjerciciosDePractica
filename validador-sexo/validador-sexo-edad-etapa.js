function prueba(name, años, sex) {
  if (
    typeof name === "string" &&
    typeof sex === "string" &&
    typeof años === "number" &&
    sex == "masculino" &&
    años <= 5
  ) {
    return `Hola ${name} tienes ${años} años, concideramos que estás en el ciclo de vida de la primera infancia y tu género es Masculino`;
  } else if (
    typeof name === "string" &&
    typeof sex === "string" &&
    typeof años === "number" &&
    sex == "masculino" &&
    años >= 6 &&
    años <= 11
  ) {
    return `Hola ${name} tienes ${años} años, concideramos que estás en el ciclo de vida de la infancia y tu género es Masculino`;
  } else if (
    typeof name === "string" &&
    typeof sex === "string" &&
    typeof años === "number" &&
    sex == "masculino" &&
    años >= 12 &&
    años <= 18
  ) {
    return `Hola ${name} tienes ${años} años, concideramos que estás en el ciclo de vida de la adolescencia y tu género es Masculino`;
  } else if (
    typeof name === "string" &&
    typeof sex === "string" &&
    typeof años === "number" &&
    sex == "masculino" &&
    años >= 19 &&
    años <= 26
  ) {
    return `Hola ${name} tienes ${años} años, concideramos que estás en el ciclo de vida de la juventud y tu género es Masculino`;
  } else if (
    typeof name === "string" &&
    typeof sex === "string" &&
    typeof años === "number" &&
    sex == "masculino" &&
    años >= 27 &&
    años <= 59
  ) {
    return `Hola ${name} tienes ${años} años, concideramos que estás en el ciclo de vida de la adultez y tu género es Masculino`;
  } else if (
    typeof name === "string" &&
    typeof sex === "string" &&
    typeof años === "number" &&
    sex == "masculino" &&
    años >= 60
  ) {
    return `Hola ${name} tienes ${años} años, concideramos que estás en el ciclo de vida de la vejez y tu género es Masculino`;
  } else if (
    typeof name === "string" &&
    typeof sex === "string" &&
    typeof años === "number" &&
    sex == "femenino" &&
    años <= 5
  ) {
    return `Hola ${name} tienes ${años} años, concideramos que estás en el ciclo de vida de la primera infancia y tu género es femenino`;
  } else if (
    typeof name === "string" &&
    typeof sex === "string" &&
    typeof años === "number" &&
    sex == "femenino" &&
    años >= 6 &&
    años <= 11
  ) {
    return `Hola ${name} tienes ${años} años, concideramos que estás en el ciclo de vida de la infancia y tu género es femenino`;
  } else if (
    typeof name === "string" &&
    typeof sex === "string" &&
    typeof años === "number" &&
    sex == "femenino" &&
    años >= 12 &&
    años <= 18
  ) {
    return `Hola ${name} tienes ${años} años, concideramos que estás en el ciclo de vida de la adolescencia y tu género es femenino`;
  } else if (
    typeof name === "string" &&
    typeof sex === "string" &&
    typeof años === "number" &&
    sex == "femenino" &&
    años >= 19 &&
    años <= 26
  ) {
    return `Hola ${name} tienes ${años} años, concideramos que estás en el ciclo de vida de la juventud y tu género es femenino`;
  } else if (
    typeof name === "string" &&
    typeof sex === "string" &&
    typeof años === "number" &&
    sex == "femenino" &&
    años >= 27 &&
    años <= 59
  ) {
    return `Hola ${name} tienes ${años} años, concideramos que estás en el ciclo de vida de la adultez y tu género es femenino`;
  } else if (
    typeof name === "string" &&
    typeof sex === "string" &&
    typeof años === "number" &&
    sex == "femenino" &&
    años >= 60
  ) {
    return `Hola ${name} tienes ${años} años, concideramos que estás en el ciclo de vida de la vejez y tu género es femenino`;
  } else
    typeof name !== "string" &&
      typeof sex !== "string" &&
      typeof años !== "number";
  return `Algunos datos son incorrectos, por favor verifica que sean los indicados`;
}

console.log(prueba("andres", 25, "femenino"));

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
