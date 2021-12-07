// === TO STRING ===

//  ЧИСЛО К СТРОКЕ *1

let value = 0

// 1 способ
let toString = String(value)
console.log(`$(value), через конструктор String(): `, toString)
console.log(
  ` тип данных $(value), через конструктор String(): `,
  typeof toString,
)

// 2 способ
toString = value + ''
console.log(`$(value), через  конкатенацию: `, toString)
console.log(` тип данных $(value), через  конкатенацию: `, typeof toString)

//  ЧИСЛО К СТРОКЕ *2

value = 1

// 1 способ
toString = String(value)
console.log(`$(value), через конструктор String(): `, toString)
console.log(
  ` тип данных $(value), через конструктор String(): `,
  typeof toString,
)
// 2 способ
toString = value + ''
console.log(`$(value), через  конкатенацию: `, toString)
console.log(` тип данных $(value), через  конкатенацию: `, typeof toString)

// ЧИСЛО К СТРОКЕ *3

value = Infinity

// 1 способ
toString = String(value)
console.log(`$(value), через конструктор String(): `, toString)
console.log(
  ` тип данных $(value), через конструктор String(): `,
  typeof toString,
)
// 2 способ
toString = value + ''
console.log(`$(value), через  конкатенацию: `, toString)
console.log(` тип данных $(value), через  конкатенацию: `, typeof toString)

// ЧИСЛО К СТРОКЕ *4 (ЗНАЧЕНИЕ БЕСКОНЕЧНОСТИ К СТРОКЕ)

value = Infinity

// 1 способ
toString = String(value)
console.log(`$(value), через конструктор String(): `, toString)
console.log(
  ` тип данных $(value), через конструктор String(): `,
  typeof toString,
)
// 2 способ
toString = value + ''
console.log(`$(value), через  конкатенацию: `, toString)
console.log(` тип данных $(value), через  конкатенацию: `, typeof toString)

// ЧИСЛО К СТРОКЕ *4 (НЕ ЧИСЛО К СТРОКЕ)

value = NaN

// 1 способ
toString = String(value)
console.log(`$(value), через конструктор String(): `, toString)
console.log(
  ` тип данных $(value), через конструктор String(): `,
  typeof toString,
)
// 2 способ
toString = value + ''
console.log(`$(value), через  конкатенацию: `, toString)
console.log(` тип данных $(value), через  конкатенацию: `, typeof toString)

// ---------------

// БУЛЕВОЕ (логическое) true к СТРОКЕ

value = true

// 1 способ
toString = String(value)
console.log(`$(value), через конструктор String(): `, toString)
console.log(
  ` тип данных $(value), через конструктор String(): `,
  typeof toString,
)
// 2 способ
toString = value + ''
console.log(`$(value), через  конкатенацию: `, toString)
console.log(` тип данных $(value), через  конкатенацию: `, typeof toString)

// БУЛЕВОЕ (логическое) false к СТРОКЕ

value = false

// 1 способ
toString = String(value)
console.log(`$(value), через конструктор String(): `, toString)
console.log(
  ` тип данных $(value), через конструктор String(): `,
  typeof toString,
)
// 2 способ
toString = value + ''
console.log(`$(value), через  конкатенацию: `, toString)
console.log(` тип данных $(value), через  конкатенацию: `, typeof toString)

// undefined к СТРОКЕ

value = undefined

// 1 способ
toString = String(value)
console.log(`$(value), через конструктор String(): `, toString)
console.log(
  ` тип данных $(value), через конструктор String(): `,
  typeof toString,
)
// 2 способ
toString = value + ''
console.log(`$(value), через  конкатенацию: `, toString)
console.log(` тип данных $(value), через  конкатенацию: `, typeof toString)

// null к СТРОКЕ

value = null

// 1 способ
toString = String(value)
console.log(`$(value), через конструктор String(): `, toString)
console.log(
  ` тип данных $(value), через конструктор String(): `,
  typeof toString,
)
// 2 способ
toString = value + ''
console.log(`$(value), через  конкатенацию: `, toString)
console.log(` тип данных $(value), через  конкатенацию: `, typeof toString)
