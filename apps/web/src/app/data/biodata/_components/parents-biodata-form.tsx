'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@rethinking-siakad/ui';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const parentsBiodataSchema = z.object({
  type: z.string({ required_error: 'Jenis wali wajib diisi' }),
  nik: z
    .string({ required_error: 'NIK wajib diisi' })
    .min(16, { message: 'NIK minimal 16 digit' }),
  name: z
    .string({ required_error: 'Nama wajib diisi' })
    .min(1, { message: 'Nama wajib diisi' }),
  gender: z
    .string({ required_error: 'Jenis kelamin wajib diisi' })
    .min(1, { message: 'Jenis kelamin wajib diisi' }),
  phone_number: z
    .string({ required_error: 'Nomor handphone wajib diisi' })
    .min(9, { message: 'Nomor handphone minimal 9 digit' })
    .max(14, { message: 'Nomor handphone maksimal 14 digit' }),
});

type ParentsBiodata = z.infer<typeof parentsBiodataSchema>;

const ParentsBiodataForm = () => {
  const form = useForm<ParentsBiodata>({
    resolver: zodResolver(parentsBiodataSchema),
  });
  const onSubmit: SubmitHandler<ParentsBiodata> = (data) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        className="grid grid-cols-2 gap-4 py-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jenis Wali</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis wali" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ayah">Ayah</SelectItem>
                  <SelectItem value="ibu">Ibu</SelectItem>
                  <SelectItem value="wali">Wali</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nik"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NIK</FormLabel>
              <FormControl>
                <Input placeholder="NIK" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl>
                <Input placeholder="Nama Lengkap" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No Handphone</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit">
          Simpan
        </Button>
      </form>
    </Form>
  );
};

export default ParentsBiodataForm;
