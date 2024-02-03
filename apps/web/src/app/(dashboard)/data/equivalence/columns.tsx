'use client';

import { Checkbox } from '@rethinking-siakad/ui';
import { type ColumnDef } from '@tanstack/react-table';

export type Equivalence = {
  id: string;
  code: string;
  subject: string;
  sks: number;
  required: boolean;
};

export const columns: ColumnDef<Equivalence>[] = [
  {
    accessorKey: 'code',
    header: 'Kode',
  },
  {
    accessorKey: 'subject',
    header: 'Mata Kuliah',
  },
  {
    accessorKey: 'sks',
    header() {
      return <div className="text-center">SKS</div>;
    },
    cell(props) {
      return <div className="text-center">{props.row.getValue('sks')}</div>;
    },
  },
  {
    accessorKey: 'required',
    header() {
      return <div className="text-center">Wajib diambil</div>;
    },
    cell(props) {
      return (
        <div className="flex justify-center">
          <Checkbox checked={props.row.getValue('required')} disabled />
        </div>
      );
    },
  },
];
