<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Models\Task;
use App\Models\Theme;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'data' => Task::where('tasks.user_id', auth()->user()->id)
                    ->join('themes', 'tasks.theme_id', '=', 'themes.id')
                    ->select('tasks.*', 'themes.theme as theme', 'themes.color as color')
                    ->get(),

                    'themesList' => Theme::all()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/dashboard', [TaskController::class, 'add'])->name('task.add');
    Route::delete('/dashboard', [TaskController::class, 'destroy'])->name('task.destroy');
    Route::patch('/dashboard', [TaskController::class, 'update'])->name('task.update');
});

require __DIR__.'/auth.php';
