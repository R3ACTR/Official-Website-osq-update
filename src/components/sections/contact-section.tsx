'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast"
import { ArrowRight } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export function ContactSection() {
    const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-32 border-t-2 border-primary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-headline text-4xl md:text-6xl font-bold mb-4">
          Get In Touch
        </h2>
        <p className="font-body text-lg text-foreground/80 mb-12">
          Have a project in mind or just want to say hello? Drop me a line.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-headline text-lg float-left">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} className="border-2 border-primary bg-background focus:ring-accent focus:ring-offset-0" />
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
                <FormLabel className="font-headline text-lg float-left">Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} className="border-2 border-primary bg-background focus:ring-accent focus:ring-offset-0" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-headline text-lg float-left">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Let's build something amazing together..."
                    className="h-40 border-2 border-primary bg-background focus:ring-accent focus:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-right">
            <Button type="submit" className="border-2 border-primary bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent shadow-neo-sm hover:shadow-neo transition-none">
              Send Message <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
