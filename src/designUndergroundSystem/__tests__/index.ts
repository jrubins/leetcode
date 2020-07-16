import { UndergroundSystem } from '../'

test('it calculates the average trip times (example 1)', () => {
  const undergroundSystem = new UndergroundSystem()
  undergroundSystem.checkIn(45, 'Leyton', 3)
  undergroundSystem.checkIn(32, 'Paradise', 8)
  undergroundSystem.checkIn(27, 'Leyton', 10)
  undergroundSystem.checkOut(45, 'Waterloo', 15)
  undergroundSystem.checkOut(27, 'Waterloo', 20)
  undergroundSystem.checkOut(32, 'Cambridge', 22)
  expect(undergroundSystem.getAverageTime('Paradise', 'Cambridge')).toEqual(14)
  expect(undergroundSystem.getAverageTime('Leyton', 'Waterloo')).toEqual(11)

  undergroundSystem.checkIn(10, 'Leyton', 24)
  expect(undergroundSystem.getAverageTime('Leyton', 'Waterloo')).toEqual(11)

  undergroundSystem.checkOut(10, 'Waterloo', 38)
  expect(undergroundSystem.getAverageTime('Leyton', 'Waterloo')).toEqual(12)
})

test('it calculates the average trip times (example 2)', () => {
  const undergroundSystem = new UndergroundSystem()
  undergroundSystem.checkIn(10, 'Leyton', 3)
  undergroundSystem.checkOut(10, 'Paradise', 8)
  expect(undergroundSystem.getAverageTime('Leyton', 'Paradise')).toEqual(5)
  undergroundSystem.checkIn(5, 'Leyton', 10)
  undergroundSystem.checkOut(5, 'Paradise', 16)
  expect(undergroundSystem.getAverageTime('Leyton', 'Paradise')).toEqual(5.5)
  undergroundSystem.checkIn(2, 'Leyton', 21)
  undergroundSystem.checkOut(2, 'Paradise', 30)
  expect(undergroundSystem.getAverageTime('Leyton', 'Paradise')).toEqual(20 / 3)
})
