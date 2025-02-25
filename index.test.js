const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const original = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const trimmedObj = utils.trimProperties(original)
    expect(trimmedObj).not.toEqual(original)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { first_name: " tywin    ", last_name: "   lanister " }
    const expected = { first_name: "tywin", last_name: "lanister" }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const original = { first_name: " tywin    ", last_name: "   lanister " }
    expect(utils.trimPropertiesMutation(original)).toEqual(original)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 6 }, { integer: 12 }, { integer: 3 }]
    const expected = 12
    const actual = utils.findLargestInteger(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  const initialNumber = 3
  beforeEach(() => {
    counter = new utils.Counter(initialNumber) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const actual = counter.countDown()
    const expected = initialNumber
    expect(actual).toBe(expected)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown() // first countDown() call
    const actual = counter.countDown()
    const expected = initialNumber - 1
    expect(actual).toBe(expected)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    for (let i = 0; i < initialNumber; i++) {
      counter.countDown()
    }
    const actual = counter.countDown()
    const expected = 0
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const actual = seasons.next()
    const expected = "summer"
    expect(actual).toBe(expected)
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const actual = seasons.next()
    const expected = "fall"
    expect(actual).toBe(expected)
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    for (let i = 0; i < 2; i++) {
      seasons.next()
    }
    const actual = seasons.next()
    const expected = "winter"
    expect(actual).toBe(expected)
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 3; i++) {
      seasons.next()
    }
    const actual = seasons.next()
    const expected = "spring"
    expect(actual).toBe(expected)
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (let i = 0; i < 4; i++) {
      seasons.next()
    }
    const actual = seasons.next()
    const expected = "summer"
    expect(actual).toBe(expected)
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next()
    }
    const actual = seasons.next()
    const expected = "spring"
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(300)
    const actual = focus.odometer
    const expected = 300
    expect(actual).toBe(expected)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(300)
    const actual = focus.tank
    const expected = 10
    expect(actual).toBe(expected)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(1000) // cars max driving distance is 600
    focus.refuel(30) // trying to fuel tank above capacity (set at 20)
    focus.drive(1000)
    const actual = focus.odometer
    const expected = 1200
    expect(actual).toBe(expected)
    expect(focus.tank).toBe(0)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.drive(601) // deplete tank
    focus.refuel(30) // trying to fuel tank above capacity (set at 20)
    const expected = 20
    expect(focus.tank).toBe(expected)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const actual = await utils.isEvenNumberAsync(6)
    expect(actual).toEqual(true)
    expect(actual).not.toEqual("true")
  })
  test('[20] resolves false if passed an odd number', async () => {
    const actual = await utils.isEvenNumberAsync(5)
    expect(actual).toEqual(false)
    expect(actual).not.toEqual("false")
  })
})
