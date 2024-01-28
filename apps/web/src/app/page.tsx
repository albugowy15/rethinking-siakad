import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Heading1,
  Heading4,
  Text,
} from '@rethinking-siakad/ui';
import Link from 'next/link';
import {
  acamemicsInfo,
  type AcademicInfo,
  announcements,
  type News,
  news,
} from './data';
import Image from 'next/image';

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

const NewsCard = (props: { data: News }) => {
  return (
    <div className="hover:bg-muted w-fit rounded-lg p-1.5 transition-colors hover:cursor-pointer">
      <Image
        className="rounded-lg"
        src={props.data.thumbnail}
        width={180}
        height={130}
        alt={props.data.title}
      />
      <div className="py-1.5" />
      <Text variant="small" className="text-muted-foreground py-1 text-xs">
        {props.data.date.toLocaleString()}
      </Text>
      <Heading4 className="line-clamp-2 text-sm">{props.data.title}</Heading4>
      <Text className="line-clamp-2 text-xs">{props.data.desc}</Text>
    </div>
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

      <section className="mt-6 flex items-start justify-start gap-4">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Berita</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-1">
            {news.map((item) => (
              <NewsCard key={item.id} data={item} />
            ))}
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/news">Lihat Semua</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-[380px]">
          <CardHeader className="pb-3">
            <CardTitle>Pengumuman</CardTitle>
          </CardHeader>
          <CardContent className="px-3">
            <div>
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
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/announcements">Lihat Semua</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
