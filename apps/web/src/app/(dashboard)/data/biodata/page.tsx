import {
  Heading2,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from '@rethinking-siakad/ui';
import StudentBiodataForm from './_components/student-biodata-form';
import ParentsBiodataForm from './_components/parents-biodata-form';

export default function DataGraduationPage() {
  return (
    <div>
      <Tabs defaultValue="mahasiswa">
        <TabsList>
          <TabsTrigger value="mahasiswa">Mahasiswa</TabsTrigger>
          <TabsTrigger value="wali">Orang Tua/Wali</TabsTrigger>
        </TabsList>
        <TabsContent value="mahasiswa" className="py-4">
          <Heading2 className="pb-3">Update Biodata Mahasiwa</Heading2>
          <Text>
            Update biodata anda dan lakukan verifikasi terhadap email dan nomor
            handphone yang anda masukkan.
          </Text>
          <div>
            <StudentBiodataForm />
          </div>
        </TabsContent>
        <TabsContent value="wali" className="py-4">
          <Heading2 className="pb-3">Update Biodata Orang Tua/Wali</Heading2>
          <Text>
            Update biodata orang tua/wali dan lakukan verifikasi terhadap email
            dan nomor handphone yang anda masukkan.
          </Text>
          <div>
            <ParentsBiodataForm />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
