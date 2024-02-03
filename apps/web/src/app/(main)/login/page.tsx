import { Heading1, Text } from '@rethinking-siakad/ui';
import React from 'react';
import LoginForm from './_components/login-form';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center ">
      <div>
        <Heading1 className="text-2xl">Masuk ke SIM Akademik</Heading1>
        <Text variant="muted">
          Silahkan masukkan NRP dan Kata Sandi akun Anda.
        </Text>
        <LoginForm />
        <div className="flex justify-center">
          <Link
            href="/list-account"
            className="hover:text-primary text-sm underline transition-colors"
          >
            Daftar Akun
          </Link>
        </div>
      </div>
    </main>
  );
}
