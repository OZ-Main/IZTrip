import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, MailWarning } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import {
  bookingSuccessViewActionsVariants,
  bookingSuccessViewCardSuccessVariants,
  bookingSuccessViewCardVariants,
  bookingSuccessViewCardWarningVariants,
  bookingSuccessViewDescriptionVariants,
  bookingSuccessViewHeaderVariants,
  bookingSuccessViewIconRowVariants,
  bookingSuccessViewNextTitleVariants,
  bookingSuccessViewNextVariants,
  bookingSuccessViewRootVariants,
  bookingSuccessViewTitleSuccessVariants,
  bookingSuccessViewTitleVariants,
  bookingSuccessViewTitleWarningVariants,
  bookingSuccessViewTripBannerVariants,
  bookingSuccessViewTripTitleVariants,
} from '@/features/booking/components/BookingSuccessView/BookingSuccessView.styles'
import { Button } from '@/components/ui/button'
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { cn } from '@/shared/utils/cn'

type BookingSuccessViewProps = {
  tripSlug: string
  tripTitle: string
  outcome: 'full' | 'emailWarning'
}

export default function BookingSuccessView({ tripSlug, tripTitle, outcome }: BookingSuccessViewProps) {
  const { t } = useTranslation()
  const prefersReducedMotion = useReducedMotion()
  const isEmailWarning = outcome === 'emailWarning'

  const cardToneClass = isEmailWarning
    ? bookingSuccessViewCardWarningVariants()
    : bookingSuccessViewCardSuccessVariants()

  const titleToneClass = isEmailWarning
    ? bookingSuccessViewTitleWarningVariants()
    : bookingSuccessViewTitleSuccessVariants()

  const successTitle = isEmailWarning ? t('booking.successWithWarning.title') : t('booking.success.title')
  const successDescription = isEmailWarning
    ? t('booking.successWithWarning.description')
    : t('booking.success.description')

  return (
    <div className={bookingSuccessViewRootVariants()}>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={cn(bookingSuccessViewCardVariants(), cardToneClass)}>
          <div className={bookingSuccessViewHeaderVariants()}>
            <div className={bookingSuccessViewIconRowVariants()}>
              {isEmailWarning ? (
                <MailWarning
                  className="mt-0.5 h-10 w-10 shrink-0 text-amber-600 dark:text-amber-300"
                  aria-hidden
                />
              ) : (
                <CheckCircle2 className="mt-0.5 h-10 w-10 shrink-0 text-success" aria-hidden />
              )}
              <div className="min-w-0 space-y-tight">
                <h1 className={cn(bookingSuccessViewTitleVariants(), titleToneClass)}>{successTitle}</h1>
                <p className={bookingSuccessViewDescriptionVariants()}>{successDescription}</p>
              </div>
            </div>
            <div className={bookingSuccessViewTripBannerVariants()}>
              <p className="text-caption font-semibold uppercase tracking-wide text-muted-foreground">
                {t('booking.success.tripLabel')}
              </p>
              <p className={bookingSuccessViewTripTitleVariants()}>{tripTitle}</p>
            </div>
            <div className={bookingSuccessViewNextVariants()}>
              <p className={bookingSuccessViewNextTitleVariants()}>{t('booking.success.nextTitle')}</p>
              <ul className="mt-tight space-y-tight">
                <li>{t('booking.success.next1')}</li>
                <li>{t('booking.success.next2')}</li>
                <li>{t('booking.success.next3')}</li>
              </ul>
            </div>
          </div>
          <div className={bookingSuccessViewActionsVariants()}>
            <Button type="button" variant="secondary" className="min-h-12 w-full sm:min-w-[12rem]" asChild>
              <Link to={APP_ROUTE.tripDetails(tripSlug)}>{t('booking.success.viewTrip')}</Link>
            </Button>
            <Button type="button" variant="outline" className="min-h-12 w-full sm:min-w-[12rem]" asChild>
              <Link to={APP_ROUTE.trips}>{t('booking.success.exploreMore')}</Link>
            </Button>
            <Button type="button" className="min-h-12 w-full sm:min-w-[12rem]" asChild>
              <Link to={APP_ROUTE.home}>{t('booking.success.backHome')}</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
