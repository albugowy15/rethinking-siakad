import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Heading1,
  Heading4,
  Text,
} from '@rethinking-siakad/ui';
import Link from 'next/link';

interface AcademicInfo {
  id: string;
  title: string;
  value: string | number;
}
const acamemicsInfo: AcademicInfo[] = [
  {
    id: crypto.randomUUID(),
    title: 'Indeks Prestasi Kumulatif',
    value: 3.78,
  },
  {
    id: crypto.randomUUID(),
    title: 'Tahun Ajaran',
    value: '2023/2024',
  },
  {
    id: crypto.randomUUID(),
    title: 'Semester Aktif',
    value: '8 (Genap)',
  },
  {
    id: crypto.randomUUID(),
    title: 'Status FRS',
    value: 'Belum disetujui',
  },
  {
    id: crypto.randomUUID(),
    title: 'Kuesioner IPD',
    value: 'Belum Lengkap',
  },
  {
    id: crypto.randomUUID(),
    title: 'Status Pembayaran UKT',
    value: 'Lunas',
  },
];

interface Announcement {
  id: string;
  title: string;
  desc: string;
}
const announcements: Announcement[] = [
  {
    id: crypto.randomUUID(),
    title: 'Pembayaran UKT Semester Genap 2023/2024',
    desc: 'UKT untuk semester genap tahun ajaran 2023/2024 dapat dibayarkan mulai tanggal 1 sampai 25 Februari 2024.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Pembayaran UKT Semester Genap 2023/2024',
    desc: 'UKT untuk semester genap tahun ajaran 2023/2024 dapat dibayarkan mulai tanggal 1 sampai 25 Februari 2024.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Pembayaran UKT Semester Genap 2023/2024',
    desc: 'UKT untuk semester genap tahun ajaran 2023/2024 dapat dibayarkan mulai tanggal 1 sampai 25 Februari 2024.',
  },
];

const AcademicCard = (props: { data: AcademicInfo }) => {
  return (
    <Card className="text-center">
      <CardHeader className="border-b p-2 px-4">
        <CardTitle className="text-lg">{props.data.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Text>{props.data.value}</Text>
      </CardContent>
    </Card>
  );
};

export default async function Index() {
  return (
    <div className="w-full">
      <section className="py-8">
        <Heading1 className="text-center text-3xl font-semibold">
          Selamat Datang, Mohamad Kholid Bughowi
        </Heading1>
        <Text variant="muted" className="text-center text-base font-medium">
          Mahasiswa
        </Text>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Informasi Akademik Anda</CardTitle>
          <CardDescription>
            Berikut ringkasan informasi akademik Anda.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-3">
          {acamemicsInfo.map((item) => (
            <AcademicCard data={item} key={item.id} />
          ))}
        </CardContent>
      </Card>

      <section className="mt-6 flex justify-start gap-4">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Berita</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card className="w-[380px]">
          <CardHeader className="pb-3">
            <CardTitle>Pengumuman</CardTitle>
          </CardHeader>
          <CardContent className="px-3">
            <div className="mb-5">
              {announcements.map((item) => (
                <div
                  key={item.id}
                  className="hover:bg-muted rounded-lg px-2 py-2 hover:cursor-pointer"
                >
                  <Heading4 className="text-base font-medium">
                    {item.title}
                  </Heading4>
                  <Text className="text-muted-foreground line-clamp-2 py-1 text-sm">
                    {item.desc}
                  </Text>
                  <div className="mt-1 w-fit rounded border px-2 py-1 text-xs">
                    Selengkapnya
                  </div>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" className="w-full">
              <Link href="/announcements">Lihat Semua</Link>
            </Button>
            <div className="py-0" />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
