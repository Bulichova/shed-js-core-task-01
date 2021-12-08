// === TO NUMBER ===

// любое строчное значение к числу

let value = 'Bla Bla Bla'

// 1 способ

let toNumber = Number(value)
console.log(`${value}, через конструктор Number():`, toNumber)
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber)

// 2 способ

toNumber = +value
console.log(`${value}, через унарный +`, toNumber)
console.log(`тип данных ${value}, через через унарный +:`, typeof toNumber)

// любое строчное  число к числу

value = '123'

// 1 способ

toNumber = Number(value)
console.log(`${value}, через конструктор Number():`, toNumber)
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber)

// 2 способ

toNumber = +value
console.log(`${value}, через унарный +`, toNumber)
console.log(`тип данных ${value}, через через унарный +:`, typeof toNumber)

// пустая строка "" к числу

value = ''

// 1 способ

toNumber = Number(value)
console.log(`пустая строка ${value}, через конструктор Number():`, toNumber)
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber)

// 2 способ

toNumber = +value
console.log(` пустая строка ${value}, через унарный +`, toNumber)
console.log(`тип данных ${value}, через через унарный +:`, typeof toNumber)

// строка с пробелом "" к числу

value = ' '

// 1 способ

toNumber = Number(value)
console.log(`строка с пробелом ${value}, через конструктор Number():`, toNumber)
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber)

// 2 способ

toNumber = +value
console.log(` строка с пробелом ${value}, через унарный +:`, toNumber)
console.log(`тип данных ${value}, через через унарный +:`, typeof toNumber)

// // БУЛЕВОЕ (логическое) true к ЧИСЛУ

value = true

// 1 способ
toNumber = Number(value)
console.log(`${value}, через конструктор Number(): `, toNumber)
console.log(
  ` тип данных ${value}, через конструктор Number(): `,
  typeof ttoNumber,
)
// 2 способ
toNumber = +value
console.log(`${value}, через унарный +: `, toNumber)
console.log(` тип данных $${value}, через унарный +: `, typeof toNumber)

// // БУЛЕВОЕ (логическое) false к ЧИСЛУ

value = false

// 1 способ
toNumber = Number(value)
console.log(`${value}, через конструктор Number(): `, toNumber)
console.log(
  ` тип данных ${value}, через конструктор Number(): `,
  typeof toNumber,
)
// 2 способ
toNumber = +value
console.log(`${value}, через унарный +: `, toNumber)
console.log(` тип данных ${value}, через унарный +: `, typeof totoNumber)

// // undefined к ЧИСЛУ

value = undefined

// // 1 способ
toNumber = Number(value)
console.log(`${value}, через конструктор Number(): `, toNumber)
console.log(
  ` тип данных ${value}, через конструктор Number(): `,
  typeof toNumber,
)
// // 2 способ
toNumber = +value
console.log(`${value}, через унарный +: `, toNumber)
console.log(` тип данных ${value}, через унарный +: `, typeof toNumber)

// // null к ЧИСЛУ

value = null

// 1 способ
toNumber = Number(value)
console.log(`${value}, через конструктор Number(): `, toNumber)
console.log(
  ` тип данных ${value}, через конструктор Number(): `,
  typeof toNumber,
)
// 2 способ
toNumber = +value
console.log(`${value}, через унарный +: `, toNumber)
console.log(` тип данных ${value}, через унарный +: `, typeof toNumber)
