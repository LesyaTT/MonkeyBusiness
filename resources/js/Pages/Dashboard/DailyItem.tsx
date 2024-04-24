import React, { useEffect, useState } from 'react';
import TaskUpdateCheckbox from "./TaskUpdateCheckbox";
import TaskDeleteButton from "./TaskDeleteButton";

interface DailyItemProps {
    initialTaskId: string;
    initialStatus: boolean;
    title: string;
    theme: string;
    color: string;
    font: string;
    padding: string;
    gap: number;
    themeSize: string;
}

const DailyItem: React.FC<DailyItemProps> = ({ initialTaskId, initialStatus, title, theme, color, font, padding, gap, themeSize }) => {
    const [taskId, setTaskId] = useState(initialTaskId);
    const [status, setStatus] = useState(initialStatus);

    useEffect(() => {
        setTaskId(initialTaskId);
        setStatus(initialStatus);
    }, [initialTaskId, initialStatus]);

    if (!taskId) {
        return <h2>Hello</h2>; // Можете заменить на заглушку или индикатор загрузки
    }

    return (
        <div className={`flex gap-${gap} justify-between p-${padding} items-center border-2 rounded-lg border-dark-card`}>
            <div className="flex flex-col items-start">
                <p className={`text-${font}`}>{title}</p>
                <p style={{ color: '#' + color }} className={`text-[#${color}] text-${themeSize}`}>{theme}</p>
            </div>

            <div className="flex items-center gap-2">
                <TaskUpdateCheckbox taskId={taskId} status={status} />
                <TaskDeleteButton taskId={taskId} />
            </div>
        </div>
    );
}

export default DailyItem;
