const db = require('../data/dbConfig');
const Races = require('./races-model');

describe('races model', () => {
    describe('add()', () => {
        beforeEach(async () => {
            await db('races').truncate();
        })

        // it('should return a 201 created', async () => {
        //     const res = await Races.add({ race: 'Orc' });
        //     expect(res.status).toBe(201);
        // })

        it('should add 2 races', async () => {
            await Races.add({ race: 'Elf' });
            await Races.add({ race: 'Human' });

            const races = await db('races');
            expect(races).toHaveLength(2);
        })
    })

    describe('remove()', () => {
        // it('should return a 204 no content', async () => {
        //     const res = await Races.remove(3);
        //     expect(res.status).toBe(204);
        // })

        it('should remove 1 race', async () => {
            await Races.remove(2);

            const races = await db('races');
            expect(races).toHaveLength(1);
        })
    })

    describe('getAll()', () => {
        // it('should return a 200 ok', async () => {
        //     const res = await Races.getAll();
        //     expect(res.status).toBe(200);
        // })

        it('should return list of races', async () => {
            const races = await Races.getAll();
            expect(races).toHaveLength(1);
        })
    })
})