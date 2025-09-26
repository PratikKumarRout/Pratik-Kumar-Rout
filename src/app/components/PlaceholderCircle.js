export default function PlaceholderCircle({ size, shade }) {
    return (
        <div 
        style={{
            width: size || "80px",
            height: size || "80px",
            backgroundColor: shade || 'var(--secondary)',
            borderRadius: '50%',
            margin: '8px',
        }}/>
    );
}