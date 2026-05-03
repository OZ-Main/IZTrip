import {
  tripItineraryTimelineCardVariants,
  tripItineraryTimelineConnectorVariants,
  tripItineraryTimelineDotVariants,
  tripItineraryTimelineRailVariants,
  tripItineraryTimelineRootVariants,
  tripItineraryTimelineRowVariants,
} from '@/features/trips/components/TripItineraryTimeline/TripItineraryTimeline.styles'
import type { TripItineraryDayView } from '@/features/trips/helpers/tripDetailsView.helpers'

type TripItineraryTimelineProps = {
  days: TripItineraryDayView[]
}

export default function TripItineraryTimeline({ days }: TripItineraryTimelineProps) {
  if (days.length === 0) {
    return null
  }

  return (
    <div className={tripItineraryTimelineRootVariants()}>
      {days.map((dayItem, dayIndex) => {
        const isLastDay = dayIndex === days.length - 1

        return (
          <div key={dayItem.day} className={tripItineraryTimelineRowVariants()}>
            <div className={tripItineraryTimelineRailVariants()}>
              {!isLastDay ? (
                <div className={tripItineraryTimelineConnectorVariants()} aria-hidden />
              ) : null}
              <span className={tripItineraryTimelineDotVariants()} aria-hidden>
                {dayItem.day}
              </span>
            </div>
            <div className={tripItineraryTimelineCardVariants()}>
              <h3 className="font-display text-heading-sm font-semibold leading-snug text-foreground">
                {dayItem.title}
              </h3>
              <p className="text-body leading-relaxed text-muted-foreground">{dayItem.body}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
