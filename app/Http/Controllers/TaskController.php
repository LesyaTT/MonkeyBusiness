<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\Task;

class TaskController extends Controller
{
    public function add(Request $request){
        Task::create($request->all());
        return Redirect::route('dashboard');
    }

    public function destroy(Request $request){
        Task::destroy($request->task_id);
        return Redirect::route('dashboard');
    }

    public function update(Request $request){
        Task::findOrFail($request->task_id)->update(['status' => $request->status]);
        return Redirect::route('dashboard');
    }
}