<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Response;
use App\Models\Contact;
use App\Mail\MyTestMail;



class ContactController extends Controller
{

    public function index()
    {
        return response()->json(['success'=>1]);
    }



    public function contact(Request $request)
    {
        $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'subject' => 'required',
            'message' => 'required',
        ]);

        $details = $request->all();

        Contact::create($details);
        $details = $request;
//          Send mail

        Mail::to('gl.tiengo@gmail.com')->send(new MyTestMail($details));

        return response()->json( ['success' => true], Response::HTTP_OK);

    }
}
