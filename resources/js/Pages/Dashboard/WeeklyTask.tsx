import React from 'react';
import DailyItem from './DailyItem';

interface WeeklyTaskProps {
    currentDate: Date;
    data: any[];
}

const WeeklyTask: React.FC<WeeklyTaskProps> = ({ currentDate, data }) => {
    const formattedCurrentDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    const tasks = data.filter(item => item.date_of_end === formattedCurrentDate);

    return (
        <div className="border-2 border-blue-light rounded-lg p-3 w-[350px]">
            <h3 className='text-blue-dark mb-1 uppercase'>{currentDate.toLocaleDateString('ru-RU', { weekday: 'short' })}</h3>
            <p className='mb-3'>{currentDate.toLocaleDateString('ru-RU', { day: 'numeric', month: '2-digit' })}</p>
            <div className='flex flex-col gap-2'>
                {tasks.map((task) => (
                    <DailyItem initialTaskId={task.id} font='sm' padding='2' themeSize='sm' gap={5} title={task.title} theme={task.theme} color={task.color} initialStatus={task.status} />
                ))}
            </div>
        </div>
    );
}

export default WeeklyTask;
