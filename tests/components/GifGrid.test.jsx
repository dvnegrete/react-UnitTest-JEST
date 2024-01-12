import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'Dragon';
    
    test('should show first the loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })
        render(<GifGrid category={ category }/>);
        expect (screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('should show item when loading images withuseFetchGifts', () => {
        const gifs = [
            {
                id: '01',
                title: 'Dragon',
                url: 'https://algo.com'
            },
            {
                id: '02',
                title: 'House',
                url: 'https://algo-house.com'
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        render(<GifGrid category={ category }/>);
        expect(screen.getAllByRole('img').length).toBe(2)
    });
});