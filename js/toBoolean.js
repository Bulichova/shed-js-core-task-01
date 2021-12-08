// === TO BOOLEAN===

// любое строчное значение к Boolean

let value = 'Bla Bla Bla'

// 1 способ

let toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean,
)

// 2 способ

toBoolean = !!value
console.log(`${value}, через !!:`, toBoolean)
console.log(`тип данных ${value}, через !!:`, typeof toBoolean)

// / любое строчное число к Boolean

value = '123'

// 1 способ

toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean,
)

// 2 способ

toBoolean = !!value
console.log(`${value}, через !!:`, toBoolean)
console.log(`тип данных ${value}, через !!:`, typeof toBoolean)

// /пустая строка к Boolean (false)

value = ''

// 1 способ

toBoolean = Boolean(value)
console.log(` пустая строка ${value}, через конструктор Boolean():`, toBoolean)
console.log(
  `тип данных  пустая строка ${value}, через конструктор Boolean():`,
  typeof toBoolean,
)

// 2 способ

toBoolean = !!value
console.log(` пустая строка ${value}, через !!:`, toBoolean)
console.log(`тип данных  пустая строка ${value}, через !!:`, typeof toBoolean)

// /строка с пробелом к Boolean (true)

value = ' '

// 1 способ

toBoolean = Boolean(value)
console.log(
  ` строка с пробелом ${value}, через конструктор Boolean():`,
  toBoolean,
)
console.log(
  `тип данных строка с пробелом ${value}, через конструктор Boolean():`,
  typeof toBoolean,
)

// 2 способ

toBoolean = !!value
console.log(` строка с пробелом ${value}, через !!:`, toBoolean)
console.log(
  `тип данных строка с пробелом ${value}, через !!:`,
  typeof toBoolean,
)

// / /  ЧИСЛО к Boolean

value = 0 //false

// 1 способ

toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(
  `тип данных  ${value}, через конструктор Boolean():`,
  typeof toBoolean,
)

// 2 способ

toBoolean = !!value
console.log(`  ${value}, через !!:`, toBoolean)
console.log(`тип данных  ${value}, через !!:`, typeof toBoolean)

value = 1 //true

// 1 способ

toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(
  `тип данных  ${value}, через конструктор Boolean():`,
  typeof toBoolean,
)

// 2 способ

toBoolean = !!value
console.log(`  ${value}, через !!:`, toBoolean)
console.log(`тип данных  ${value}, через !!:`, typeof toBoolean)

// / /  undefined к Boolean

value = undefined

// 1 способ

toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(
  `тип данных  ${value}, через конструктор Boolean():`,
  typeof toBoolean,
)

// 2 способ

toBoolean = !!value
console.log(`  ${value}, через !!:`, toBoolean)
console.log(`тип данных  ${value}, через !!:`, typeof toBoolean)

// / /  null к Boolean

value = null

// 1 способ

toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(
  `тип данных  ${value}, через конструктор Boolean():`,
  typeof toBoolean,
)

// 2 способ

toBoolean = !!value
console.log(`  ${value}, через !!:`, toBoolean)
console.log(`тип данных  ${value}, через !!:`, typeof toBoolean)

//  Nan к Boolean

value = NaN

// 1 способ

toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(
  `тип данных  ${value}, через конструктор Boolean():`,
  typeof toBoolean,
)

// 2 способ

toBoolean = !!value
console.log(`  ${value}, через !!:`, toBoolean)
console.log(`тип данных  ${value}, через !!:`, typeof toBoolean)

// /  Infinity к Boolean

value = Infinity

// 1 способ

toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(
  `тип данных  ${value}, через конструктор Boolean():`,
  typeof toBoolean,
)

// 2 способ

toBoolean = !!value
console.log(`  ${value}, через !!:`, toBoolean)
console.log(`тип данных  ${value}, через !!:`, typeof toBoolean)
