import { Button, Card, Heading1, Text } from '@rethinking-siakad/ui';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const accounts = [
  {
    id: crypto.randomUUID(),
    username: '5025673401',
    password: '6uohIMP7HZ',
  },
  {
    id: crypto.randomUUID(),
    username: '5025673402',
    password: 'P5H0IT4IXy',
  },
  {
    id: crypto.randomUUID(),
    username: '5025673403',
    password: 'Bm0NOFnHpX',
  },
  {
    id: crypto.randomUUID(),
    username: '5025673404',
    password: 'vvE7uWjlX2',
  },
  {
    id: crypto.randomUUID(),
    username: '5025673405',
    password: 'jwaYm1Xmcf',
  },
  {
    id: crypto.randomUUID(),
    username: '5025673405',
    password: 'w3A9aNnqHP',
  },
  {
    id: crypto.randomUUID(),
    username: '5025673406',
    password: 'bvJfTznzXj',
  },
  {
    id: crypto.randomUUID(),
    username: '5025673407',
    password: 'LboVKjE9OB',
  },
  {
    id: crypto.randomUUID(),
    username: '5025673408',
    password: 'Edy8BJL55J',
  },
  {
    id: crypto.randomUUID(),
    username: '5025673410',
    password: 'uX7G4gpWTU',
  },
];

export default function ListAccountPage() {
  return (
    <main className="container flex h-screen flex-col items-center justify-center gap-5">
      <Heading1>Daftar Akun yang Tersedia</Heading1>
      <Text>
        Silahkan gunakan akun-akun berikut untuk masuk kedalam SIM Akademik.
      </Text>
      <div className="flex flex-wrap justify-center gap-4">
        {accounts.map((account) => (
          <Card key={account.id} className="p-3">
            <Text>
              NRP: <strong>{account.username}</strong>
            </Text>
            <Text>
              Password: <strong>{account.password}</strong>
            </Text>
          </Card>
        ))}
      </div>
      <Link href="/login">
        <Button className="">
          Ke Halaman Login
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </main>
  );
}
