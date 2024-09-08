import React from 'react'
import style from "@/app/style/style.module.css";
import { SignIn } from '@/app/components/GitHubAuth/signIn-button';
import { Input } from '@/app/components/login-form/elements/input';
import { Button } from '@/app/components/login-form/elements/button';

export function LoignForm() {
  return (
    <div className="flex-auto">
        <div className="flex justify-center mt-16">
            <div className="w-2/5 rounded-md border border-slate-100/50 bg-black/60 backdrop-blur-3xl mix-blend-luminosity shadow-xl shadow-white/10">
                <div className="my-12 text-center">
                    <h2 className="text-4xl font-bold text-teal-900">SignIn</h2>
                    <p className="my-4">
                        <span className="font-semibold text-teal-900">MailAddress</span>と
                        <span className="font-semibold text-teal-900">Password</span>を入力してください。
                    </p>
                    <form>
                        <Input type="email" placeholder="MailAddress" />
                        <Input type="password" placeholder="Password" />
                        <Button type="submit" name="Login" />
                    </form>
                    <div className={style.sub_h}>
                        <span className={style.sub_s}>OR CONTINUE WITH</span>
                    </div>
                    <SignIn/>
                </div>
            </div>
        </div>
    </div>
  )
}
