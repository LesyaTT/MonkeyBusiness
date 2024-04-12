interface ImageComponentProps {
    src: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src }) => {
    return (
        <div className='w-[470px] h-[470px] rounded-[20px] grayscale mix-blend-luminosity'>
            <img
                src={src}
                alt=""
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    objectPosition: 'center',
                    objectFit: 'cover',
                    imageRendering: 'auto'
                }}
                loading="lazy"
            />
        </div>
    );
}

export default ImageComponent;