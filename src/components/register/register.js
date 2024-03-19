import React from 'react'

export default function Register() {
    return (
        <form class="w-25 border border shadow m-auto p-4 mt-3">
        <label for="name" class="form-label">Name</label>
        <input
            name="name"
            id="name"
            type="name"
            class="form-control"
            formControlName="name"
        />
        @if(registerForm.controls['name'].invalid &&
         (registerForm.controls['name'].touched || registerForm.controls['name'].dirty)) {
            <div id="nameHelp" class="form-text text-danger">
                @if(registerForm.controls['name'].errors?.['required']){
                <small>This field is required</small>
                } @if(registerForm.controls['name'].errors?.['pattern']) {
                <small>Invalid Format</small>
                }
            </div>
        }
    
        <br/>
        <label for="email" class="form-label">Email</label>
        <input
            name="email"
            id="email"
            type="email"
            class="form-control"
        />
        @if(registerForm.controls['email'].invalid &&
         (registerForm.controls['email'].touched || registerForm.controls['email'].dirty)) {
            <div id="emailHelp" class="form-text text-danger">
                @if(registerForm.controls['email'].errors?.['required']){
                <small>This field is required</small>
                } @if(registerForm.controls['email'].errors?.['pattern']) {
                <small>Invalid Format</small>
                }
            </div>
        }
        <br/>
    
        <label for="username" class="form-label">Username</label>
        <input
            name="username"
            id="username"
            type="username"
            class="form-control"
        />
        @if(registerForm.controls['username'].invalid &&
         (registerForm.controls['username'].touched || registerForm.controls['username'].dirty)) {
            <div id="usernameHelp" class="form-text text-danger">
                @if(registerForm.controls['username'].errors?.['required']){
                <small>This field is required</small>
                } @if(registerForm.controls['username'].errors?.['pattern']) {
                <small>Invalid Format</small>
                }
            </div>
        }
        <br/>
    
        <label for="password" class="form-label">Password</label>
        <input
            name="password"
            id="password"
            type="password"
            class="form-control"
            formControlName="password"
        />
        @if(registerForm.controls['password'].invalid &&
         (registerForm.controls['password'].touched || registerForm.controls['password'].dirty)) {
            <div id="passwordHelp" class="form-text text-danger">
                @if(registerForm.controls['password'].errors?.['required']){
                <small>This field is required</small>
                } 
                @if(registerForm.controls['password'].errors?.['minlength']){
                <small>Min. 8 characters</small>
                }
                @else if(registerForm.controls['password'].errors?.['pattern']) {
                <small>Invalid Format</small>
                }
            </div>
        }
        <br/>
    
        <button type="submit" class="btn btn-primary w-100" disabled>Register</button><br/>
        <span style="font-size: 12px;">Already have an account? <a routerLink="/login">Login!</a></span>
    </form>
  )
}

