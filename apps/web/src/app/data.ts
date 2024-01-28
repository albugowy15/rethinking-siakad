export interface AcademicInfo {
  id: string;
  title: string;
  value: string | number;
}
export const acamemicsInfo: AcademicInfo[] = [
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

export interface Announcement {
  id: string;
  title: string;
  desc: string;
}
export const announcements: Announcement[] = [
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

export interface News {
  id: string;
  title: string;
  desc: string;
  thumbnail: string;
  date: Date;
}
export const news: News[] = [
  {
    id: crypto.randomUUID(),
    title: 'News pertama',
    desc: 'Deskripsi news pertama',
    date: new Date(),
    thumbnail: 'https://source.unsplash.com/random/400x300',
  },
  {
    id: crypto.randomUUID(),
    title: 'News pertama',
    desc: 'Deskripsi news pertama',
    date: new Date(),
    thumbnail: 'https://source.unsplash.com/random/400x300',
  },
  {
    id: crypto.randomUUID(),
    title: 'News pertama',
    desc: 'Deskripsi news pertama yang bakalan panjang sekalie',
    date: new Date(),
    thumbnail: 'https://source.unsplash.com/random/400x300',
  },
  {
    id: crypto.randomUUID(),
    title: 'News pertama',
    desc: 'Deskripsi news pertama',
    date: new Date(),
    thumbnail: 'https://source.unsplash.com/random/400x300',
  },
  {
    id: crypto.randomUUID(),
    title: 'News pertama',
    desc: 'Deskripsi news pertama',
    date: new Date(),
    thumbnail: 'https://source.unsplash.com/random/400x300',
  },
  {
    id: crypto.randomUUID(),
    title: 'News pertama',
    desc: 'Deskripsi news pertama',
    date: new Date(),
    thumbnail: 'https://source.unsplash.com/random/400x300',
  },
];
