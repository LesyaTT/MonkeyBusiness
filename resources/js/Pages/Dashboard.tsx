import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-blue-light text-back-light shadow-sm sm:rounded-lg">
                        <div>
                            <div id='daily'>
                            
                            </div>
                            <div id='timer'>

                            </div>
                        </div>
                        <div id="weekly">

                        </div>
                        <div>
                            <div id="stats"></div>
                            <div id="notes"></div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
