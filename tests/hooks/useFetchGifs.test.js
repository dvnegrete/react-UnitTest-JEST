import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('should return initial state', () => {
        const { result } =  renderHook(()=>useFetchGifs('Dragon'));
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return a array of images and isLoading on false', async () => {
        const { result } =  renderHook(()=>useFetchGifs('Dragon'));
        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0),
            { timeout: 5000 }
        )
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});