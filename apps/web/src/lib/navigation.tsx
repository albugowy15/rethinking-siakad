import {
  ArrowLeftRight,
  CalendarCheck,
  FileQuestion,
  GraduationCap,
  Library,
  ListChecks,
  MonitorCheck,
  NotepadText,
  ScrollText,
} from 'lucide-react';
import React from 'react';

interface SidebarMenu {
  id: string;
  parent: string;
  child: {
    id: string;
    icon: React.ReactNode;
    title: string;
    link: string;
  }[];
}

export const sidebarMenus: SidebarMenu[] = [
  {
    id: crypto.randomUUID(),
    parent: 'Data',
    child: [
      {
        id: crypto.randomUUID(),
        icon: <GraduationCap className="mr-2 h-4 w-4" />,
        link: '/data/graduation',
        title: 'Wisuda',
      },
      {
        id: crypto.randomUUID(),
        icon: <NotepadText className="mr-2 h-4 w-4" />,
        link: '/data/biodate',
        title: 'Biodata',
      },
      {
        id: crypto.randomUUID(),
        icon: <ArrowLeftRight className="mr-2 h-4 w-4" />,
        link: '/data/equivalence',
        title: 'Ekivalensi',
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    parent: 'Proses',
    child: [
      {
        id: crypto.randomUUID(),
        icon: <FileQuestion className="mr-2 h-4 w-4" />,
        link: '/process/questionnare',
        title: 'Kuesioner IPD',
      },
      {
        id: crypto.randomUUID(),
        icon: <Library className="mr-2 h-4 w-4" />,
        link: '/process/curriculum',
        title: 'Kurikulum',
      },
      {
        id: crypto.randomUUID(),
        icon: <MonitorCheck className="mr-2 h-4 w-4" />,
        link: '/process/frs',
        title: 'Formulir Rencana Studi',
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    parent: 'Laporan',
    child: [
      {
        id: crypto.randomUUID(),
        icon: <ScrollText className="mr-2 h-4 w-4" />,
        link: '/report/transcript',
        title: 'Transkip',
      },
      {
        id: crypto.randomUUID(),
        icon: <CalendarCheck className="mr-2 h-4 w-4" />,
        link: '/report/schedule',
        title: 'Jadwal Kuliah',
      },
      {
        id: crypto.randomUUID(),
        icon: <ListChecks className="mr-2 h-4 w-4" />,
        link: '/report/grades',
        title: 'Nilai per Semester',
      },
    ],
  },
];
