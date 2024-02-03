import { Button, Heading1, Text } from '@rethinking-siakad/ui';
import React from 'react';

export default function WelcomePage() {
  return (
    <main className="container flex h-screen flex-col items-center justify-center">
      <Heading1 className="py-3">Selamat Datang di SIM Akademik</Heading1>
      <Text className="text-center">
        Dapatkan informasi seputar akademik Anda mulai dari FRS, Transkrip
        Nilai, Kuesioner IPD, Tagihan biaya pendidikan, dan lain-lain.
      </Text>
      <Text className=" text-center">
        Klik tombol Daftar Akun dibawah untuk melihat daftar akun yang dapat
        Anda gunakan untuk login.
      </Text>
      <section className="flex justify-center gap-3 py-4">
        <Button>Masuk</Button>
        <Button variant="secondary">Daftar Akun</Button>
      </section>
    </main>
  );
}
