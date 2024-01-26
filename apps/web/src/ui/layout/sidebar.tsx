import { Text } from '@rethinking-siakad/ui';
import { sidebarMenus } from '../../lib/navigation';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="h-screen w-[290px] border-r px-5 py-2">
      <section className="mb-5">
        <Text className="py-2 pt-5 font-bold" variant="large">
          SIAKAD
        </Text>
        <Text variant="small">Sistem Informasi Akademik</Text>
      </section>
      <section className="space-y-3">
        {sidebarMenus.map((menu) => (
          <div key={menu.id}>
            <Text className="py-2 text-xs font-bold">{menu.parent}</Text>
            <div className="space-y-1.5">
              {menu.child.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  className="hover:bg-muted inline-flex w-full items-center rounded px-3 py-2 hover:cursor-pointer"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </aside>
  );
};

export default Sidebar;
