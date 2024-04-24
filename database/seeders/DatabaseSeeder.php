<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Theme;
use App\Models\Task;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@mail.ru',
            'password' => 'admin111',
        ]);

        Theme::create([
            'theme' => 'Работа',
            'color' => 'FF3333'
        ]);

        Theme::create([
            'theme' => 'Учёба',
            'color' => 'FF9933'
        ]);

        Task::create([
            'user_id' => '1',
            'title' => 'topitop',
            'theme_id' => '1',
            'date_of_end' => '2024-04-18',
            'status' => '1'
        ]);
        
        Task::create([
            'user_id' => '1',
            'title' => 'netop',
            'theme_id' => '2',
            'date_of_end' => '2024-04-18',
            'status' => '0'
        ]);
    }
}
