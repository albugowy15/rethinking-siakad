'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@rethinking-siakad/ui';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  username: z
    .string({ required_error: 'NRP wajib diisi' })
    .min(10, { message: 'NRP minimal terdiri dari 10 digit' })
    .max(20, { message: 'NRP maksimal terdiri dari 20 digit' }),
  password: z
    .string({ required_error: 'Kata sandi wajib diisi' })
    .min(8, { message: 'Kata sandi minimal 8 karakter' })
    .max(16, { message: 'Kata sandi maksimal 16 karakter' }),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  function onSubmit(data: LoginSchema) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6 py-7"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NRP</FormLabel>
              <FormControl>
                <Input placeholder="NRP" {...field} />
              </FormControl>
              <FormDescription>Masukkan NRP Anda</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kata sandi</FormLabel>
              <FormControl>
                <Input placeholder="Kata sandi" type="password" {...field} />
              </FormControl>
              <FormDescription>Masukkan kata sandi Anda</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button>Masuk</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
