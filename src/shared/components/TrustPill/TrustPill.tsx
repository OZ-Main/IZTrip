import { trustPillVariants } from '@/shared/components/TrustPill/TrustPill.styles'
import { cn } from '@/shared/utils/cn'

type TrustPillProps = {
  label: string
  className?: string
}

export default function TrustPill({ label, className }: TrustPillProps) {
  return <span className={cn(trustPillVariants(), className)}>{label}</span>
}
