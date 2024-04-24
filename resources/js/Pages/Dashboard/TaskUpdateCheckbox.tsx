import Checkbox from "@/Components/Checkbox";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

interface TaskUpdateCheckboxProps {
    taskId: string;
    status: boolean;
}

const TaskUpdateCheckbox: React.FC<TaskUpdateCheckboxProps> = ({ taskId, status }) => {
    const { patch } = useForm();

    const submitUpdateTask: FormEventHandler = () => {
        patch(route('task.update', {
            task_id: taskId,
            status: status == true ? 0 : 1, 
        }));
    };

    return (
        <Checkbox defaultChecked={status} onChange={submitUpdateTask} />
    );
}

export default TaskUpdateCheckbox;
