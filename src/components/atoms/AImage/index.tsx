interface AIconButtonProps {
    image: any,
    alt?: string
}

export default function AImage({image, alt}: AIconButtonProps) {
    return (
        <img src={require(image)} alt={alt} />
    );
}