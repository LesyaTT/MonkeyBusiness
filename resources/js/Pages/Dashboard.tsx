import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import PomodoroTimer from '@/Components/PomodoroTimer';
import WeeklyTask from './Dashboard/WeeklyTask';
import StatsComponent from './Dashboard/Stats';
import DailyComponent from './Dashboard/DailyComponent';

export default function Dashboard({ auth, data, themesList }: PageProps<{ data: any[], themesList: any[] }>) {
    const [notes, setNotes] = useState('');

    useEffect(() => {
        const userId = auth.user.id;
        const savedNotes = localStorage.getItem(`userNotes_${userId}`);
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, [auth.user.id]);

    const handleNotesChange = (event: { target: { value: any; }; }) => {
        const newNotes = event.target.value;
        setNotes(newNotes);
        const userId = auth.user.id;
        localStorage.setItem(`userNotes_${userId}`, newNotes);
    };

    const { nextWeekStartDate, nextWeekEndDate } = getNextWeekDates();

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-5">
                    <div className='flex items-start gap-5'>
                        <DailyComponent info={data} user_id={auth.user.id} themesList={themesList}/>
                        <PomodoroTimer />
                    </div>
                    <div id="weekly" className='text-center bg-light-card p-5 rounded-lg'>
                        <h2 className='text-lg mb-5 text-blue-light underline font-semibold uppercase'>
                            {nextWeekStartDate.toLocaleDateString('ru-RU', { day: 'numeric', month: '2-digit' })} - {nextWeekEndDate.toLocaleDateString('ru-RU', { day: 'numeric', month: '2-digit' })}
                        </h2>
                        <div className='flex flex-wrap items-start gap-5 justify-between'>
                            {Array.from({ length: 6 }, (_, index) => {
                                const currentDate = new Date();
                                currentDate.setDate(currentDate.getDate() + index + 1);
                                return (
                                    <WeeklyTask key={index} currentDate={currentDate} data={data} />
                                );
                            })}
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div id="stats" className='bg-blue-light p-5 rounded-lg w-1/3 text-center text-back-light'>
                            <h2 className='text-lg uppercase font-semibold underline mb-5'>статистика</h2>
                            <StatsComponent data={data} />
                        </div>
                        <div id="notes" className='text-center text-back-light bg-blue-light p-5 rounded-lg w-2/3'>
                            <h2 className='text-lg uppercase font-semibold underline mb-5'>заметки</h2>
                            <textarea
                                className='resize-none bg-transparent rounded-xl focus:ring-0 focus:border-dark-card'
                                name="notes"
                                id="1"
                                cols={70}
                                rows={8}
                                value={notes}
                                onChange={handleNotesChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function getNextWeekDates() {
    const date = new Date();
    const nextWeekStartDate = new Date(date);
    nextWeekStartDate.setDate(date.getDate() + 1);

    const nextWeekEndDate = new Date(nextWeekStartDate);
    nextWeekEndDate.setDate(nextWeekStartDate.getDate() + 5);

    return { nextWeekStartDate, nextWeekEndDate };
}
