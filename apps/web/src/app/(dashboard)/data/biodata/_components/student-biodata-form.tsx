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
} from '@rethinking-siakad/ui';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

const studentBiodataSchema = z.object({
  nik: z
    .number({ required_error: 'NIK Wajib diisi' })
    .min(1, { message: 'NIK wajib diisi' }),
  email: z
    .string({ required_error: 'Email wajib diisi' })
    .email({ message: 'Email tidak valid' })
    .min(1, { message: 'Email wajib diisi' }),
  phone_number: z
    .string({ required_error: 'Nomor handphone wajib diisi' })
    .min(9, { message: 'Nomor handphone minimal 9 digit' })
    .max(13, { message: 'Nomor handphone maksimal 13 digit' }),
  address: z
    .string({ required_error: 'Alamat wajib diisi' })
    .min(1, { message: 'Alamat minimal 10 karakter' })
    .max(1, { message: 'Alamat maksimal 50 karakter' }),
});

type StudentBiodata = z.infer<typeof studentBiodataSchema>;

const StudentBiodataForm = () => {
  const form = useForm<StudentBiodata>({
    resolver: zodResolver(studentBiodataSchema),
  });
  const onSubmit: SubmitHandler<StudentBiodata> = (data) => {
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="emailanda@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alamat Lengkap</FormLabel>
              <FormControl>
                <Input
                  placeholder="Jalan Panjaitan No. 45, Surabaya, Jawa Timur"
                  {...field}
                />
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
              <FormLabel>Nomor Handphone</FormLabel>
              <FormControl>
                <Input placeholder="0891537276644" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-4 w-fit">
          Simpan
        </Button>
      </form>
    </Form>
  );
};

export default StudentBiodataForm;
