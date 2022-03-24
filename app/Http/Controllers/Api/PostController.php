<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        // return PostResource::collection(Post::all());
        $posts = Post::with('category')->paginate(5);
        return PostResource::collection($posts);
    }
}
