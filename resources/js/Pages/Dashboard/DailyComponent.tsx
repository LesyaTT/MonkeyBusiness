import { FormEventHandler, useState } from "react";
import DailyItem from "./DailyItem";
import { useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

interface DailyComponentProps {
    info: any[];
    themesList: any[];
    user_id: number;
}

const DailyComponent: React.FC<DailyComponentProps> = ({ info, user_id, themesList }) => {
    const todayTasks = info.filter(item => item.date_of_end === formattedDate());

    console.log(info)

    console.log(todayTasks);

    const [showAddTaskModal, setShowAddTaskModal] = useState(false);

    const openAddTaskModal = () => {
        setShowAddTaskModal(true);
    };

    const { data, setData, post, processing } = useForm({
        title: '',
        user_id: user_id,
        status: 0,
        theme_id: 1,
        date_of_end: ''
    });

    const submitAddTask: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('task.add'), {
            onSuccess: () => closeModal(),
            onError: () => console.log('error'),
        });
    };

    const closeModal = () => {
        setShowAddTaskModal(false);
    };

    const themesArr: string[] = [...new Set(themesList.map(item => item.theme))];
    console.log(themesArr)

    return (
        <div id='daily' className='w-2/3 p-5 bg-blue-light text-back-light shadow-sm sm:rounded-lg text-center'>
            <div className='flex items-center mb-5 justify-between'>
                <p className='bg-light-card p-1 rounded-lg text-blue-dark'>{new Date().toLocaleDateString('ru-RU')}</p>
                <h2 className='text-lg uppercase font-semibold underline'>Сегодня</h2>
                <button id='add' className='bg-light-card p-1 rounded-lg text-blue-dark' onClick={openAddTaskModal}>Добавить</button>

                <Modal show={showAddTaskModal} onClose={closeModal}>
                    <form onSubmit={submitAddTask} className="p-5 flex flex-col items-center gap-5">
                        <h2 className="text-xl font-semibold">
                            Создать задачу
                        </h2>
                        <TextInput
                            id="title"
                            type="text"
                            name="title"
                            value={data.title}
                            placeholder="Задание"
                            className="mt-1 block w-full"
                            autoComplete=""
                            isFocused={true}
                            required
                            onChange={(e) => setData('title', e.target.value)}
                        />
                        <select required className="rounded-lg border-dark-card focus:ring-0 focus:border-dark-card" name="theme_id" id="theme_id" onChange={(e) => setData('theme_id', Math.floor(parseInt(e.target.value) + 1))}>
                            {themesArr.map((theme, index) => (
                                <option value={index}>{theme}</option>
                            ))}
                        </select>


                        <TextInput
                            id="date_of_end"
                            type="date"
                            name="date_of_end"
                            value={data.date_of_end}
                            placeholder="Дата"
                            className="mt-1 block w-full"
                            autoComplete=""
                            isFocused={true}
                            required
                            onChange={(e) => setData('date_of_end', e.target.value)}
                        />
                        <PrimaryButton disabled={processing}>создать</PrimaryButton>
                    </form>
                </Modal>
            </div>
            <div className='flex flex-col gap-2'>
                {todayTasks.map(item => (
                    <DailyItem initialTaskId={item.id} padding='3' gap={0} font='lg' title={item.title} themeSize='base' theme={item.theme} color={item.color} initialStatus={item.status} />
                ))}
            </div>
        </div>
    )
}

function formattedDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export default DailyComponent;
