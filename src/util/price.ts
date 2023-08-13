export function formatPrice(value: number) {
    return (value / 100).toLocaleString("PT-BR", 
    {
        maximumFractionDigits: 2, 
        minimumFractionDigits: 2
    })
}
