import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => {
    test('should contain title in h1', () => {        
        render(<GifExpertApp></GifExpertApp>)
        expect(screen.getAllByRole('heading', {level: 1}).length).toBe(1);
        
    });
});