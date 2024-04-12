interface ReviewCardProps {
    img: string;
    text: string;
    author: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ img, text, author }) => {
    return (
        <div className='bg-blue-light-card p-[40px] rounded-[20px] flex flex-col items-start justify-between text-white w-[32%] min-h-[400px]'>
            <img className='w-[60px] h-[60px] rounded-full object-cover' src={img} alt="" />
            <p className='font-bold text-[20px]'>{text}</p>
            <h6>{author}</h6>
        </div>
    )
}

export default ReviewCard;