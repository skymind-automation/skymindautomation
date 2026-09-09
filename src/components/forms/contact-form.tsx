"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import {
  contactFormSchema,
  serviceOptions,
  companySizeOptions,
  budgetRangeOptions,
  timelineOptions,
  type ContactFormValues,
} from "@/lib/validations/contact";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type ContactFormProps = {
  defaultService?: string;
};

type SuccessState = {
  message: string;
  id?: string;
};

type ApiOkResponse = {
  ok: true;
  message: string;
  id: string;
};

type ApiErrorResponse = {
  ok: false;
  error: string;
  fields?: Record<string, string[]>;
  retryAfter?: string;
};

const VALID_SERVICES: readonly string[] = serviceOptions;

function isService(value: string): value is (typeof serviceOptions)[number] {
  return VALID_SERVICES.includes(value);
}

export function ContactForm({ defaultService }: ContactFormProps) {
  const [formError, setFormError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<SuccessState | null>(null);

  const initialService = defaultService && isService(defaultService) ? defaultService : "";

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      companySize: "",
      service: initialService,
      budgetRange: "",
      timeline: "",
      goal: "",
      currentSystems: "",
      message: "",
      website: "",
    } as ContactFormValues,
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: ContactFormValues) {
    setFormError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      let data: ApiOkResponse | ApiErrorResponse | null = null;
      try {
        data = (await res.json()) as ApiOkResponse | ApiErrorResponse;
      } catch {
        data = null;
      }

      if (res.status === 201 && data && data.ok === true) {
        setSuccess({ message: data.message, id: data.id });
        toast.success("Inquiry received", { description: data.message });
        return;
      }

      if (res.status === 422 && data && data.ok === false) {
        if (data.fields) {
          for (const [field, messages] of Object.entries(data.fields)) {
            const msg = messages?.[0];
            if (msg) {
              form.setError(field as keyof ContactFormValues, {
                type: "server",
                message: msg,
              });
            }
          }
        }
        setFormError(
          data.error || "Validation failed. Please check your inputs and try again."
        );
        return;
      }

      if (res.status === 429 && data && data.ok === false) {
        const retryAfter = data.retryAfter;
        const friendlyTime = retryAfter
          ? new Date(retryAfter).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : "shortly";
        setFormError(
          `Too many submissions from you recently. Please try again after ${friendlyTime}.`
        );
        return;
      }

      setFormError(
        "Something went wrong. Please try again or email hello@skymindautomation.com."
      );
    } catch {
      setFormError(
        "Network error. Please check your connection and try again, or email hello@skymindautomation.com."
      );
    }
  }

  function handleSendAnother() {
    setSuccess(null);
    setFormError(null);
    form.reset();
  }

  if (success) {
    return (
      <Card className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid opacity-40"
        />
        <CardContent className="relative flex flex-col items-center justify-center gap-5 px-6 py-16 text-center sm:py-20">
          <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 glow-primary">
            <CheckCircle2 className="size-9 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Inquiry received
            </h3>
            <p className="mx-auto max-w-md text-sm text-muted-foreground sm:text-base">
              {success.message}
            </p>
            {success.id && (
              <p className="font-mono text-xs text-muted-foreground">
                Reference:{" "}
                <span className="text-foreground/80">{success.id}</span>
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              We respond within 1 business day.
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            onClick={handleSendAnother}
            className="mt-2"
          >
            Send another inquiry
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Project inquiry</CardTitle>
        <CardDescription>
          Fill out the form below — we&apos;ll get back to you within one
          business day.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            {/* Honeypot — real users never see this. Bots fill every field. */}
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="website-hp">Website (leave empty)</label>
              <input
                id="website-hp"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...form.register("website")}
              />
            </div>

            {formError && (
              <Alert variant="destructive" role="alert">
                <AlertCircle className="size-4" />
                <AlertTitle>Couldn&apos;t send your inquiry</AlertTitle>
                <AlertDescription>{formError}</AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Name
                      <span className="ml-0.5 text-destructive" aria-hidden="true">
                        *
                      </span>
                      <span className="sr-only">(required)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        aria-required="true"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        autoComplete="organization"
                        placeholder="Where you work"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email
                      <span className="ml-0.5 text-destructive" aria-hidden="true">
                        *
                      </span>
                      <span className="sr-only">(required)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        aria-required="true"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      We&apos;ll never share your email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        autoComplete="tel"
                        placeholder="+1 (555) 000-0000"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="companySize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company size</FormLabel>
                  <Select
                    value={field.value || undefined}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {companySizeOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What are you trying to achieve?
                    <span className="ml-0.5 text-destructive" aria-hidden="true">
                      *
                    </span>
                    <span className="sr-only">(required)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about the problem you're trying to solve or the AI system you want to build…"
                      className="min-h-32"
                      aria-required="true"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Minimum 15 characters.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currentSystems"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current systems</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tools, models, or infrastructure you already use (optional)…"
                      className="min-h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Optional — helps us tailor our response.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interested service</FormLabel>
                    <Select
                      value={field.value || undefined}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {serviceOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budgetRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget range</FormLabel>
                    <Select
                      value={field.value || undefined}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {budgetRangeOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timeline</FormLabel>
                  <Select
                    value={field.value || undefined}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a timeline" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {timelineOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional information</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Anything else we should know (optional)…"
                      className="min-h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-3">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send inquiry"
                )}
              </Button>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="size-3.5 text-primary" />
                Protected by honeypot &amp; rate-limiting. We hash IPs for abuse
                prevention.
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
