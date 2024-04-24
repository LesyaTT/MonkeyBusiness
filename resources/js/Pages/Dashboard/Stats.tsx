interface StatsProps{
    data: any[];
}
interface StatsItemProps{
    text: string;
    info: any;
}

const StatsComponent: React.FC<StatsProps> = ({ data }) => {
    const themesArr: string[] = [...new Set(data.map(item => item.theme))];

    return (
        <div className="flex flex-col">
            <StatsItem text="Всего: " info={data.length} />
            <StatsItem text="Выполненно: " info={data.filter(item => item.status === 1).length} />
            <StatsItem text="Невыполненно: " info={data.filter(item => item.status !== 1).length} />
            <div className="border-2 border-dark-card rounded-lg mt-5 p-3">
            <h3 className="text-xl font-semibold">Темы</h3>
            {themesArr.map((theme, index) => (
                <StatsItem key={index} text={theme + ':'} info={data.filter(item => item.theme === theme).length} />
            ))}
            </div>
        </div>
    );
}

const StatsItem: React.FC<StatsItemProps> = ({ text, info }) => {
    return(
        <div className="flex items-center">
            <p className="text-lg font-semibold text-light-card">{text}</p>
            <p className="text-lg text-dark-card">{info}</p>
        </div>
    )
}

export default StatsComponent;