import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import HeaderButton from '@/Components/HeaderButton';

import ImageComponent from '@/Pages/Welcome/ImageComponent';
import TeamCard from '@/Pages/Welcome/TeamCard';
import ReviewCard from '@/Pages/Welcome/ReviewCard';

import StatsImageCircle from '@/Pages/Welcome/StatsImageCircle';
import StatsImageHalf from '@/Pages/Welcome/StatsImageHalf';

export default function Welcome({ auth }: PageProps) {

    return (
        <>
            <Head title="Главная" />
            <header className='flex justify-between bg-topbot items-center text-white p-2'>
                <ApplicationLogo className='w-[60px]' />
                <nav className='flex items-center gap-5'>
                    <NavLink href='#about' children='О нас' />
                    <NavLink href='#mailing' children='Подписка' />
                    <NavLink href='#team' children='Команда' />
                    <NavLink href='#reviews' children='Отзывы' />
                </nav>
                <div className='flex items-center gap-3'>
                    {auth.user ?
                        <>
                            <HeaderButton href={route('dashboard')} children='Рабочий стол' /></> : <>
                            <HeaderButton href={route('login')} children='Войти' />
                            <HeaderButton href={route('register')} children='Зарегистрироваться' />
                        </>}
                </div>
            </header>
            <section id='about' className='bg-blue-light'>
                <div className='flex flex-col items-center justify-center py-[60px]'>
                    <ApplicationLogo className='w-[220px]' />
                    <h1 className='bg-back-light text-blue-light rounded-[20px] text-[80px] px-5 font-bold'>Monkey Business</h1>
                </div>
            </section>
            <section className='bg-blue-dark'>
                <div className='py-[60px] text-back-light w-2/3 mx-auto'>
                    <h2 className='text-[48px] font-medium'>Планируйте время как профи</h2>
                    <p className='text-[32px]'>Наш Monkey Business – это революция в управлении временем. Ведь оптимизация времени – это вражеское число для прокрастинации.</p>
                </div>
            </section>
            <section className='bg-blue-light'>
                <div className='text-white p-[100px]'>
                    <div className='flex justify-between items-center'>
                        <div className='w-1/2'>
                            <h3 className='text-[42px] font-bold mb-4'>Следите за своим расписанием</h3>
                            <p className='text-[25px]'>Открывайте для себя радость упорядоченности и эффективности с нашими инновационными инструментами планирования времени.</p>
                        </div>
                        <ImageComponent src='https://framerusercontent.com/images/AaUW2N6W1BV6WPzUnBuXdohFoY.jpg?scale-down-to=512' />
                    </div>
                    <div className='flex justify-between items-center'>
                    <ImageComponent src='https://framerusercontent.com/images/VkMPv9v0q9eL9Kq4P5gjwnTmOE8.jpg?scale-down-to=1024' />
                        <div className='w-1/2'>
                            <h3 className='text-[42px] font-bold mb-4'>Превратите свои идеи в действие</h3>
                            <p className='text-[25px]'>Даже самая революционная мысль бесполезна, пока вы не примените её на практике. Вы будете удивлены, насколько много можно сделать, управляя своим временем.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-back-light'>
                <div className='p-[100px] flex flex-wrap justify-between'>
                    <div className='w-[65%] text-center flex flex-col items-center bg-light-card rounded-[40px] p-[40px] mb-5'>
                        <h4 className='text-topbot text-[80px] font-bold'>1000+</h4>
                        <p className='w-2/3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum sequi est eligendi saepe delectus odit corporis dicta consectetur tenetur explicabo voluptas earum non reprehenderit adipisci et quod harum in.</p>
                    </div>
                    <div className='p-[80px] flex items-center justify-center rounded-[40px] bg-dark-card mb-5'>
                        <StatsImageCircle className='w-[160px]' />
                    </div>
                    <div className='p-[80px] flex items-center justify-center rounded-[40px] bg-dark-card'>
                        <StatsImageHalf className='w-[160px]'/>
                    </div>
                    <div className='w-[65%] text-center flex flex-col items-center bg-light-card rounded-[40px] p-[40px]'>
                        <h4 className='text-topbot text-[80px] font-bold'>5000+</h4>
                        <p className='w-2/3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia recusandae, quisquam, aspernatur unde quo inventore tempora nisi, itaque quasi earum delectus totam iusto amet saepe et voluptates iste modi eos?</p>
                    </div>
                </div>
            </section>
            <section id='mailing' className='bg-blue-light'>
                <div className='flex flex-col text-center items-center justify-center p-[100px]'>
                    <h5 className='text-white font-bold text-[48px] mb-[40px]'>Будьте в курсе новых функций</h5>
                    <div className='flex flex-col w-1/3 gap-3'>
                        <input className='bg-topbot text-white p-3 rounded-[15px]' type="email" placeholder='name@email.com'/>
                        <input type='submit' className='bg-dark-card p-3 rounded-[15px]' value={'Подписаться'} />
                    </div>
                </div>
            </section>
            <section id='team' className='bg-blue-dark'>
                <div className='p-[100px] text-white text-center'>
                    <h5 className='font-bold text-[48px] mb-5'>
                        Наша команда
                    </h5>
                    <p className='text-[20px] mb-[60px]'>
                        Мы - креативные люди, уверенные в том, что управление <br /> временем - ключ к счастью и успеху.
                    </p>
                    <div className='flex flex-wrap justify-between'>
                        <TeamCard img='https://framerusercontent.com/images/1ZpSa1mAZcVwMpV9MYrCzNqbE.jpg?scale-down-to=512' name='Алина Ахметова' position='SEO' /> 
                        <TeamCard img='https://framerusercontent.com/images/ExEitKvCilh4c6Ae11G4Djiyg.jpg?scale-down-to=512' name='Наталья Попова' position='Дизайнер продуктов' /> 
                        <TeamCard img='https://framerusercontent.com/images/UWLdQPgcu3XOFIFje1hP6Dup70.jpg?scale-down-to=512' name='Ольга Голубева' position='Разработчик' /> 
                        <TeamCard img='https://framerusercontent.com/images/THITQfMzI8Xn7rv2qrx59NA6cWg.jpg?scale-down-to=512' name='Антон Петров' position='Менеджер продуктов' /> 
                    </div>
                </div>
            </section>
            <section id='reviews' className='bg-blue-light'>
                <div className='p-[100px]'>
                    <div className='flex items-center justify-between'>
                        <ReviewCard img='https://framerusercontent.com/images/jShiQjLNxqLsgiY2Lxou8B9s.jpg?scale-down-to=512' text='Monkey Business помог мне увидеть, насколько я могу быть продуктивным!' author='Владимир Дрюк' />
                        <ReviewCard img='https://framerusercontent.com/images/UvocuTKuHV86cDH50qPDO4dtb70.jpg?scale-down-to=512' text='С Monkey Business тайм-менеджмент стал прямо как на ладони.' author='Евгений Дюсмикеев' />
                        <ReviewCard img='https://framerusercontent.com/images/EG7eLiRrkIsElKToP0iWUg.jpg?scale-down-to=512' text='Это как будто ваши день, неделя, и год – под контролем ваших рук!' author='Сергей Галанский' />
                    </div>
                </div>
            </section>
            <footer id='footer'>
                <div className='p-[80px] bg-topbot text-white'>
                    <div className='flex justify-between mb-[50px]'>
                        <ul className='flex flex-col items-start gap-1'>
                            <p className='font-bold mb-3'>Компания</p>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Сотрудничество</a></li>
                            <li><a href="#">Вакансии</a></li>
                        </ul>
                        <ul className='flex flex-col items-start gap-1'>
                            <p className='font-bold mb-3'>Поддержка</p>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Обратная связь</a></li>
                            <li><a href="#">Руководство пользователя</a></li>
                        </ul>
                        <ul className='flex flex-col items-start gap-1'>
                            <p className='font-bold mb-3'>Средства</p>
                            <li><a href="#">Приложения</a></li>
                            <li><a href="#">Безопасность</a></li>
                            <li><a href="#">Политика конфиденциальности</a></li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p>© 2024 Monkey Business, Все права защищены.</p>
                        <div className='w-[50px] gap-2 flex'>
                            <svg viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#FFFFFF"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]"> </path> </g> </g> </g> </g></svg>
                                <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#FFFFFF"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#FFFFFF167]"> </path> </g> </g> </g> </g></svg>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

