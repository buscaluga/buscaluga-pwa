interface SpaceProps {
    x?: number
    y?: number    
}

export const Space = ({ x, y }: SpaceProps) => {
    return <div style={{
        width: x,
        height: y,        
    }}></div>
} 