import { useRef, useState, FormEventHandler } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({ className = '' }: { className?: string }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-semibold text-white">Удаление аккаунта</h2>

                <p className="mt-1 text-sm text-back-light">
                    Как только аккаунт будет удален вместе с ним безвозвратно удалятся вся информация и данные. Перед тем как удалить аккаунт скачайте ту информацию, которую хотите сохранить.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>удалить аккаунт</DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Вы уверены что хотите удалить аккаунт?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Пожалуйста введите пароль чтобы подвердить что вы хотите безвозвратно удалить свой аккаунт.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Пароль" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Пароль"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Отмена</SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            удалить аккаунт
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
