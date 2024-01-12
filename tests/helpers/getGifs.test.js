import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifts()', () => {
    test('should return an array of gifts', async () => {
        const gifts = await getGifs('Dragon');
        expect(gifts.length).toBe(5);
        expect(gifts[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url:expect.any(String)
        });
    });
});