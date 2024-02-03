import { Heading1, Text } from '@rethinking-siakad/ui';
import { columns, type Equivalence } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Equivalence[]> {
  return [
    {
      id: crypto.randomUUID(),
      code: 'SM234101',
      subject: 'Dasar Pemrograman',
      sks: 4,
      required: true,
    },
    {
      id: crypto.randomUUID(),
      code: 'SM234101',
      subject: 'Dasar Pemrograman',
      sks: 4,
      required: true,
    },
    {
      id: crypto.randomUUID(),
      code: 'SM234101',
      subject: 'Dasar Pemrograman',
      sks: 4,
      required: true,
    },
    {
      id: crypto.randomUUID(),
      code: 'SM234101',
      subject: 'Dasar Pemrograman',
      sks: 4,
      required: true,
    },
    {
      id: crypto.randomUUID(),
      code: 'SM234101',
      subject: 'Dasar Pemrograman',
      sks: 4,
      required: true,
    },
    {
      id: crypto.randomUUID(),
      code: 'SM234101',
      subject: 'Dasar Pemrograman',
      sks: 4,
      required: true,
    },
    {
      id: crypto.randomUUID(),
      code: 'SM234101',
      subject: 'Dasar Pemrograman',
      sks: 4,
      required: true,
    },
    {
      id: crypto.randomUUID(),
      code: 'SM234101',
      subject: 'Dasar Pemrograman',
      sks: 4,
      required: true,
    },
  ];
}
export default async function EquivalencePage() {
  const data = await getData();

  return (
    <>
      <Heading1>Daftar Ekivalensi Mahasiswa</Heading1>
      <div className="my-5 w-fit rounded-lg border p-3">
        <Text>
          <span className="font-semibold">NRP</span>: 5025021253
        </Text>
        <Text>
          <span className="font-semibold">Tahun Kurikulum</span>: 2023
        </Text>
      </div>
      <div className="mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
