import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'

import {
  createBookingFormSchema,
  type BookingFormValues,
} from '@/features/booking/components/BookingForm/BookingForm.validation'
import { formatTripDateDisplay } from '@/features/trips/helpers/tripDates.helpers'
import type { TripDefinition } from '@/features/trips/types/trip.types'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { sendBookingNotificationEmail } from '@/features/booking/helpers/sendBookingEmail.helpers'
import { writeBookingRequest } from '@/lib/firebase/bookingRequestWriteService'
import type { User } from 'firebase/auth'

type BookingFormProps = {
  trip: TripDefinition
  user: User
  onSuccess: (outcome: 'full' | 'emailWarning') => void
}

export default function BookingForm({ trip, user, onSuccess }: BookingFormProps) {
  const { t, i18n } = useTranslation()
  const [submitting, setSubmitting] = useState(false)
  const bookingFormSchema = createBookingFormSchema(t, trip)
  const defaultDate = trip.availableDates[0] ?? ''

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: user.displayName ?? '',
      email: user.email ?? '',
      phone: '',
      preferredDate: defaultDate,
      peopleCount: trip.minPeople,
      message: '',
    },
  })

  async function onSubmit(values: BookingFormValues) {
    setSubmitting(true)
    try {
      const tripTitle = t(`trips.catalog.${trip.slug}.title`)
      const saved = await writeBookingRequest({
        userId: user.uid,
        tripId: trip.id,
        tripSlug: trip.slug,
        tripTitle,
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        preferredDateIso: values.preferredDate,
        peopleCount: values.peopleCount,
        message: values.message ?? '',
      })
      const emailResult = await sendBookingNotificationEmail({
        bookingRequestId: saved.bookingRequestId,
        tripId: trip.id,
        tripSlug: trip.slug,
        tripTitle,
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        preferredDateIso: values.preferredDate,
        peopleCount: values.peopleCount,
        message: values.message ?? '',
        createdAtIso: saved.createdAtIso,
      })
      if (emailResult.ok) {
        toast.success(t('booking.successFullToast'))
        onSuccess('full')
      } else {
        toast.warning(t('booking.emailWarningToast'))
        onSuccess('emailWarning')
      }
    } catch {
      toast.error(t('booking.submitError'))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-form">
        <div className="rounded-card border border-border/80 bg-muted/30 p-card text-body-sm text-muted-foreground">
          <p className="font-medium text-foreground">{t(`trips.catalog.${trip.slug}.title`)}</p>
          <p>{t(`trips.catalog.${trip.slug}.location`)}</p>
        </div>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('booking.form.fullName')}</FormLabel>
              <FormControl>
                <Input autoComplete="name" {...field} />
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
              <FormLabel>{t('booking.form.email')}</FormLabel>
              <FormControl>
                <Input type="email" autoComplete="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('booking.form.phone')}</FormLabel>
              <FormControl>
                <Input type="tel" autoComplete="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferredDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('booking.form.preferredDate')}</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger aria-label={t('booking.form.preferredDate')}>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {trip.availableDates.map((isoDate) => (
                    <SelectItem key={isoDate} value={isoDate}>
                      {formatTripDateDisplay(isoDate, i18n.language)}
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
          name="peopleCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('booking.form.peopleCount')}</FormLabel>
              <FormControl>
                <Input type="number" min={1} max={trip.maxPeople} {...field} />
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
              <FormLabel>{t('booking.form.message')}</FormLabel>
              <FormControl>
                <Textarea rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full sm:w-auto" disabled={submitting}>
          {submitting ? t('booking.form.submitting') : t('booking.form.submit')}
        </Button>
      </form>
    </Form>
  )
}
