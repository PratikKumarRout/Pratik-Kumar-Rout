export default function PlaceholderBox({ height, width, borderRadius, shade }) {
    return (
        <div
            style={{
                height: height || '100px',
                width: width || '100px',
                backgroundColor: shade || 'var(--secondary)',
                borderRadius: borderRadius || '10px',
                margin: '8px 0',
            }}
        />
    )
}