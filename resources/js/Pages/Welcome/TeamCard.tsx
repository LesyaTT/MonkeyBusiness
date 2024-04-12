import exp from "constants";

interface TeamCardProps {
    img: string;
    name: string;
    position: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ img, name, position }) => {
    return(
        <div className='flex flex-col p-[40px] rounded-[30px] bg-blue-dark-card text-white items-center w-[49%] mb-5'>
            <img className='w-[80px] h-[80px] object-cover rounded-full grayscale mb-5' src={img} alt="" />
            <h6 className='font-bold text-[24px] uppercase'>{name}</h6>
            <p className='text-[20px]'>{position}</p>
        </div>
    )
}

export default TeamCard;